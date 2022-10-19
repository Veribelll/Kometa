import * as Operations from '@kometa/smde/contractor/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class ContractorIsInnUniqueGQL extends Apollo.Query<Operations.ContractorIsInnUniqueQuery, Operations.ContractorIsInnUniqueQueryVariables> {
    document = Operations.ContractorIsInnUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class ContractorIsNameUniqueGQL extends Apollo.Query<Operations.ContractorIsNameUniqueQuery, Operations.ContractorIsNameUniqueQueryVariables> {
    document = Operations.ContractorIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCompanyGQL extends Apollo.Mutation<Operations.CreateCompanyMutation, Operations.CreateCompanyMutationVariables> {
    document = Operations.CreateCompanyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CreateIndividualEntrepreneurGQL extends Apollo.Mutation<Operations.CreateIndividualEntrepreneurMutation, Operations.CreateIndividualEntrepreneurMutationVariables> {
    document = Operations.CreateIndividualEntrepreneurDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCompanyGQL extends Apollo.Mutation<Operations.DeleteCompanyMutation, Operations.DeleteCompanyMutationVariables> {
    document = Operations.DeleteCompanyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteIndividualEntrepreneurGQL extends Apollo.Mutation<Operations.DeleteIndividualEntrepreneurMutation, Operations.DeleteIndividualEntrepreneurMutationVariables> {
    document = Operations.DeleteIndividualEntrepreneurDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetCompanyGQL extends Apollo.Query<Operations.GetCompanyQuery, Operations.GetCompanyQueryVariables> {
    document = Operations.GetCompanyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetContractorsGQL extends Apollo.Query<Operations.GetContractorsQuery, Operations.GetContractorsQueryVariables> {
    document = Operations.GetContractorsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetIndividualEntrepreneurGQL extends Apollo.Query<Operations.GetIndividualEntrepreneurQuery, Operations.GetIndividualEntrepreneurQueryVariables> {
    document = Operations.GetIndividualEntrepreneurDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCompanyGQL extends Apollo.Mutation<Operations.UpdateCompanyMutation, Operations.UpdateCompanyMutationVariables> {
    document = Operations.UpdateCompanyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateIndividualEntrepreneurGQL extends Apollo.Mutation<Operations.UpdateIndividualEntrepreneurMutation, Operations.UpdateIndividualEntrepreneurMutationVariables> {
    document = Operations.UpdateIndividualEntrepreneurDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }