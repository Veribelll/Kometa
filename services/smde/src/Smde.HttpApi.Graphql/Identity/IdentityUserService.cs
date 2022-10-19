using Kometa.Graphql;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Volo.Abp.Identity;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace Smde.Identity;

public class IdentityUserService : GraphqlService, IIdentityUserService
{
    protected readonly ISmdeIdentityUserRepository Repository;
    protected readonly IdentityUserManager Manager;
    protected readonly IIdentityRoleRepository IdentityRoleRepository;
    protected readonly IOptions<IdentityOptions> Options;

    public IdentityUserService(
        ISmdeIdentityUserRepository repository,
        IdentityUserManager manager,
        IIdentityRoleRepository identityRoleRepository,
        IOptions<IdentityOptions> options)
    {
        Repository = repository;
        Manager = manager;
        IdentityRoleRepository = identityRoleRepository;
        Options = options;
    }

    public async Task<IdentityUser> CreateEmployeeAsync(CreateEmployeeInput input)
    {
        await Options.SetAsync();

        var roleNames = await GetRoleNamesAsync(input.RoleIds);

        var user = new IdentityUser(GuidGenerator.Create(), $"UN{input.Email}", input.Email, CurrentTenant.Id)
        {
            Surname = input.Surname,
            Name = input.FirstName,
        };

        user.SetMiddleName(input.MiddleName);
        user.SetContractorIds(input.ContractorIds);
        user.SetIsEmployee(true);

        (await Manager.CreateAsync(user, input.Password)).CheckErrors();
        (await Manager.SetPhoneNumberAsync(user, input.PhoneNumber)).CheckErrors();
        (await Manager.SetRolesAsync(user, roleNames)).CheckErrors();
        (await Manager.UpdateAsync(user)).CheckErrors();

        return user;
    }

    public async Task<IdentityUser> UpdateEmployeeAsync(UpdateEmployeeInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        await Options.SetAsync();

        var roleNames = await GetRoleNamesAsync(input.RoleIds);

        var user = await Repository.GetEmployeeAsync(x => x.Id == input.Id, true, cancellationToken);

        user.Name = input.FirstName;
        user.Surname = input.Surname;

        user.SetMiddleName(input.MiddleName);
        user.SetContractorIds(input.ContractorIds);

        (await Manager.SetPhoneNumberAsync(user, input.PhoneNumber)).CheckErrors();
        (await Manager.SetRolesAsync(user, roleNames)).CheckErrors();
        (await Manager.UpdateAsync(user)).CheckErrors();

        return user;
    }

    public async Task<IdentityUser> DeleteEmployeeAsync(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        if (CurrentUser.Id == id)
        {
            throw new IdentityUserSelfDeletionException();
        }

        var identityUser = await Repository.GetAsync(id, true, cancellationToken);
        (await Manager.DeleteAsync(identityUser)).CheckErrors();

        return identityUser;
    }

    private async Task<List<string>> GetRoleNamesAsync(IEnumerable<Guid> roleIds)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        return (await IdentityRoleRepository.GetListAsync(roleIds, cancellationToken))
            .Select(x => x.Name)
            .ToList();
    }
}