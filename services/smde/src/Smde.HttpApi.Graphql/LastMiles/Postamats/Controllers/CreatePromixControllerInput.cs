using System.ComponentModel.DataAnnotations;

namespace Smde.LastMiles.Postamats.Controllers;

public class CreatePromixControllerInput : CreateOrUpdatePromixControllerInputBase
{
    /// <summary>
    /// Кол-во контроллеров
    /// </summary>
    [Range(1, int.MaxValue)]
    public int Quantity { get; set; }
}