import * as Operations from '@kometa/shared/topology/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetCellDisplaysGQL extends Apollo.Query<Operations.GetCellDisplaysQuery, Operations.GetCellDisplaysQueryVariables> {
    document = Operations.GetCellDisplaysDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForUpdateCellDisplaysGQL extends Apollo.Query<Operations.GetDataForUpdateCellDisplaysQuery, Operations.GetDataForUpdateCellDisplaysQueryVariables> {
    document = Operations.GetDataForUpdateCellDisplaysDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForUpdateTopologyGQL extends Apollo.Query<Operations.GetDataForUpdateTopologyQuery, Operations.GetDataForUpdateTopologyQueryVariables> {
    document = Operations.GetDataForUpdateTopologyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostamatDisplayGQL extends Apollo.Mutation<Operations.UpdatePostamatDisplayMutation, Operations.UpdatePostamatDisplayMutationVariables> {
    document = Operations.UpdatePostamatDisplayDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTopologyGQL extends Apollo.Mutation<Operations.UpdateTopologyMutation, Operations.UpdateTopologyMutationVariables> {
    document = Operations.UpdateTopologyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }