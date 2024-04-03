using Domain.Model.Todolist;
using MediatR;
using Persistence;

namespace Application.Todolist.Tasks;
public class Delete(){

    public class Command : IRequest{
        public required Guid Id { get; set; }
    }

    public class Handler : IRequestHandler<Command>
    {
        private readonly DataContext _db;
        public Handler(DataContext db) => _db = db;

        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var result = await _db.Todolist_Tasks.FindAsync(request.Id);
            if(result is not null){
                _db.Todolist_Tasks.Remove(result);
                await _db.SaveChangesAsync();
            }
        }

    }
}