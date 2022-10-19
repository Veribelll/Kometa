using Volo.Abp;
using static Smde.Notification.Sms.Accounts.SmsCenterAccountConstants;

namespace Smde.Notification.Sms.Accounts;

/// <summary>
/// Аккаунт от сервиса https://smsc.ru
/// </summary>
public class SmsCenterAccount : SmsAccount
{
    /// <summary>
    /// Логин
    /// </summary>
    public string Login { get; protected set; }

    /// <summary>
    /// Пароль
    /// </summary>
    public string Password { get; protected set; }

#pragma warning disable 8618
    protected SmsCenterAccount()
    {
    }

    internal SmsCenterAccount(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        string login,
        string password,
        string name,
        string sender) : base(id, tenantId, contractorId, name, sender)
    {
        SetLogin(login);
        SetPassword(password);
    }
#pragma warning restore 8618

    public void SetLogin(string login)
    {
        Login = Check.NotNullOrWhiteSpace(
            login,
            nameof(login),
            MaxLoginLenght);
    }

    public void SetPassword(string password)
    {
        Password = Check.NotNullOrWhiteSpace(
            password,
            nameof(password),
            MaxPasswordLenght);
    }
}