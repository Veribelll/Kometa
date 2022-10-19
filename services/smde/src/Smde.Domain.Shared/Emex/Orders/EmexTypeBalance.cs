namespace Smde.Emex.Orders;

/// <summary>
/// Тип баланса
/// </summary>
public enum EmexTypeBalance
{
    /// <summary>
    /// Оплата картой при получении
    /// </summary>
    None = 0,
        
    /// <summary>
    /// Оплата с баланса Emex
    /// </summary>
    Emex = 1
}