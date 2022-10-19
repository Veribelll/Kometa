namespace Smde.Emex.Orders;

/// <summary>
/// Тип оплаты
/// </summary>
public enum EmexTypePayment
{
    /// <summary>
    /// Предоплата
    /// </summary>
    Prepayment = 1,

    /// <summary>
    /// Полная оплата картой при получении
    /// </summary>
    FullCashless = 10
}