using Kometa.AspNetCore.Mvc.ApplicationConfigurations;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;

namespace Smde.ApplicationConfigurations;

[ExtendObjectType(OperationTypeNames.Query)]
public class ApplicationConfigurationQuery : IGraphqlType
{
    public Task<SmdeApplicationConfigurationDto> GetApplicationConfiguration(
        [Service] IKometaApplicationConfigurationAppService service) =>
        service.GetAsync();
}