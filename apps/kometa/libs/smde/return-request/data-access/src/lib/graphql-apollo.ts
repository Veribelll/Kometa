import * as Operations from '@kometa/smde/return-request/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CancelReturnRequestGQL extends Apollo.Mutation<Operations.CancelReturnRequestMutation, Operations.CancelReturnRequestMutationVariables> {
    document = Operations.CancelReturnRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CreateReturnRequestGQL extends Apollo.Mutation<Operations.CreateReturnRequestMutation, Operations.CreateReturnRequestMutationVariables> {
    document = Operations.CreateReturnRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteReturnRequestGQL extends Apollo.Mutation<Operations.DeleteReturnRequestMutation, Operations.DeleteReturnRequestMutationVariables> {
    document = Operations.DeleteReturnRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetReturnRequestGQL extends Apollo.Query<Operations.GetReturnRequestQuery, Operations.GetReturnRequestQueryVariables> {
    document = Operations.GetReturnRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetReturnRequestsGQL extends Apollo.Query<Operations.GetReturnRequestsQuery, Operations.GetReturnRequestsQueryVariables> {
    document = Operations.GetReturnRequestsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class ReturnRequestIsCodeUniqueGQL extends Apollo.Query<Operations.ReturnRequestIsCodeUniqueQuery, Operations.ReturnRequestIsCodeUniqueQueryVariables> {
    document = Operations.ReturnRequestIsCodeUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class ReturnReturnRequestGQL extends Apollo.Mutation<Operations.ReturnReturnRequestMutation, Operations.ReturnReturnRequestMutationVariables> {
    document = Operations.ReturnReturnRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateReturnRequestGQL extends Apollo.Mutation<Operations.UpdateReturnRequestMutation, Operations.UpdateReturnRequestMutationVariables> {
    document = Operations.UpdateReturnRequestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }