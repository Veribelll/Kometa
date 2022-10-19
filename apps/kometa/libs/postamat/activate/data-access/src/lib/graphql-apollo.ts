import * as Operations from '@kometa/postamat/activate/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class ActivatePostamatGQL extends Apollo.Mutation<Operations.ActivatePostamatMutation, Operations.ActivatePostamatMutationVariables> {
    document = Operations.ActivatePostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }