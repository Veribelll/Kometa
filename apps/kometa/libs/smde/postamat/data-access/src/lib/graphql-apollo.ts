import * as Operations from '@kometa/smde/postamat/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePostamatGQL extends Apollo.Mutation<Operations.CreatePostamatMutation, Operations.CreatePostamatMutationVariables> {
    document = Operations.CreatePostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePostamatGQL extends Apollo.Mutation<Operations.DeletePostamatMutation, Operations.DeletePostamatMutationVariables> {
    document = Operations.DeletePostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostamatByIdGQL extends Apollo.Query<Operations.GetPostamatByIdQuery, Operations.GetPostamatByIdQueryVariables> {
    document = Operations.GetPostamatByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostamatGQL extends Apollo.Query<Operations.GetPostamatQuery, Operations.GetPostamatQueryVariables> {
    document = Operations.GetPostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostamatsGQL extends Apollo.Query<Operations.GetPostamatsQuery, Operations.GetPostamatsQueryVariables> {
    document = Operations.GetPostamatsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class PostamatIsExternalIdUniqueGQL extends Apollo.Query<Operations.PostamatIsExternalIdUniqueQuery, Operations.PostamatIsExternalIdUniqueQueryVariables> {
    document = Operations.PostamatIsExternalIdUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class PostamatIsFactoryNumberUniqueGQL extends Apollo.Query<Operations.PostamatIsFactoryNumberUniqueQuery, Operations.PostamatIsFactoryNumberUniqueQueryVariables> {
    document = Operations.PostamatIsFactoryNumberUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class PostamatIsNameUniqueGQL extends Apollo.Query<Operations.PostamatIsNameUniqueQuery, Operations.PostamatIsNameUniqueQueryVariables> {
    document = Operations.PostamatIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostamatGQL extends Apollo.Mutation<Operations.UpdatePostamatMutation, Operations.UpdatePostamatMutationVariables> {
    document = Operations.UpdatePostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }