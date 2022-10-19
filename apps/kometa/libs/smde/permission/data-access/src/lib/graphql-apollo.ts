import * as Operations from '@kometa/smde/permission/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetPermissionsGQL extends Apollo.Query<Operations.GetPermissionsQuery, Operations.GetPermissionsQueryVariables> {
    document = Operations.GetPermissionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePermissionsGQL extends Apollo.Mutation<Operations.UpdatePermissionsMutation, Operations.UpdatePermissionsMutationVariables> {
    document = Operations.UpdatePermissionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }