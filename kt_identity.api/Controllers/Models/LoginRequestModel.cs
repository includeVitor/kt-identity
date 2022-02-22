using System.ComponentModel.DataAnnotations;

namespace kt_identity.api.Controllers.Models
{
    public class LoginRequestModel
    {
        [Required]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
