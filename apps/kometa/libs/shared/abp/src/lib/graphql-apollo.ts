import * as Operations from './graphql-types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetApplicationConfigurationGQL extends Apollo.Query<Operations.GetApplicationConfigurationQuery, Operations.GetApplicationConfigurationQueryVariables> {
    document = Operations.GetApplicationConfigurationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }