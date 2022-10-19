using Volo.Abp;

namespace Smde.Tenants;

public class TenantNameAlreadyExistsException : BusinessException
{
    public string Name { get; }

    public TenantNameAlreadyExistsException(string name) : base("Error:Tenant:001")
    {
        Name = name;
    }
}