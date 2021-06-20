using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace WebApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //CreateHostBuilder(args).Build().Run();
            var host = BuildWebHost(args);
            //upon system starts, it's gonna look at all parts of database if there are any incomplete information. Validate. Happens on startup of web server.
            SeedDb(host);
            host.Run();
        }

        private static void SeedDb(IWebHost host)
        {
            //creates a scrope for a lifetime of requests. You get instance of an object that is true throught entire request.
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();

            //using - means that the scope will be closed once work is done
            using (var scope = scopeFactory.CreateScope())
            {
                var seeder = scope.ServiceProvider.GetService<WebAppSeeder>();
                seeder.SeedAsync().Wait();

                //means we're seeding until loading 
                //instead of trying to do this seeding while we bring up the web server and such.
                //wont affect the runtime behavior

            }
                
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(SetupConfiguration)            //for connecting to database
                .UseStartup<Startup>()
                .Build();

        private static void SetupConfiguration(WebHostBuilderContext ctx, IConfigurationBuilder builder)
        {
            // Removing default configuration options
            builder.Sources.Clear();

            //Adding dynamic configuration
            builder.AddJsonFile("config.json", false, true)     //false: make file non optional. true: reload on change
                //.AddXmlFile("config.xml", true)                 //true: make file optional. Multiple config
                .AddEnvironmentVariables();
        }
    }
}
