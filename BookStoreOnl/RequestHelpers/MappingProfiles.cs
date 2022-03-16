using AutoMapper;
using BookStoreOnl.DTOs;
using BookStoreOnl.Entities;

namespace BookStoreOnl.RequestHelpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<CreateProductDto, Product>();
            CreateMap<UpdateProductDto, Product>();
        }
    }
}
