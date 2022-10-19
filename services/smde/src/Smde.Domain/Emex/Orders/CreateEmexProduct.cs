namespace Smde.Emex.Orders;

public record CreateEmexProduct(
    EmexTypeBalance TypeBalance,
    EmexTypePayment TypePayment,
    string? Barcode, 
    string Name,
    string VendorCode,
    string Manufacturer, 
    decimal Quantity,
    decimal Price,
    decimal Vat,
    decimal Sum, 
    string? ManufacturerCountry, 
    string? ManufacturerCountryCode, 
    string? Marking, 
    string? Gtd);