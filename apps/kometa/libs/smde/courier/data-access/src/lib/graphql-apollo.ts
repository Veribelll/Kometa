import * as Operations from '@kometa/smde/courier/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetCourierGQL extends Apollo.Query<Operations.GetCourierQuery, Operations.GetCourierQueryVariables> {
    document = Operations.GetCourierDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetCouriersGQL extends Apollo.Query<Operations.GetCouriersQuery, Operations.GetCouriersQueryVariables> {
    document = Operations.GetCouriersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }