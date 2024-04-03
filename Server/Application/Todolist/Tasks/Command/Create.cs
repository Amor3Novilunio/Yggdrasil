using Domain.Model.Todolist;
using MediatR;
using Persistence;

namespace Application.Todolist.Tasks;
public class Create(){

    public class Command : IRequest{
        public required Todo_Task Todo_Task { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
        private readonly DataContext _db;
        public Handler(DataContext db) => _db = db;

        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            _db.Add(request.Todo_Task);
            await _db.SaveChangesAsync();
        }
    }
}