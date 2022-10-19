using Volo.Abp;
using Volo.Abp.Domain.Values;
using static Smde.Contractors.AccountBankConstants;

namespace Smde.Contractors;

/// <summary>
/// Реквизиты банковского счета
/// </summary>
public class AccountBank : ValueObject
{
    /// <summary>
    /// Наименование банка
    /// </summary>
    public string BankName { get; protected set; }

    /// <summary>
    /// БИК - банковский идентификационный код
    /// </summary>
    public string Bic { get; protected set; }

    /// <summary>
    /// Расчетный счет
    /// </summary>
    public string PaymentAccount { get; protected set; }

    /// <summary>
    /// Корреспондентский счёт
    /// </summary>
    public string CorrespondentAccount { get; protected set; }

#pragma warning disable 8618
    protected AccountBank()
    {
    }
#pragma warning restore 8618

    public AccountBank(
        string bankName,
        string bic,
        string paymentAccount,
        string correspondentAccount)
    {
        BankName = Check.NotNullOrWhiteSpace(
            bankName,
            nameof(bankName),
            MaxBankNameLenght);
            
        Bic = Check.NotNullOrWhiteSpace(
            bic,
            nameof(bic),
            BicLenght,
            BicLenght);
            
        PaymentAccount = Check.NotNullOrWhiteSpace(
            paymentAccount,
            nameof(paymentAccount),
            PaymentAccountLenght,
            PaymentAccountLenght);
            
        CorrespondentAccount = Check.NotNullOrWhiteSpace(
            correspondentAccount,
            nameof(correspondentAccount),
            CorrespondentAccountLenght,
            CorrespondentAccountLenght);
    }

    protected override IEnumerable<object> GetAtomicValues()
    {
        yield return BankName;
        yield return Bic;
        yield return PaymentAccount;
        yield return CorrespondentAccount;
    }
}