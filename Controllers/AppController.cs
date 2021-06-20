using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Data;
using WebApp.Services;
using WebApp.ViewModels;

namespace WebApp.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private readonly IWebAppRepository _repository;
        //private readonly WebAppContext _context;
        //private readonly WebAppContext _ctx;

        //create controller that will inject services needed
        public AppController(IMailService mailService, IWebAppRepository repository)
        {
            this._mailService = mailService;
            this._repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            //ViewBag.Title = "Contact Us";
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                _mailService.SendMessage("mprincess.santillan@gmail.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail sent";
                ModelState.Clear();
            }


            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About Us";

            return View();

        }

        public IActionResult Shop()
        {
            //var results = _context.Products
            //    .OrderBy(p => p.Category)
            //    .ToList();

            var results = _repository.GetAllProducts();
            return View(results);
        }

    }
}
