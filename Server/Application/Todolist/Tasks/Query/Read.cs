using Domain.Model.Todolist;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Todolist.Tasks;

public class Read{

    public class Query : IRequest<List<Todo_Task>>{}

    public class Handler : IRequestHandler<Query, List<Todo_Task>>
    {
        private readonly DataContext _db;
        public Handler(DataContext db) => _db=db;
        public async Task<List<Todo_Task>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await _db.Todolist_Tasks.ToListAsync();
        }
    }
}