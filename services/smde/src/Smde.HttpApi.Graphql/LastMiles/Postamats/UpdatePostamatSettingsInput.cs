using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;

namespace Smde.LastMiles.Postamats;

public class UpdatePostamatSettingsInput
{
    [Required] 
    [ID(nameof(LastMile))] 
    public Guid Id { get; set; }
        
    /// <summary>
    /// Авто обновление
    /// </summary>
    public bool IsAutoUpdate { get; set; }

    /// <summary>
    /// Прием только по списку ожидания.
    /// </summary>
    public bool ReceptionWaitingListOnly { get; set; }

    /// <summary>
    /// Телефон администратора
    /// </summary>
    public string? AdminPhone { get; set; }
}