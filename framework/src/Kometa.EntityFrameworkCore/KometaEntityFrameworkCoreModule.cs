using Kometa.Domain;
using Volo.Abp.EntityFrameworkCore.PostgreSql;
using Volo.Abp.Modularity;

namespace Kometa.EntityFrameworkCore;

[DependsOn(typeof(AbpEntityFrameworkCorePostgreSqlModule))]
[DependsOn(typeof(KometaDddDomainModule))]
public class KometaEntityFrameworkCoreModule : AbpModule
{

}