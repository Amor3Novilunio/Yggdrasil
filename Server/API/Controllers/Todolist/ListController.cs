using Application.Todolist.List;
using Domain.Model.Todolist;
using Microsoft.AspNetCore.Mvc;

namespace Controllers;

[Route("Todolist/List")]
public class ListController : ApiController
{

    [HttpGet]
    public async Task<ActionResult<List<Todo_List>>> Get()
    {
        return Ok(await Mediator.Send(new Read.Query()));
    }

    [HttpGet("{Id}")]
    public async Task<ActionResult<Todo_List>> Get(Guid Id)
    {
        return Ok(await Mediator.Send(new ReadById.Query { Id = Id }));
    }

    [HttpPost]
    public async Task<ActionResult<Todo_List>> Create(Todo_List Todo_List)
    {
        await Mediator.Send(new Create.Command { Todo_List = Todo_List });
        return Ok(Todo_List);
    }

    [HttpPut("{Id}")]
    public async Task<ActionResult<Todo_List>> Update(Guid Id,Todo_List Todo_List)
    {
        Todo_List.Id = Id;
        await Mediator.Send(new Update.Command { Todo_List = Todo_List });
        return Ok(Todo_List);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await Mediator.Send(new Delete.Command { Id = id });
        return Ok("Deleted Successfully");
    }


}