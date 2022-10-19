import * as Operations from '@kometa/shared/employee/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmployeesForSelectGQL extends Apollo.Query<Operations.GetEmployeesForSelectQuery, Operations.GetEmployeesForSelectQueryVariables> {
    document = Operations.GetEmployeesForSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }