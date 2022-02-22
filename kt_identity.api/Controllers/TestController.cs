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

        [HttpGet("games")]
        public IActionResult GetGames()
        {
            return Ok();
        }

        [HttpGet("animals")]
        public IActionResult GetAnimals()
        {
            return Ok();
        }

        [HttpGet("countries")]
        public IActionResult GetCountries()
        {
            return Ok();
        }
    }
}