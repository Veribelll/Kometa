using HotChocolate.Resolvers;
using Volo.Abp;
using Volo.Abp.Domain.Entities;

namespace Kometa.Graphql.Data;

public class CountMiddleware<T>
    where T : class, IEntity
{
    private readonly FieldDelegate _next;

    public CountMiddleware(FieldDelegate next)
    {
        _next = Check.NotNull(next, nameof(next));
    }

    public async Task InvokeAsync(IMiddlewareContext context)
    {
        await _next(context).ConfigureAwait(false);
        context.Result = context.Result switch
        {
            IAsyncEnumerable<T> ae => await ae.CountAsync(),
            IEnumerable<T> en => await Task.Run(() => en.Count(), context.RequestAborted).ConfigureAwait(false),
            _ => context.Result
        };
    }
}