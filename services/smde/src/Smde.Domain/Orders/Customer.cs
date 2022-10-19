using Kometa.MultiContractor.Current;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;
using static Smde.Orders.CustomerConstants;

#pragma warning disable 8618

namespace Smde.Orders;

public abstract class Customer : FullAuditedAggregateRoot<Guid>, IMultiTenant, IMultiContractor
{
    public Guid? TenantId { get; protected init; }
    public Guid ContractorId { get; protected init; }
    public string Name { get; protected set; }
    public string Phone { get; protected set; }
    public string ExternalId { get; protected set; }
    public string? Email { get; protected set; }

    protected Customer()
    {
    }

    internal Customer(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        string name,
        string phone,
        string externalId,
        string? email = null) : base(id)
    {
        TenantId = tenantId;
        ContractorId = contractorId;
        SetName(name);
        SetPhone(phone);
        SetExternalId(externalId);
        SetEmail(email);
    }

    public void SetName(string name)
    {
        Name = Check.NotNullOrWhiteSpace(
            name,
            nameof(name),
            MaxNameLenght);
    }

    public void SetPhone(string phone)
    {
        Phone = Check.NotNullOrWhiteSpace(
            phone,
            nameof(phone),
            MaxPhoneLenght,
            MinPhoneLenght);
    }

    public void SetEmail(string? email)
    {
        Email = Check.Length(
            email,
            nameof(email),
            MaxEmailLenght);
    }

    internal void SetExternalId(string externalId)
    {
        ExternalId = Check.NotNullOrWhiteSpace(
            externalId,
            nameof(externalId),
            MaxExternalIdLenght);
    }
}