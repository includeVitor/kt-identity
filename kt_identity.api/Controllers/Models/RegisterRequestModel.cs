using System.ComponentModel.DataAnnotations;

namespace kt_identity.api.Controllers.Models
{
    public class RegisterRequestModel
    {
        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
