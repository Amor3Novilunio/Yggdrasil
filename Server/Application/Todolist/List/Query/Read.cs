using Domain.Model.Todolist;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Todolist.List;

public class Read
{
    public class Query : IRequest<List<Todo_List>> { }

    public class Handler : IRequestHandler<Query, List<Todo_List>>
    {
        private readonly DataContext _db;
        public Handler(DataContext db) => _db = db;

        public async Task<List<Todo_List>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await _db.Todolists.ToListAsync();
        }
    }

}
