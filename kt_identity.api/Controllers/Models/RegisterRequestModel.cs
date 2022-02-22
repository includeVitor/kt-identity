using System.ComponentModel.DataAnnotations;

namespace kt_identity.api.Controllers.Models
{
    public class RegisterRequestModel
    {
        [Required]
        [EmailAddress(ErrorMessage = "The Email field is not a valid e-mail address.")]
        public string Email { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
