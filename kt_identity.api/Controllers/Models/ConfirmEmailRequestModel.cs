using System.ComponentModel.DataAnnotations;

namespace kt_identity.api.Controllers.Models
{
    public class ConfirmEmailRequestModel
    {
        [Required]
        public string UserId { get; set; }

        [Required]
        public string Token { get; set; }
    }
}
