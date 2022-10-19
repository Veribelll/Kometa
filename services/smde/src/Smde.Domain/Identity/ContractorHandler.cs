using Kometa.MultiContractor.Current;
using Microsoft.AspNetCore.Identity;
using Smde.Contractors;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Identity;
using Volo.Abp.Threading;
using Volo.Abp.Uow;
using Volo.Abp.Users;

namespace Smde.Identity;

internal class ContractorHandler :
    IDistributedEventHandler<EntityCreatedEto<ContractorEto>>,
    IDistributedEventHandler<EntityDeletedEto<ContractorEto>>,
    ITransientDependency
{
    protected readonly ICurrentUser CurrentUser;
    protected readonly ISmdeIdentityUserRepository Repository;
    protected readonly IdentityUserManager UserManager;
    protected readonly IUnitOfWorkManager UnitOfWorkManager;
    protected readonly IDataFilter DataFilter;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public ContractorHandler(
        ICurrentUser currentUser,
        ISmdeIdentityUserRepository repository,
        IdentityUserManager userManager,
        IUnitOfWorkManager unitOfWorkManager,
        IDataFilter dataFilter,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        CurrentUser = currentUser;
        Repository = repository;
        UserManager = userManager;
        UnitOfWorkManager = unitOfWorkManager;
        DataFilter = dataFilter;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task HandleEventAsync(EntityCreatedEto<ContractorEto> eventData)
    {
        var contractor = eventData.Entity;
        var cancellationToken = CancellationTokenProvider.Token;
        var uow = UnitOfWorkManager.Begin();

        using (DataFilter.Disable<IMultiContractor>())
        {
            if (CurrentUser.Id is not null)
            {
                var user = await UserManager.GetByIdAsync(CurrentUser.GetId());
                user.AddContractorId(contractor.Id);
                (await UserManager.UpdateAsync(user)).CheckErrors();
            }

            var users = await UserManager.GetUsersInRoleAsync("admin");
            foreach (var user in users)
            {
                user.AddContractorId(contractor.Id);
                (await UserManager.UpdateAsync(user)).CheckErrors();
            }

            await uow.CompleteAsync(cancellationToken);
        }
    }

    public async Task HandleEventAsync(EntityDeletedEto<ContractorEto> eventData)
    {
        var contractor = eventData.Entity;
        var cancellationToken = CancellationTokenProvider.Token;
        var uow = UnitOfWorkManager.Begin();

        using (DataFilter.Disable<IMultiContractor>())
        {
            var users = await Repository.GetListAsync(true, cancellationToken);
            foreach (var user in users)
            {
                user.RemoveContractorId(contractor.Id);
                (await UserManager.UpdateAsync(user)).CheckErrors();
            }

            await uow.CompleteAsync(cancellationToken);
        }
    }
}