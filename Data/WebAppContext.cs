using WebApp.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace WebApp.Data
{
    public class WebAppContext : IdentityDbContext<StoreUser>
    {
        //Changing DbContext to IdentityDbContext and adding dependency using nuget package manager solution , change to IdentityDbContext<StoreUser>
        //create constructor for DB connection
        public WebAppContext(DbContextOptions<WebAppContext> options): base(options)
        {
        
        }

        //use plural form for declaring variables
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        //orderItem is connected to orders and we can use orderItem accross orders. We ain't gonna need it so we omit.
        //public DbSet<OrderItem> OrderItems { get; set; }
        //Add only DbSet to entities you wanna query directly

        //NO NEED TO ADD DBSET STOREUSERS SINCE IT'S BEEN ADDED AS IDENTIFY

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Order>()
                .HasData(new Order()
                {
                    Id = 1,
                    OrderDate = DateTime.UtcNow,
                    OrderNumber = "12345"
                });
        }
    }
}
