import * as Operations from '@kometa/smde/emex/order/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEmexOrderGQL extends Apollo.Mutation<Operations.CreateEmexOrderMutation, Operations.CreateEmexOrderMutationVariables> {
    document = Operations.CreateEmexOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEmexProductGQL extends Apollo.Mutation<Operations.CreateEmexProductMutation, Operations.CreateEmexProductMutationVariables> {
    document = Operations.CreateEmexProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEmexOrderGQL extends Apollo.Mutation<Operations.DeleteEmexOrderMutation, Operations.DeleteEmexOrderMutationVariables> {
    document = Operations.DeleteEmexOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteEmexProductGQL extends Apollo.Mutation<Operations.DeleteEmexProductMutation, Operations.DeleteEmexProductMutationVariables> {
    document = Operations.DeleteEmexProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmexOrderGQL extends Apollo.Query<Operations.GetEmexOrderQuery, Operations.GetEmexOrderQueryVariables> {
    document = Operations.GetEmexOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmexOrdersGQL extends Apollo.Query<Operations.GetEmexOrdersQuery, Operations.GetEmexOrdersQueryVariables> {
    document = Operations.GetEmexOrdersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmexProductGQL extends Apollo.Query<Operations.GetEmexProductQuery, Operations.GetEmexProductQueryVariables> {
    document = Operations.GetEmexProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetEmexProductsGQL extends Apollo.Query<Operations.GetEmexProductsQuery, Operations.GetEmexProductsQueryVariables> {
    document = Operations.GetEmexProductsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class EmexOrderIsExternalIdUniqueGQL extends Apollo.Query<Operations.EmexOrderIsExternalIdUniqueQuery, Operations.EmexOrderIsExternalIdUniqueQueryVariables> {
    document = Operations.EmexOrderIsExternalIdUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEmexOrderGQL extends Apollo.Mutation<Operations.UpdateEmexOrderMutation, Operations.UpdateEmexOrderMutationVariables> {
    document = Operations.UpdateEmexOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateEmexProductGQL extends Apollo.Mutation<Operations.UpdateEmexProductMutation, Operations.UpdateEmexProductMutationVariables> {
    document = Operations.UpdateEmexProductDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }