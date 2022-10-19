using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.Identity;
using Volo.Abp.Identity;

namespace Smde.PackingPlaces.Extend;

[ExtendObjectType(typeof(PackingPlaceEmployeeIsNotCourierException))]
internal class PackingPlaceEmployeeIsNotCourierErrorExtend : IGraphqlType
{
    public Task<IdentityUser> GetEmployee(
        [Parent] PackingPlaceEmployeeIsNotCourierException error,
        ISmdeIdentityUserRepository repository,
        CancellationToken cancellationToken) =>
        repository.GetEmployeeAsync(error.IdentityUserId, true, cancellationToken);
}