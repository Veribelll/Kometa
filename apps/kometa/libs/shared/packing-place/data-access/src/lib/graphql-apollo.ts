import * as Operations from '@kometa/shared/packing-place/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmexProductsForPackingPlaceGQL extends Apollo.Query<Operations.GetEmexProductsForPackingPlaceQuery, Operations.GetEmexProductsForPackingPlaceQueryVariables> {
    document = Operations.GetEmexProductsForPackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPackingPlaceByIdGQL extends Apollo.Query<Operations.GetPackingPlaceByIdQuery, Operations.GetPackingPlaceByIdQueryVariables> {
    document = Operations.GetPackingPlaceByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPackingPlaceChangesHistoryGQL extends Apollo.Query<Operations.GetPackingPlaceChangesHistoryQuery, Operations.GetPackingPlaceChangesHistoryQueryVariables> {
    document = Operations.GetPackingPlaceChangesHistoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }