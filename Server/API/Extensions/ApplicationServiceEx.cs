using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application;

namespace Extensions;

public static class ApplicationServiceEx
{
    public static IServiceCollection AddApplicationService(this IServiceCollection services, IConfiguration config)
    {
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        services.AddDbContext<DataContext>(opt => opt.UseSqlite(config.GetConnectionString("DefaultConnection")));
        services.AddMediatR(config => {
            config.RegisterServicesFromAssembly(typeof(Application_Index).Assembly);
        });
        services.AddAutoMapper(typeof(MappingProfiles).Assembly);

        services.AddCors(opt=>{
            opt.AddPolicy("YggdrasilClient",policy=>{
                policy
                .WithOrigins("http://localhost:3000")
                .WithOrigins("http://127.0.0.1:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();
            });
        });

        return services;
    }
}