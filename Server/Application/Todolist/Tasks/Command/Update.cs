using AutoMapper;
using Domain.Model.Todolist;
using MediatR;
using Persistence;

namespace Application.Todolist.Tasks;
public class Update(){

    public class Command : IRequest{
        public required Todo_Task Todo_Task { get; set; }
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
            var result = await _db.Todolist_Tasks.FindAsync(request.Todo_Task.Id);

            _mapper.Map(request.Todo_Task, result);

            await _db.SaveChangesAsync();
        }
    }
}