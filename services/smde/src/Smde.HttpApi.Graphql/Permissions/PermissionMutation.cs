using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using Volo.Abp.PermissionManagement;

namespace Smde.Permissions;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class PermissionMutation : IGraphqlType
{
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    public async Task<bool> UpdatePermissions(
        UpdatePermissionsInput input,
        [Service] IIdSerializer idSerializer,
        [Service] IPermissionAppService permissionAppService)
    {
        if (input.ProviderName == "U")
        {
            input.ProviderKey = idSerializer.Deserialize(input.ProviderKey).Value.ToString()!;
        }

        await permissionAppService.UpdateAsync(input.ProviderName, input.ProviderKey, input.Permissions);
        return true;
    }
}