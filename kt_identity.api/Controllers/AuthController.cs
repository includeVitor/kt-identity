using kt_identity.api.Controllers.Models;
using kt_identity.api.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace kt_identity.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public AuthController(ILogger<AuthController> logger, 
            UserManager<ApplicationUser> userManger,
            SignInManager<ApplicationUser> signInManager)
            
        {
            _signInManager = signInManager;
            _userManager = userManger;
            _logger = logger;
        }

        private static long ToUnixEpochDate(DateTime date)
            => (long)Math.Round((date.ToUniversalTime() - new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero)).TotalSeconds);

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginRequestModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var result = await _signInManager.PasswordSignInAsync(model.Login, model.Password, model.RememberMe, false);

            if (!result.Succeeded)
            {

                if (result.IsNotAllowed)
                {
                    ModelState.AddModelError("Error", "You must confirm your e-mail before login");
                }

                if (result.IsLockedOut)
                {
                    ModelState.AddModelError("Error", "You are lock out"); 
                }

                return BadRequest(ModelState);
            }

            var user = await _userManager.FindByNameAsync(model.Login);

            var claims = await _userManager.GetClaimsAsync(user);

            claims.Add(new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Name, user.UserName));
            claims.Add(new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Sub, user.Id));
            claims.Add(new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Email, user.Email));
            claims.Add(new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
            claims.Add(new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Nbf, ToUnixEpochDate(DateTime.UtcNow).ToString()));
            claims.Add(new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Iat, ToUnixEpochDate(DateTime.UtcNow).ToString(), ClaimValueTypes.Integer64));

            var identityClaims = new ClaimsIdentity();

            identityClaims.AddClaims(claims);

            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes("c17885f8541846369cffb05c295bdc2d");

            var token = tokenHandler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = "kt_identity",
                Audience = "https://localhost:7001/",
                Subject = identityClaims,
                Expires = DateTime.UtcNow.AddHours(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            });

            return Ok(new {access_token = tokenHandler.WriteToken(token)});
        }

        [HttpPost("Logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();

            return Ok();
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterRequestModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = new ApplicationUser
            {
                Email = model.Email,
                UserName = model.UserName,
                Age =  model.Age,
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                foreach(var error  in result.Errors)
                {
                    ModelState.AddModelError("Errors", error.Description);
                }
                return BadRequest(ModelState);
            }

            await _userManager.AddClaimAsync(user, new Claim("Animals", "Get"));

            var confirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var url = Url.PageLink(protocol: "http", host: "localhost:3000", values: new { userId = user.Id, token = confirmationToken });

            return Ok(url);
        }

        [HttpPost("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail( ConfirmEmailRequestModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = await _userManager.FindByIdAsync(model.UserId);

            if(user != null)
            {
                var result = await _userManager.ConfirmEmailAsync(user, model.Token);

                if (result.Succeeded)
                {
                    return Ok();
                }
            }

            return BadRequest();
            
        }

        [HttpPost("GenerateUsers")]
        public async Task<IActionResult> GenerateUsers()
        {
            var user1 = new ApplicationUser
            {
                Email = "Animal@teste.com",
                UserName = "Animal",
                Age = 20,
                EmailConfirmed = true
            };

            var user2 = new ApplicationUser
            {
                Email = "Gamer@teste.com",
                UserName = "Gamer",
                Age = 20,
                EmailConfirmed = true
            };

            var user3 = new ApplicationUser
            {
                Email = "Country@teste.com",
                UserName = "Country",
                Age = 20,
                EmailConfirmed = true
            };


            var admin = new ApplicationUser
            {
                Email = "Admin@teste.com",
                UserName = "Admin",
                Age = 20,
                EmailConfirmed = true
            };

            await _userManager.CreateAsync(user1, "Padrao@998");

            await _userManager.AddClaimAsync(user1, new Claim("Animals", "Get"));

            await _userManager.CreateAsync(user2, "Padrao@998");

            await _userManager.AddClaimAsync(user2, new Claim("Gamers", "Get"));

            await _userManager.CreateAsync(user3, "Padrao@998");

            await _userManager.AddClaimAsync(user3, new Claim("Countries", "Get"));

            await _userManager.CreateAsync(admin, "Padrao@998");

            await _userManager.AddClaimAsync(admin, new Claim("Animals", "Get"));
            await _userManager.AddClaimAsync(admin, new Claim("Gamers", "Get"));
            await _userManager.AddClaimAsync(admin, new Claim("Countries", "Get"));

            return Ok();
        }
    }
}