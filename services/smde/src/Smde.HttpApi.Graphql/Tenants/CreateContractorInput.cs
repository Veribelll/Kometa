using HotChocolate.Types;
using Smde.Contractors.Companies;
using Smde.Contractors.IndividualEntrepreneurs;

namespace Smde.Tenants;

[OneOf]
public class CreateContractorInput
{
    public CreateCompanyInput? Company { get; set; }
    public CreateIndividualEntrepreneurInput? IndividualEntrepreneur { get; set; }
}