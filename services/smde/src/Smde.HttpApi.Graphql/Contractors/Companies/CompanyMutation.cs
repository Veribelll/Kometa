﻿using Kometa.Graphql.Data;
using Kometa.Graphql.Types;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using HotChocolate.Types.Relay;
using static Smde.Permissions.ContractorManagementPermissions.Contractors;

namespace Smde.Contractors.Companies;

[ExtendObjectType(OperationTypeNames.Mutation)]
public class CompanyMutation : IGraphqlType
{
    [Authorize(Policy = Create)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ContractorNameAlreadyExistsException))]
    [Error(typeof(ContractorInnAlreadyExistsException))]
    public Task<Company> CreateCompany(
        CreateCompanyInput input,
        ICompanyService service) =>
        service.CreateAsync(input);

    [Authorize(Policy = Update)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ContractorNameAlreadyExistsException))]
    [Error(typeof(ContractorInnAlreadyExistsException))]
    public Task<Company> UpdateCompany(
        UpdateCompanyInput input,
        ICompanyService service) =>
        service.UpdateAsync(input);

    [Authorize(Policy = Delete)]
    [UseUnitOfWork]
    [UseMutationConvention]
    [UseAbpError]
    [Error(typeof(ContractorHostDeletionException))]
    public Task<Company> DeleteCompany(
        [ID(nameof(Contractor))] Guid id,
        ICompanyService service) =>
        service.DeleteAsync(id);
}