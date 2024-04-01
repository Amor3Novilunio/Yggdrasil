using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class Added_Todolist_Tables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Todolist_Tasks",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    List_ID = table.Column<Guid>(type: "TEXT", nullable: false),
                    Task_Name = table.Column<string>(type: "TEXT", nullable: false),
                    Task_Description = table.Column<string>(type: "TEXT", nullable: false),
                    Due_Date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    Created_By = table.Column<string>(type: "TEXT", nullable: true),
                    Created_At = table.Column<string>(type: "TEXT", nullable: true),
                    Modified_At = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Todolist_Tasks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Todolists",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    ListTitle = table.Column<string>(type: "TEXT", nullable: false),
                    Created_By = table.Column<string>(type: "TEXT", nullable: true),
                    Created_At = table.Column<string>(type: "TEXT", nullable: true),
                    Modified_At = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Todolists", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Todolist_Tasks");

            migrationBuilder.DropTable(
                name: "Todolists");
        }
    }
}
