import * as Operations from '@kometa/smde/packing-place/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePackingPlaceGQL extends Apollo.Mutation<Operations.CreatePackingPlaceMutation, Operations.CreatePackingPlaceMutationVariables> {
    document = Operations.CreatePackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePackingPlaceGQL extends Apollo.Mutation<Operations.DeletePackingPlaceMutation, Operations.DeletePackingPlaceMutationVariables> {
    document = Operations.DeletePackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForCreatePackingPlaceGQL extends Apollo.Query<Operations.GetDataForCreatePackingPlaceQuery, Operations.GetDataForCreatePackingPlaceQueryVariables> {
    document = Operations.GetDataForCreatePackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForUpdatePackingPlaceGQL extends Apollo.Query<Operations.GetDataForUpdatePackingPlaceQuery, Operations.GetDataForUpdatePackingPlaceQueryVariables> {
    document = Operations.GetDataForUpdatePackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPackingPlaceGQL extends Apollo.Query<Operations.GetPackingPlaceQuery, Operations.GetPackingPlaceQueryVariables> {
    document = Operations.GetPackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPackingPlacesGQL extends Apollo.Query<Operations.GetPackingPlacesQuery, Operations.GetPackingPlacesQueryVariables> {
    document = Operations.GetPackingPlacesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class PackingPlaceIsBarcodeUniqueGQL extends Apollo.Query<Operations.PackingPlaceIsBarcodeUniqueQuery, Operations.PackingPlaceIsBarcodeUniqueQueryVariables> {
    document = Operations.PackingPlaceIsBarcodeUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class SendPackingPlaceGQL extends Apollo.Mutation<Operations.SendPackingPlaceMutation, Operations.SendPackingPlaceMutationVariables> {
    document = Operations.SendPackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePackingPlaceGQL extends Apollo.Mutation<Operations.UpdatePackingPlaceMutation, Operations.UpdatePackingPlaceMutationVariables> {
    document = Operations.UpdatePackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }