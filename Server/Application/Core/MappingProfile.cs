using AutoMapper;
using Domain.Model.Todolist;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Todo_List, Todo_List>();
        }
    }
}