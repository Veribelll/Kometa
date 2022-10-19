import * as Operations from '@kometa/smde/employee/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEmployeeGQL extends Apollo.Mutation<Operations.CreateEmployeeMutation, Operations.CreateEmployeeMutationVariables> {
    document = Operations.CreateEmployeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEmployeeGQL extends Apollo.Mutation<Operations.DeleteEmployeeMutation, Operations.DeleteEmployeeMutationVariables> {
    document = Operations.DeleteEmployeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForCreateEmployeeGQL extends Apollo.Query<Operations.GetDataForCreateEmployeeQuery, Operations.GetDataForCreateEmployeeQueryVariables> {
    document = Operations.GetDataForCreateEmployeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForUpdateEmployeeGQL extends Apollo.Query<Operations.GetDataForUpdateEmployeeQuery, Operations.GetDataForUpdateEmployeeQueryVariables> {
    document = Operations.GetDataForUpdateEmployeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmployeeGQL extends Apollo.Query<Operations.GetEmployeeQuery, Operations.GetEmployeeQueryVariables> {
    document = Operations.GetEmployeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmployeesGQL extends Apollo.Query<Operations.GetEmployeesQuery, Operations.GetEmployeesQueryVariables> {
    document = Operations.GetEmployeesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class EmployeeIsEmailUniqueGQL extends Apollo.Query<Operations.EmployeeIsEmailUniqueQuery, Operations.EmployeeIsEmailUniqueQueryVariables> {
    document = Operations.EmployeeIsEmailUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEmployeeGQL extends Apollo.Mutation<Operations.UpdateEmployeeMutation, Operations.UpdateEmployeeMutationVariables> {
    document = Operations.UpdateEmployeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }