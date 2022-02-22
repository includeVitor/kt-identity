using Microsoft.AspNetCore.Identity;

namespace kt_identity.api.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int Age { get; set; }
    }
}
