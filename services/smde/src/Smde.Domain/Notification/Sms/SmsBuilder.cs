using System.Text;
using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace Smde.Notification.Sms;

public class SmsBuilder : ISmsBuilder, ITransientDependency
{
    private static class Templates
    {
        public const string LastMileAddress = "%LastMile.Address%";
        public const string PackingPlaceBarcode = "%PackingPlace.Barcode%";
        public const string OrderIds = "%Order.Ids%";
        public const string CustomerName = "%Customer.Name%";
        public const string CustomerId = "%Customer.Id%";
        public const string PinCode = "%PinCode%";
    }

    public Task<string> BuildAsync(NotificationDataResolveResult data, string template)
    {
        Check.NotNullOrWhiteSpace(template, nameof(template));

        var builder = new StringBuilder(template);

        builder
            .Replace(Templates.LastMileAddress, data.LastMileAddress)
            .Replace(Templates.PackingPlaceBarcode, data.PackingPlaceBarcode)
            .Replace(Templates.OrderIds, data.OrderIds.JoinAsString(", "))
            .Replace(Templates.CustomerName, data.CustomerName)
            .Replace(Templates.CustomerId, data.CustomerId)
            .Replace(Templates.PinCode, data.PinCode);

        return Task.FromResult(builder.ToString());
    }
}