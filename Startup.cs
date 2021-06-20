using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
//using AutoMapper;
using WebApp.Data;
using WebApp.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using WebApp.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace WebApp
{
    public class Startup
    {
        //Constructor
        private readonly IConfiguration _config;
        public Startup(IConfiguration config)
        {
            _config = config;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<StoreUser, IdentityRole>(cfg => {
                cfg.User.RequireUniqueEmail = true;

                //cfg.Password.RequireDigit         //SETUP YOUR OWN PW VALIDATION
            }).AddEntityFrameworkStores<WebAppContext>();     //means data is gonna be stored in webappcontext. Idea is we're telling it the type of contect to use
                                                              //NOTE: We can have context for identity and another context for data 
                                                              //BUT SINCE APP IS SIMPLE, IVE COMBINED THEM TO ONE.

            //add dependencies for AddJwtBearer()
            services.AddAuthentication()//auth =>
                    //{
                    //    auth.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    //})
                     .AddCookie()
                     .AddJwtBearer(cfg =>
                     {
                         cfg.TokenValidationParameters = new TokenValidationParameters()
                         {
                             ValidateIssuer = true,
                             ValidateAudience = true,
                             ValidIssuer = _config["Tokens:Issuer"],
                             ValidAudience = _config["Tokens:Audience"],
                             IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"])),
                             ValidateIssuerSigningKey = true,
                         };

                     });

            services.AddDbContext<WebAppContext>( sqlcConfig => {
                sqlcConfig.UseSqlServer(_config.GetConnectionString("WebAppConnectionString"));
            });


            services.AddTransient<WebAppSeeder>();
            //means no data on themselves
            services.AddTransient<IMailService, NullMailService>();

            services.AddAutoMapper(Assembly.GetExecutingAssembly());


            //registering repository. Means add iwebapprepository for people to use, and add webapprepository as implmentation
            services.AddScoped<IWebAppRepository, WebAppRepository>();


            //expensive, needs connection, can be kept in different scopes
            //services.AddScoped();
            ////services kept for servers up forever
            //services.AddSingleton();
            services.AddMvc().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }


            app.UseHttpsRedirection();

            //app.UseDefaultFiles(); // no longer in use since you have default pages, index
            app.UseStaticFiles();
            app.UseNodeModules();

            app.UseAuthentication();    //UseAuthentication - identifying what kind of user. Make sure it is called before routing and end points or any tech

            app.UseRouting();

            app.UseAuthorization();     //UseAuthorization - identifying what they have access to.

            app.UseEndpoints(cfg =>
            {
                cfg.MapControllerRoute("Default",
                      "{controller}/{action}/{id?}",
                      new { controller = "App", Action = "Index" });        //make index as default
            });
            

            //Keep in mind that the UseAuthentication, UseRouting and UseAuthorization middleware 
            //must in correct in order for the ASP framework properly inject the identity context to http request.
            //app.UseAuthentication();
            //app.UseRouting();
            //app.UseAuthorization();
            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapControllers();
            //});
        }
    }
}
