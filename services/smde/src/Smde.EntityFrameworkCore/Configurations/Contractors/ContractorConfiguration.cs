using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Contractors;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.Contractors.AccountBankConstants;
using static Smde.Contractors.ContractorConstants;
using static Smde.Contractors.IndividualEntrepreneurConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Contractors;

public class ContractorConfiguration : IEntityTypeConfiguration<Contractor>
{
    public void Configure(EntityTypeBuilder<Contractor> builder)
    {
        builder.ToTable(DbTablePrefix + "Contractors", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();

        builder.OwnsOne(x => x.AccountBank, accountBank =>
        {
            accountBank.Property(x => x.BankName)
                .HasMaxLength(MaxBankNameLenght)
                .IsRequired();

            accountBank.Property(x => x.Bic)
                .HasMaxLength(BicLenght)
                .IsRequired();

            accountBank.Property(x => x.PaymentAccount)
                .HasMaxLength(PaymentAccountLenght)
                .IsRequired();

            accountBank.Property(x => x.CorrespondentAccount)
                .HasMaxLength(CorrespondentAccountLenght)
                .IsRequired();
        });

        builder.Property(x => x.Inn)
            .HasMaxLength(InnLenght)
            .IsRequired();

        builder.Property(x => x.Okpo)
            .HasMaxLength(OkpoLenght)
            .IsRequired(false);

        builder.Property(x => x.Address)
            .HasMaxLength(MaxAddressLenght)
            .IsRequired();

        builder.Property(x => x.ActualAddress)
            .HasMaxLength(MaxAddressLenght)
            .IsRequired(false);

        builder.Property(x => x.MailingAddress)
            .HasMaxLength(MaxAddressLenght)
            .IsRequired(false);
    }
}