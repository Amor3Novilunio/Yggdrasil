namespace Domain.Model.Todolist;

public class Todo_List : BaseModel{

    public Guid Id { get; set; }
    public required string List_Title { get; set; }
}