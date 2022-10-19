using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Threading;

namespace Kometa.Sms.SmsCenter;

public class SmsCenterClient : ISmsCenterClient, ITransientDependency
{
    private const string Uri = "https://smsc.ru/sys";

    protected readonly IHttpClientFactory HttpClientFactory;
    protected readonly ILogger<SmsCenterClient> Logger;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public SmsCenterClient(
        IHttpClientFactory httpClientFactory,
        ILogger<SmsCenterClient> logger,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        HttpClientFactory = httpClientFactory;
        Logger = logger;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    public async Task SendAsync(string phoneNumber, string text, string login, string password)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        try
        {
            using var client = HttpClientFactory.CreateClient();
            var requestUri =
                $"{Uri}/send.php?login={login}&psw={password}&phones={phoneNumber}&mes={text}&fmt=3&cost=2";
            using var httpRequest = new HttpRequestMessage(HttpMethod.Get, requestUri);
            using var response = await client.GetAsync(requestUri, cancellationToken);
            var content = await response.Content.ReadAsByteArrayAsync(cancellationToken);

            if (!response.IsSuccessStatusCode)
            {
                Logger.Log(LogLevel.Error, "Status code: {Status}, Content: {Content}", response.StatusCode,
                    content);
                throw new SmsCenterClientSendException(response);
            }
        }
        catch (Exception e)
        {
            Logger.Log(LogLevel.Critical, e, "Error to send sms {NameClass}", nameof(SmsCenterClient));
            throw;
        }
    }
}