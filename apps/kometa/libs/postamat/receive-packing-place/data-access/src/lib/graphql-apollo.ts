import * as Operations from '@kometa/postamat/receive-packing-place/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CheckPinCodeGQL extends Apollo.Query<Operations.CheckPinCodeQuery, Operations.CheckPinCodeQueryVariables> {
    document = Operations.CheckPinCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class IssuePackingPlaceGQL extends Apollo.Mutation<Operations.IssuePackingPlaceMutation, Operations.IssuePackingPlaceMutationVariables> {
    document = Operations.IssuePackingPlaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class SendNewPinCodeGQL extends Apollo.Mutation<Operations.SendNewPinCodeMutation, Operations.SendNewPinCodeMutationVariables> {
    document = Operations.SendNewPinCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }