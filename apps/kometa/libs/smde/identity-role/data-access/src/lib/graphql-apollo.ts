import * as Operations from '@kometa/smde/identity-role/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateIdentityRoleGQL extends Apollo.Mutation<Operations.CreateIdentityRoleMutation, Operations.CreateIdentityRoleMutationVariables> {
    document = Operations.CreateIdentityRoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteIdentityRoleGQL extends Apollo.Mutation<Operations.DeleteIdentityRoleMutation, Operations.DeleteIdentityRoleMutationVariables> {
    document = Operations.DeleteIdentityRoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetIdentityRoleGQL extends Apollo.Query<Operations.GetIdentityRoleQuery, Operations.GetIdentityRoleQueryVariables> {
    document = Operations.GetIdentityRoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetIdentityRolesGQL extends Apollo.Query<Operations.GetIdentityRolesQuery, Operations.GetIdentityRolesQueryVariables> {
    document = Operations.GetIdentityRolesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class IdentityRoleIsNameUniqueGQL extends Apollo.Query<Operations.IdentityRoleIsNameUniqueQuery, Operations.IdentityRoleIsNameUniqueQueryVariables> {
    document = Operations.IdentityRoleIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateIdentityRoleGQL extends Apollo.Mutation<Operations.UpdateIdentityRoleMutation, Operations.UpdateIdentityRoleMutationVariables> {
    document = Operations.UpdateIdentityRoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }