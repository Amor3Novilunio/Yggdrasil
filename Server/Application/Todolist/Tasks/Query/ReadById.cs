using Domain.Model.Todolist;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Todolist.Tasks;

public class ReadById{

    public class Query : IRequest<Todo_Task>
    {
        public Guid Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Todo_Task>
    {
        private readonly DataContext _db;
        public Handler(DataContext db) => _db = db;
        public async Task<Todo_Task> Handle(Query request, CancellationToken cancellationToken)
        {
            var result = await _db.Todolist_Tasks.FirstOrDefaultAsync(i => i.Id == request.Id);
            return result!;
        }
    }
}