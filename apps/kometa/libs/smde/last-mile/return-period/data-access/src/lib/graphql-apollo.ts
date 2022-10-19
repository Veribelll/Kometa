import * as Operations from '@kometa/smde/last-mile/return-period/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetLastMileReturnPeriodsGQL extends Apollo.Query<Operations.GetLastMileReturnPeriodsQuery, Operations.GetLastMileReturnPeriodsQueryVariables> {
    document = Operations.GetLastMileReturnPeriodsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateLastMileReturnPeriodGQL extends Apollo.Mutation<Operations.UpdateLastMileReturnPeriodMutation, Operations.UpdateLastMileReturnPeriodMutationVariables> {
    document = Operations.UpdateLastMileReturnPeriodDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }