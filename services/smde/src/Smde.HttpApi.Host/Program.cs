using OpenTelemetry.Resources;
using Serilog;
using Serilog.Events;
using Smde;

Log.Logger = new LoggerConfiguration()

#if DEBUG
    .MinimumLevel.Debug()
#else
            .MinimumLevel.Information()
#endif
    .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
    .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Warning)
    //.MinimumLevel.Override("Microsoft.EntityFrameworkCore.Database.Command", LogEventLevel.Information)
    .Enrich.FromLogContext()
    .WriteTo.Async(c => c.File("Logs/logs.txt"))
#if DEBUG
    .WriteTo.Async(c => c.Console())
#endif
    .CreateLogger();

try
{
    Log.Information("Starting Acme.BookStore.HttpApi.Host.");

    var builder = WebApplication.CreateBuilder(args);

    builder.Host
        .AddAppSettingsSecretsJson()
        .UseAutofac()
        .UseSerilog();

    builder.Logging.AddOpenTelemetry(
        b =>
        {
            b.IncludeFormattedMessage = true;
            b.IncludeScopes = true;
            b.ParseStateValues = true;
            b.SetResourceBuilder(ResourceBuilder.CreateDefault().AddService("Smde", "Kometa"));
        });

    await builder.AddApplicationAsync<SmdeHttpApiHostModule>();

    var app = builder.Build();
    await app.InitializeApplicationAsync();
    await app.RunAsync();
    return 0;
}
catch (Exception ex)
{
    Log.Fatal(ex, "Host terminated unexpectedly!");
    return 1;
}
finally
{
    Log.CloseAndFlush();
}