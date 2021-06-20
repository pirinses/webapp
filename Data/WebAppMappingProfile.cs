using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Data.Entities;
using WebApp.ViewModels;

namespace WebApp.Data
{
    public class WebAppMappingProfile : Profile
    {
        public WebAppMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
                .ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.Id))
                .ReverseMap();

            CreateMap<OrderItem, OrderItemViewModel>()
                .ReverseMap()
                .ForMember(m => m.Product, opt => opt.Ignore());

        }
    }
}
