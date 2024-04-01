using AutoMapper;
using Domain.Model.Todolist;
using MediatR;
using Persistence;

namespace Application.Todolist.List;

public class Update
{
    public class Command : IRequest
    {
        public required Todo_List Todo_List { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
        private readonly DataContext _db;
        private readonly IMapper _mapper;

        public Handler(DataContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }

        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var list = await _db.Todolists.FindAsync(request.Todo_List.Id);

            _mapper.Map(request.Todo_List, list);

            await _db.SaveChangesAsync();
        }
    }
}