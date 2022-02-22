using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace kt_identity.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private readonly ILogger<TestController> _logger;

        public TestController(ILogger<TestController> logger)
        {
            _logger = logger;
        }

        [Authorize(Policy = "Gamers.Get")]
        [HttpGet("gamers")]
        public IActionResult GetGames()
        {
            var list = new List<string>
            {
                "League of Legends",
                "It takes two",
                "Dota"
            };

            return Ok(list);
        }

        [Authorize(Policy = "Animals.Get")]
        [HttpGet("animals")]
        public IActionResult GetAnimals()
        {
            var list = new List<string>
            {
                "Cachorro",
                "Gato",
                "Galinha"
            };

            return Ok(list);
        }

        [Authorize(Policy = "Countries.Get")]
        [HttpGet("countries")]
        public IActionResult GetCountries()
        {
            var list = new List<string>
            {
                "Brasil",
                "Inglaterra",
                "Portugal"
            };

            return Ok(list);
        }
    }
}