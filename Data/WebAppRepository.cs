using Castle.Core.Logging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Data.Entities;

namespace WebApp.Data
{
    //implementing interface to expose to the database methods we wanna apply
    public class WebAppRepository : IWebAppRepository
    {
        //NOTE: IMPLEMENT INTERFACE AFTER ADDING INFORMATION FROM WEBAPPREPOSITORY WHICH IS CONNECTED TO IWEBAPPREPOSITORY

        private readonly WebAppContext _ctx;
        private readonly ILogger<WebAppRepository> _logger;

        public WebAppRepository(WebAppContext ctx, ILogger<WebAppRepository> logger)
        {
            this._ctx = ctx;
            this._logger = logger;
        }

        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }

        public IEnumerable<Order> GetAllOrders(bool includeItems)
        {
            if (includeItems)
            {
                return _ctx.Orders
                       .Include(o => o.Items)
                       .ThenInclude(o => o.Product)
                       .ToList();
            }
            else
            {
                return _ctx.Orders
                       .ToList();
            }
           
        }

        public IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems)
        {
            if (includeItems)
            {
                return _ctx.Orders
                       .Where(o => o.User.UserName == username)
                       .Include(o => o.Items)
                       .ThenInclude(o => o.Product)
                       .ToList();
            }
            else
            {
                return _ctx.Orders
                        .Where(o => o.User.UserName == username)
                       .ToList();
            }
        }

        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                _logger.LogInformation("GetAllProducts has been called.");
                return _ctx.Products
                            .OrderBy(p => p.Title)
                            .ToList();
            }
            catch (Exception ex)
            {

                _logger.LogError($"Falied to get all products: {ex}");
                return null;
            }
            
        }

        public Order GetOrderById(string username, int id)
        {
            return _ctx.Orders
                       .Include(o => o.Items)
                       .ThenInclude(o => o.Product)
                       .Where(o => o.Id == id && o.User.UserName == username)
                       .FirstOrDefault();
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _ctx.Products
                        .Where(p => p.Category == category)
                        .ToList();
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;  //saveChanges return number of rows affected
        }
    }
}
