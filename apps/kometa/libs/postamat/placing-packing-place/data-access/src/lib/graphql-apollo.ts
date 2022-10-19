import * as Operations from '@kometa/postamat/placing-packing-place/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForPlacingPackingPlaceGQL extends Apollo.Query<Operations.GetDataForPlacingPackingPlaceQuery, Operations.GetDataForPlacingPackingPlaceQueryVariables> {
    document = Operations.GetDataForPlacingPackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class PutPackingPlaceInPostamatGQL extends Apollo.Mutation<Operations.PutPackingPlaceInPostamatMutation, Operations.PutPackingPlaceInPostamatMutationVariables> {
    document = Operations.PutPackingPlaceInPostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }