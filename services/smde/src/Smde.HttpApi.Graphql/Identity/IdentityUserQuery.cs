using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Microsoft.AspNetCore.Identity;
using Volo.Abp.Data;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;
using static Smde.Permissions.ContractorManagementPermissions.Employees;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace Smde.Identity;

[ExtendObjectType(OperationTypeNames.Query)]
public class IdentityUserQuery : IGraphqlType
{
    [Authorize(Policy = Default)]
    public Task<IdentityUser> GetIdentityUserById(
        [ID(nameof(IdentityUser))] Guid id,
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetAsync(id, true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(IdentityUserFilterType))]
    public Task<IQueryable<IdentityUser>> GetIdentityUser(
        ISmdeIdentityUserRepository repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<IdentityUserType>))]
    [UseFiltering(typeof(IdentityUserFilterType))]
    [UseSorting(typeof(IdentityUserSortType))]
    public Task<IQueryable<IdentityUser>> GetIdentityUsers(
        ISmdeIdentityUserRepository repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(IdentityUserFilterType))]
    public Task<IQueryable<IdentityUser>> GetIdentityUsersAny(
        ISmdeIdentityUserRepository repository) =>
        repository.GetQueryableAsync();

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(IdentityUserFilterType))]
    public Task<IQueryable<IdentityUser>> GetIdentityUsersCount(
        ISmdeIdentityUserRepository repository) =>
        repository.GetQueryableAsync();

    [Authorize]
    [UseUnitOfWork]
    public async Task<bool> IsEmailUnique(
        string email,
        [Service] IDataFilter dataFilter,
        [Service] ILookupNormalizer normalizer,
        [Service] IIdentityUserRepository repository,
        CancellationToken cancellationToken)
    {
        using (dataFilter.Disable<IMultiTenant>())
        {
            return await repository.FindByNormalizedEmailAsync(
                normalizer.NormalizeEmail(email),
                false, cancellationToken) is not null;
        }
    }

    [Authorize(Policy = Default)]
    public Task<IdentityUser> GetEmployeeById(
        [ID(nameof(IdentityUser))] Guid id,
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetEmployeeAsync(id, true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(IdentityUserFilterType))]
    public Task<List<IdentityUser>> GetEmployee(
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetEmployeesAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<IdentityUserType>))]
    [UseFiltering(typeof(IdentityUserFilterType))]
    [UseSorting(typeof(IdentityUserSortType))]
    public Task<List<IdentityUser>> GetEmployees(
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetEmployeesAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(IdentityUserFilterType))]
    public Task<List<IdentityUser>> GetEmployeesAny(
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetEmployeesAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(IdentityUserFilterType))]
    public Task<List<IdentityUser>> GetEmployeesCount(
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetEmployeesAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    public Task<IdentityUser> GetCourierById(
        [ID(nameof(IdentityUser))] Guid id,
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetCourierAsync(id, true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseFirstOrDefault]
    [UseFiltering(typeof(IdentityUserFilterType))]
    public Task<List<IdentityUser>> GetCourier(
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetCouriersAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseOffsetPaging(typeof(NonNullType<IdentityUserType>))]
    [UseFiltering(typeof(IdentityUserFilterType))]
    [UseSorting(typeof(IdentityUserSortType))]
    public Task<List<IdentityUser>> GetCouriers(
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetCouriersAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseAny]
    [UseFiltering(typeof(IdentityUserFilterType))]
    public Task<List<IdentityUser>> GetCouriersAny(
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetCouriersAsync(true, cancellationToken);

    [Authorize(Policy = Default)]
    [UseUnitOfWork]
    [UseCount]
    [UseFiltering(typeof(IdentityUserFilterType))]
    public Task<List<IdentityUser>> GetCouriersCount(
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetCouriersAsync(true, cancellationToken);
}