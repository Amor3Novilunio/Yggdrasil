using Domain.Model.Todolist;
using MediatR;
using Persistence;

namespace Application.Todolist.List;

public class Create
{
    public class Command : IRequest
    {
        public required Todo_List Todo_List { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
        private readonly DataContext _db;
        public Handler(DataContext db) => _db = db;

        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            _db.Todolists.Add(request.Todo_List);

            await _db.SaveChangesAsync();
        }
    }
}