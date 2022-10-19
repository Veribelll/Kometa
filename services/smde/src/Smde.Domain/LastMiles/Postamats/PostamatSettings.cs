using Volo.Abp;
using Volo.Abp.Domain.Values;

namespace Smde.LastMiles.Postamats;

public class PostamatSettings : ValueObject
{
    /// <summary>
    /// Авто обновление
    /// </summary>
    public bool IsAutoUpdate { get; protected set; }

    /// <summary>
    /// Прием только по списку ожидания.
    /// </summary>
    public bool ReceptionWaitingListOnly { get; protected set; }
        
    /// <summary>
    /// Телефон администратора
    /// </summary>
    public string? AdminPhone { get; protected set; }

    public PostamatSettings()
    {
    }

    public PostamatSettings(
        bool isAutoUpdate,
        bool receptionWaitingListOnly,
        string? adminPhone)
    {
        IsAutoUpdate = isAutoUpdate;
        ReceptionWaitingListOnly = receptionWaitingListOnly;
        AdminPhone = Check.Length(
            adminPhone,
            nameof(adminPhone),
            PostamatSettingsConstants.MaxAdminPhoneLenght);
    }

    protected override IEnumerable<object?> GetAtomicValues()
    {
        yield return IsAutoUpdate;
        yield return ReceptionWaitingListOnly;
        yield return AdminPhone;
    }
}