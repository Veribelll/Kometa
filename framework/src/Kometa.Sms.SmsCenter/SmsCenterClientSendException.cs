namespace Kometa.Sms.SmsCenter;

public class SmsCenterClientSendException : Exception
{
    public HttpResponseMessage Response { get; }

    public SmsCenterClientSendException(HttpResponseMessage response)
    {
        Response = response;
    }
}