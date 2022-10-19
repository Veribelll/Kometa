using Volo.Abp;
using static Smde.Contractors.IndividualEntrepreneurConstants;

namespace Smde.Contractors;

/// <summary>
/// Индивидуальный предприниматель
/// </summary>
public class IndividualEntrepreneur : Contractor
{
    /// <summary>
    /// ОГРНИП - Основной государственный регистрационный номер индивидуального предпринимателя
    /// </summary>
    public string? Ogrnip { get; protected set; }

    protected IndividualEntrepreneur()
    {
    }

    internal IndividualEntrepreneur(
        Guid id,
        Guid? tenantId,
        AccountBank accountBank,
        string name,
        string inn,
        string address,
        string? okpo = null,
        string? ogrnip = null,
        string? actualAddress = null,
        string? mailingAddress = null,
        bool isHost = false) 
        : base(id, tenantId, accountBank, name, inn, address, okpo, actualAddress, mailingAddress, isHost)
    {
        SetOgrnip(ogrnip);
    }

    public void SetOgrnip(string? ogrnip)
    {
        if (string.IsNullOrWhiteSpace(ogrnip))
        {
            Ogrnip = null;
            return;
        }

        Ogrnip = Check.Length(
            ogrnip,
            nameof(ogrnip),
            OgrnipLenght,
            OgrnipLenght);
    }

    public override void SetOkpo(string? okpo)
    {
        if (string.IsNullOrWhiteSpace(okpo))
        {
            Okpo = null;
            return;
        }

        Okpo = Check.Length(
            okpo,
            nameof(okpo),
            OkpoLenght,
            OkpoLenght);
    }

    internal override void SetInn(string inn)
    {
        Inn = Check.NotNullOrWhiteSpace(
            inn,
            nameof(inn),
            InnLenght,
            InnLenght);
    }
}