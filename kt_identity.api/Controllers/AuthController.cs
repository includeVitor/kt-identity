using Microsoft.AspNetCore.Mvc;

namespace kt_identity.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;

        public AuthController(ILogger<AuthController> logger)
        {
            _logger = logger;
        }

        [HttpGet("Login")]
        public IActionResult Login()
        {
            return Ok();
        }

        [HttpPost("Logout")]
        public IActionResult Logout()
        {
            return Ok();
        }
    }
}