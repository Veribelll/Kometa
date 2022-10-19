import * as Operations from '@kometa/smde/tenant/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateTenantGQL extends Apollo.Mutation<Operations.CreateTenantMutation, Operations.CreateTenantMutationVariables> {
    document = Operations.CreateTenantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTenantGQL extends Apollo.Mutation<Operations.DeleteTenantMutation, Operations.DeleteTenantMutationVariables> {
    document = Operations.DeleteTenantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetTenantGQL extends Apollo.Query<Operations.GetTenantQuery, Operations.GetTenantQueryVariables> {
    document = Operations.GetTenantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetTenantsGQL extends Apollo.Query<Operations.GetTenantsQuery, Operations.GetTenantsQueryVariables> {
    document = Operations.GetTenantsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class TenantIsEmailUniqueGQL extends Apollo.Query<Operations.TenantIsEmailUniqueQuery, Operations.TenantIsEmailUniqueQueryVariables> {
    document = Operations.TenantIsEmailUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class TenantIsNameUniqueGQL extends Apollo.Query<Operations.TenantIsNameUniqueQuery, Operations.TenantIsNameUniqueQueryVariables> {
    document = Operations.TenantIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTenantGQL extends Apollo.Mutation<Operations.UpdateTenantMutation, Operations.UpdateTenantMutationVariables> {
    document = Operations.UpdateTenantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }