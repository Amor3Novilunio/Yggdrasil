namespace Domain.Model.Todolist;

public class Todo_Task : BaseModel
{
    public Guid Id { get; set; }
    public required Guid List_ID { get; set; }
    public required string Task_Name { get; set; }
    public string? Task_Description { get; set; }
    public required DateOnly Due_Date { get; set; }
}