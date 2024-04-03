using Application.Todolist.Tasks;
using Domain.Model.Todolist;
using Microsoft.AspNetCore.Mvc;

namespace Controllers;

[Route("Todolist/Task")]
public class TaskController : ApiController
{

    [HttpGet]
    public async Task<ActionResult<List<Todo_Task>>> Get()
    {
        return Ok(await Mediator.Send(new Read.Query()));
    }

    [HttpGet("{Id}")]
    public async Task<ActionResult<Todo_Task>> Get(Guid Id)
    {
        return Ok(await Mediator.Send(new ReadById.Query { Id = Id }));
    }

    [HttpPost]
    public async Task<ActionResult<Todo_Task>> Create(Todo_Task Todo_Task)
    {
        await Mediator.Send(new Create.Command { Todo_Task = Todo_Task });
        return Ok(Todo_Task);
    }

    [HttpPut("{Id}")]
    public async Task<ActionResult<Todo_Task>> Update(Guid Id, Todo_Task Todo_Task)
    {
        Todo_Task.Id = Id;
        await Mediator.Send(new Update.Command { Todo_Task = Todo_Task });
        return Ok(Todo_Task);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await Mediator.Send(new Delete.Command { Id = id });
        return Ok("Deleted Successfully");
    }

}