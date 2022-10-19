using System.Net;
using Kometa.AspNetCore.Mvc;
using Kometa.Graphql;
using Microsoft.Extensions.DependencyInjection;
using Smde.Emex.Orders;
using Smde.Identity;
using Smde.LastMiles.AccessKeys;
using Smde.LastMiles.Postamats.Cells;
using Smde.LastMiles.Postamats.Controllers;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;

namespace Smde;

[DependsOn(typeof(AbpPermissionManagementApplicationModule))]
[DependsOn(typeof(KometaAspNetCoreMvcModule))]
[DependsOn(typeof(KometaGraphqlModule))]
[DependsOn(typeof(SmdeApplicationContractsModule))]
[DependsOn(typeof(SmdeDomainModule))]
public class SmdeHttpApiGraphqlModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var graphql = context.Services.GetGraphql();

        graphql
            .AddTypeConverter<IPAddress, string>(x => x.ToString())
            .RegisterService<IAccessKeyRepository>()
            .RegisterService<IEmexProductRepository>()
            .RegisterService<ISmdeIdentityUserRepository>()
            .RegisterService<IIdentityRoleRepository>()
            .RegisterService<ICellRepository>()
            .RegisterService<IControllerRepository>()
            .RegisterService<ILockRepository>();
    }
}