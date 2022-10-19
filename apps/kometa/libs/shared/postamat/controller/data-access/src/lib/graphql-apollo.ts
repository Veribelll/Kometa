import * as Operations from '@kometa/shared/postamat/controller/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class ControllerIsNameUniqueGQL extends Apollo.Query<Operations.ControllerIsNameUniqueQuery, Operations.ControllerIsNameUniqueQueryVariables> {
    document = Operations.ControllerIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePromixControllerGQL extends Apollo.Mutation<Operations.CreatePromixControllerMutation, Operations.CreatePromixControllerMutationVariables> {
    document = Operations.CreatePromixControllerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePromixControllerGQL extends Apollo.Mutation<Operations.DeletePromixControllerMutation, Operations.DeletePromixControllerMutationVariables> {
    document = Operations.DeletePromixControllerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetControllersGQL extends Apollo.Query<Operations.GetControllersQuery, Operations.GetControllersQueryVariables> {
    document = Operations.GetControllersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePromixControllerGQL extends Apollo.Mutation<Operations.UpdatePromixControllerMutation, Operations.UpdatePromixControllerMutationVariables> {
    document = Operations.UpdatePromixControllerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }