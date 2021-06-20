using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Data.Entities;

namespace WebApp.Data
{
    public class WebAppSeeder 
    {
        private readonly WebAppContext _ctx;
        private readonly IWebHostEnvironment _hosting;
        private readonly UserManager<StoreUser> _userManager;

        public WebAppSeeder(WebAppContext ctx, IWebHostEnvironment hosting, UserManager<StoreUser> userManager)
        {
            this._ctx = ctx;
            this._hosting = hosting;
            this._userManager = userManager;
        }

        public async Task SeedAsync()
        {
            //checker that database actually exist
            _ctx.Database.EnsureCreated();

            //we cant use await to a public void Seed method, add async
            //If a method is async, you have to add good naming convention
            StoreUser user = await _userManager.FindByEmailAsync("mprincess.santillan@gmail.com");
            if (user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Maria",
                    LastName = "Santillan",
                    Email = "mprincess.santillan@gmail.com",
                    UserName = "mamaria"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");

                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create new user in seeder");
                }
            }


            if (!_ctx.Products.Any())
            {
                //we need to create sample data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
                var json = File.ReadAllText(filepath);

                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _ctx.Products.AddRange(products);

                var orders = _ctx.Orders.Where(o => o.Id == 1).FirstOrDefault();
                if (orders != null)
                {
                    orders.User = user;
                    orders.Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    };
                }

                _ctx.SaveChanges();
            }
        }
    }
}
