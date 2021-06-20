using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Data;
using Microsoft.Extensions.Logging;
using WebApp.Data.Entities;

namespace WebApp.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ProductsController : ControllerBase
    {
        private readonly IWebAppRepository _repository;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(IWebAppRepository repository, ILogger<ProductsController> logger)
        {
            this._repository = repository;
            this._logger = logger;
        }
    
        [HttpGet]
        [ProducesResponseType(200)] //which means OK
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Product>> Get()
        {
            //IActionResult - KIND OF HIDES RESULT TYPES IN API ASP.NET 2.1
            try
            {
                return Ok(_repository.GetAllProducts());
            }
            catch (Exception ex)
            {

                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Bad Request");
            }
            
        }
    
    }


}
