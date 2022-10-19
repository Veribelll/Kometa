using Volo.Abp;
using static Smde.Contractors.CompanyConstants;

namespace Smde.Contractors;

/// <summary>
/// Компания
/// </summary>
public class Company : Contractor
{
    /// <summary>
    /// КПП - Код причины постановки
    /// </summary>
    public string? Kpp { get; protected set; }

    /// <summary>
    /// ОГРН - Основной государственный регистрационный номер
    /// </summary>
    public string? Ogrn { get; protected set; }

    protected Company()
    {
    }

    internal Company(
        Guid id,
        Guid? tenantId,
        AccountBank accountBank,
        string name,
        string inn,
        string address,
        string? okpo = null,
        string? kpp = null,
        string? ogrn = null,
        string? actualAddress = null,
        string? mailingAddress = null,
        bool isHost = false)
        : base(id, tenantId, accountBank, name, inn, address, okpo, actualAddress, mailingAddress, isHost)
    {
        SetKpp(kpp);
        SetOgrn(ogrn);
    }

    public void SetKpp(string? kpp)
    {
        if (string.IsNullOrWhiteSpace(kpp))
        {
            Kpp = null;
            return;
        }

        Kpp = Check.Length(
            kpp,
            nameof(kpp),
            KppLenght,
            KppLenght);
    }

    public void SetOgrn(string? ogrn)
    {
        if (string.IsNullOrWhiteSpace(ogrn))
        {
            Ogrn = null;
            return;
        }

        Ogrn = Check.Length(
            ogrn,
            nameof(ogrn),
            OgrnLenght,
            OgrnLenght);
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