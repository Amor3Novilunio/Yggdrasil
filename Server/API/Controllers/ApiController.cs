using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Controllers;

[ApiController]
[Route("Api/[controller]")]
public class ApiController : ControllerBase
{
    protected IMediator Mediator => HttpContext.RequestServices.GetService<IMediator>()!;
}