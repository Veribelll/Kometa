import * as Operations from '@kometa/smde/emex/account/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEmexAccountGQL extends Apollo.Mutation<Operations.CreateEmexAccountMutation, Operations.CreateEmexAccountMutationVariables> {
    document = Operations.CreateEmexAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEmexAccountGQL extends Apollo.Mutation<Operations.DeleteEmexAccountMutation, Operations.DeleteEmexAccountMutationVariables> {
    document = Operations.DeleteEmexAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class EmexAccountIsNameUniqueGQL extends Apollo.Query<Operations.EmexAccountIsNameUniqueQuery, Operations.EmexAccountIsNameUniqueQueryVariables> {
    document = Operations.EmexAccountIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmexAccountGQL extends Apollo.Query<Operations.GetEmexAccountQuery, Operations.GetEmexAccountQueryVariables> {
    document = Operations.GetEmexAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmexAccountsGQL extends Apollo.Query<Operations.GetEmexAccountsQuery, Operations.GetEmexAccountsQueryVariables> {
    document = Operations.GetEmexAccountsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEmexAccountGQL extends Apollo.Mutation<Operations.UpdateEmexAccountMutation, Operations.UpdateEmexAccountMutationVariables> {
    document = Operations.UpdateEmexAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }