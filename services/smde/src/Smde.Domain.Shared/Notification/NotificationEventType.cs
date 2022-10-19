namespace Smde.Notification;

/// <summary>
/// События для уведомлений
/// </summary>
public enum NotificationEventType
{
    /// <summary>
    /// Отправка упаковочного места
    /// </summary>
    PackingPlaceSending,

    /// <summary>
    /// Принятие упаковочного места в последней миле
    /// </summary>
    PackingPlaceAccepting,

    /// <summary>
    /// Выдача упаковочного места
    /// </summary>
    PackingPlaceIssuing,

    /// <summary>
    /// Возврат упаковочного места
    /// </summary>
    PackingPlaceReturning,

    /// <summary>
    /// Отмена упаковочного места
    /// </summary>
    PackingPlaceCanceled,

    /// <summary>
    /// Пин код для получения товара
    /// </summary>
    PinForIssuing,

    /// <summary>
    /// Пин код для возврата товара
    /// </summary>
    PinForReturning
}