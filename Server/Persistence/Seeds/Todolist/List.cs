using Domain.Model.Todolist;

namespace Persistence.Seeds.Todolist;

public class List
{
    public static async Task Seed(DataContext context)
    {
        if (context.Todolists.Any()) return;

        List<Todo_List> ListEntries = [
            new Todo_List
            {
                List_Title="Personal",
                Created_At=DateTime.Now,
                Created_By="Amor III Novilunio"
            },
            new Todo_List
            {
                List_Title="Work",
                Created_At=DateTime.Now,
                Created_By="Amor III Novilunio"
            },
            new Todo_List
            {
                List_Title="Projects",
                Created_At=DateTime.Now,
                Created_By="Amor III Novilunio"
            }
        ];

        await context.Todolists.AddRangeAsync(ListEntries);
        await context.SaveChangesAsync();
    }
}