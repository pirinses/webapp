using System.Collections.Generic;
using WebApp.Data.Entities;

namespace WebApp.Data
{
    //creating an interface so if we want to do testing, we can mock up data testing without actually testing the actual info from database
    public interface IWebAppRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);

        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);
        Order GetOrderById(string username, int id);

        bool SaveAll();
        void AddEntity(object model);
        
    }
}