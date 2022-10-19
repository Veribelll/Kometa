import * as Operations from '@kometa/smde/last-mile/storage-period/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetLastMileStoragePeriodsGQL extends Apollo.Query<Operations.GetLastMileStoragePeriodsQuery, Operations.GetLastMileStoragePeriodsQueryVariables> {
    document = Operations.GetLastMileStoragePeriodsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateLastMileStoragePeriodGQL extends Apollo.Mutation<Operations.UpdateLastMileStoragePeriodMutation, Operations.UpdateLastMileStoragePeriodMutationVariables> {
    document = Operations.UpdateLastMileStoragePeriodDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }