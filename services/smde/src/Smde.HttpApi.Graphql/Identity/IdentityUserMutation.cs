using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.Identity;
using static Smde.Permissions.ContractorManagementPermissions.Employees;

namespace Smde.Identity;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class IdentityUserMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(IdentityUserEmailAlreadyExistsException))]
    public Task<IdentityUser> CreateEmployee(
        CreateEmployeeInput input,
        IIdentityUserService service) =>
        service.CreateEmployeeAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(IdentityUserEmailAlreadyExistsException))]
    public Task<IdentityUser> UpdateEmployee(
        UpdateEmployeeInput input,
        IIdentityUserService service) =>
        service.UpdateEmployeeAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public Task<IdentityUser> DeleteEmployee(
        [ID(nameof(IdentityUser))] Guid id,
        IIdentityUserService service) =>
        service.DeleteEmployeeAsync(id);
}