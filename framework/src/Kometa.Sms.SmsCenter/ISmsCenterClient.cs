namespace Kometa.Sms.SmsCenter;

public interface ISmsCenterClient
{
    Task SendAsync(string phoneNumber, string text, string login, string password);
}