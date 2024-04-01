using Domain.Model.Todolist;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Todolist.List;

public class ReadById
{
    public class Query : IRequest<Todo_List> {
        public Guid Id { get; set; }
     }

    public class Handler : IRequestHandler<Query, Todo_List>
    {
        private readonly DataContext _db;
        public Handler(DataContext db) => _db = db;

        public async Task<Todo_List> Handle(Query request, CancellationToken cancellationToken)
        {
            var result = await _db.Todolists.FirstOrDefaultAsync(o => o.Id == request.Id);
            return result!;
        }
    }

}
