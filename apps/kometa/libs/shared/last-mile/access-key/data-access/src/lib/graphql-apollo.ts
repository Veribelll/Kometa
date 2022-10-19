import * as Operations from '@kometa/shared/last-mile/access-key/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class AccessKeyIsBarcodeUniqueGQL extends Apollo.Query<Operations.AccessKeyIsBarcodeUniqueQuery, Operations.AccessKeyIsBarcodeUniqueQueryVariables> {
    document = Operations.AccessKeyIsBarcodeUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CreateAccessKeyGQL extends Apollo.Mutation<Operations.CreateAccessKeyMutation, Operations.CreateAccessKeyMutationVariables> {
    document = Operations.CreateAccessKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteAccessKeyGQL extends Apollo.Mutation<Operations.DeleteAccessKeyMutation, Operations.DeleteAccessKeyMutationVariables> {
    document = Operations.DeleteAccessKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetAccessKeyGQL extends Apollo.Query<Operations.GetAccessKeyQuery, Operations.GetAccessKeyQueryVariables> {
    document = Operations.GetAccessKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetAccessKeysGQL extends Apollo.Query<Operations.GetAccessKeysQuery, Operations.GetAccessKeysQueryVariables> {
    document = Operations.GetAccessKeysDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateAccessKeyGQL extends Apollo.Mutation<Operations.UpdateAccessKeyMutation, Operations.UpdateAccessKeyMutationVariables> {
    document = Operations.UpdateAccessKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }