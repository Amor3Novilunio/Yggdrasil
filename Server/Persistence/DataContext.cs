using Domain.Model.Todolist;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DataContext : DbContext
{
    public DataContext() {}

    public DataContext(DbContextOptions<DataContext> options) : base(options) {}

    protected override void OnModelCreating(ModelBuilder modelBuilder) {}

    public DbSet<Todo_List> Todolists {get; set; }
    public DbSet<Todo_Task> Todolist_Tasks { get; set; }
}
