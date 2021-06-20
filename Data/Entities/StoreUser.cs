using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Data.Entities
{
    public class StoreUser : IdentityUser
    {
        //IdentityUser - for user login 
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
