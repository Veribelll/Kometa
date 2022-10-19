namespace Smde.LastMiles.Postamats.Cells;

public enum CellStatus
{
    /// <summary>
    /// Свободна
    /// </summary>
    Free,
        
    /// <summary>
    /// Занята товаром
    /// </summary>
    Busy,
        
    /// <summary>
    /// Зарезервирована
    /// </summary>
    Reserved,
        
    /// <summary>
    /// Зарезервирована для возврата
    /// </summary>
    ReservedForReturn,
        
    /// <summary>
    /// Вернули товар
    /// </summary>
    Returned,
}