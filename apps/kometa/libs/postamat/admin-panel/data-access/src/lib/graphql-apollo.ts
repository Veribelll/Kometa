import * as Operations from '@kometa/postamat/admin-panel/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetPackingPlacesAcceptedGQL extends Apollo.Query<Operations.GetPackingPlacesAcceptedQuery, Operations.GetPackingPlacesAcceptedQueryVariables> {
    document = Operations.GetPackingPlacesAcceptedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPackingPlacesInTransitGQL extends Apollo.Query<Operations.GetPackingPlacesInTransitQuery, Operations.GetPackingPlacesInTransitQueryVariables> {
    document = Operations.GetPackingPlacesInTransitDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }