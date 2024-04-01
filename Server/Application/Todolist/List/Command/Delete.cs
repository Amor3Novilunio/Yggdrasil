using MediatR;
using Persistence;

namespace Application.Todolist.List;

public class Delete
{
    public class Command : IRequest
    {
        public Guid Id { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
        private readonly DataContext _db;
        public Handler(DataContext db) => _db = db;

        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var list = await _db.Todolists.FindAsync(request.Id);
            if (list is not null)
            {
                _db.Remove(list);
                await _db.SaveChangesAsync();
            }
        }
    }
}