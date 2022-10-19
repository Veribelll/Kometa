import * as Operations from '@kometa/smde/last-mile/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForUpdateLastMileAccountsGQL extends Apollo.Query<Operations.GetDataForUpdateLastMileAccountsQuery, Operations.GetDataForUpdateLastMileAccountsQueryVariables> {
    document = Operations.GetDataForUpdateLastMileAccountsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetLastMileGQL extends Apollo.Query<Operations.GetLastMileQuery, Operations.GetLastMileQueryVariables> {
    document = Operations.GetLastMileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetLastMilesGQL extends Apollo.Query<Operations.GetLastMilesQuery, Operations.GetLastMilesQueryVariables> {
    document = Operations.GetLastMilesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateLastMileAccountsGQL extends Apollo.Mutation<Operations.UpdateLastMileAccountsMutation, Operations.UpdateLastMileAccountsMutationVariables> {
    document = Operations.UpdateLastMileAccountsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }