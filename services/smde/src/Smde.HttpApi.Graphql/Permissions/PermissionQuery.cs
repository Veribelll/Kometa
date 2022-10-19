using System.ComponentModel.DataAnnotations;
using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.PermissionManagement;

namespace Smde.Permissions;

[ExtendObjectType(OperationTypeNames.Query)]
public class PermissionQuery : IGraphqlType
{
    [UseUnitOfWork]
    public Task<GetPermissionListResultDto> GetPermissions(
        [Required] string providerName,
        [Required] string providerKey,
        [Service] IIdSerializer idSerializer,
        [Service] IPermissionAppService permissionAppService)
    {
        if (providerName == "U")
        {
            providerKey = idSerializer.Deserialize(providerKey).Value.ToString()!;
        }

        return permissionAppService.GetAsync(providerName, providerKey);
    }
}