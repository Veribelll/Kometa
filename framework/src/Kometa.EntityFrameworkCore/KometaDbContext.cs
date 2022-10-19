using System.Linq.Expressions;
using Kometa.MultiContractor.Available;
using Kometa.MultiContractor.Current;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Users;

namespace Kometa.EntityFrameworkCore;

public abstract class KometaDbContext<TDbContext> : AbpDbContext<TDbContext>
    where TDbContext : DbContext
{
    protected bool MultiContractorFilterEnabled => DataFilter?.IsEnabled<IMultiContractor>() ?? true;

    public ICurrentContractor CurrentContractor =>
        LazyServiceProvider.LazyGetRequiredService<ICurrentContractor>();

    public IAvailableContractors AvailableContractors =>
        LazyServiceProvider.LazyGetRequiredService<IAvailableContractors>();

    public ICurrentUser CurrentUser =>
        LazyServiceProvider.LazyGetRequiredService<ICurrentUser>();

    protected KometaDbContext(DbContextOptions<TDbContext> options) : base(options)
    {
    }

    protected override bool ShouldFilterEntity<TEntity>(IMutableEntityType entityType)
    {
        if (typeof(IMultiContractor).IsAssignableFrom(typeof(TEntity)))
        {
            return true;
        }

        return base.ShouldFilterEntity<TEntity>(entityType);
    }

    protected override Expression<Func<TEntity, bool>>? CreateFilterExpression<TEntity>()
    {
        var expression = base.CreateFilterExpression<TEntity>();

        if (typeof(IMultiContractor).IsAssignableFrom(typeof(TEntity)))
        {
            Expression<Func<TEntity, bool>> isActiveFilter = e =>
                !MultiContractorFilterEnabled ||
                CurrentContractor.Id == EF.Property<Guid>(e, nameof(IMultiContractor.ContractorId));

            expression = expression == null
                ? isActiveFilter
                : CombineExpressions(expression, isActiveFilter);
        }

        return expression;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);

#if DEBUG
        optionsBuilder.EnableSensitiveDataLogging();
#endif
    }
}