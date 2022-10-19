using Smde.Orders;

#pragma warning disable 8618

namespace Smde.Emex.Orders;

public class EmexCustomer : Customer
{
    protected EmexCustomer()
    {
    }

    internal EmexCustomer(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        string name,
        string phone,
        string externalId,
        string? email = null): base(id, tenantId, contractorId, name, phone, externalId, email)
    {
    }
}