using System;
using System.ComponentModel.DataAnnotations;

namespace WebApp.ViewModels
{
    public class OrderItemViewModel
    {
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }
        [Required]
        public int ProductId { get; set; }

        public string ProductCategory { get; set; }
        public string ProductSize { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductTitle { get; set; }
        public string ProductArtist { get; set; }
        public DateTime OrderOrderDate { get; set; }

        public string ProductArtId { get; set; }

        //BRILLIANT NOTE: ADD ENTITYPREFIX ON YOUR FIELD/COLUMN THAT IS CONNECTED TO ANOTHER TABLE. THIS WILL AUTOMATICALLY DISPLAY YOUR DETAILS FROM THAT CONNECTED ENTITY. NO NEED
        //TO UPDATE TABLE SCHEMA FROM ENTITY FOLDER. CIAO!
    }
}