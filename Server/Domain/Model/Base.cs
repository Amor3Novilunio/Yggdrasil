namespace Domain.Model;

public class BaseModel{
    public string? Created_By { get; set; }
    public DateTime Created_At { get; set; }
    public DateTime? Modified_At { get; set; }
}