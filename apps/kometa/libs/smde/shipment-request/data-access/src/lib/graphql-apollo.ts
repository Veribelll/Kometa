import * as Operations from '@kometa/smde/shipment-request/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CancelShipmentRequestGQL extends Apollo.Mutation<Operations.CancelShipmentRequestMutation, Operations.CancelShipmentRequestMutationVariables> {
    document = Operations.CancelShipmentRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CreateShipmentRequestGQL extends Apollo.Mutation<Operations.CreateShipmentRequestMutation, Operations.CreateShipmentRequestMutationVariables> {
    document = Operations.CreateShipmentRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteShipmentRequestGQL extends Apollo.Mutation<Operations.DeleteShipmentRequestMutation, Operations.DeleteShipmentRequestMutationVariables> {
    document = Operations.DeleteShipmentRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetShipmentRequestGQL extends Apollo.Query<Operations.GetShipmentRequestQuery, Operations.GetShipmentRequestQueryVariables> {
    document = Operations.GetShipmentRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetShipmentRequestsGQL extends Apollo.Query<Operations.GetShipmentRequestsQuery, Operations.GetShipmentRequestsQueryVariables> {
    document = Operations.GetShipmentRequestsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class ShipmentRequestIsNameUniqueGQL extends Apollo.Query<Operations.ShipmentRequestIsNameUniqueQuery, Operations.ShipmentRequestIsNameUniqueQueryVariables> {
    document = Operations.ShipmentRequestIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateShipmentRequestGQL extends Apollo.Mutation<Operations.UpdateShipmentRequestMutation, Operations.UpdateShipmentRequestMutationVariables> {
    document = Operations.UpdateShipmentRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }