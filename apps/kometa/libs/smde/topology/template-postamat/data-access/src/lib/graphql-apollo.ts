import * as Operations from '@kometa/smde/topology/template-postamat/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateTemplatePostamatGQL extends Apollo.Mutation<Operations.CreateTemplatePostamatMutation, Operations.CreateTemplatePostamatMutationVariables> {
    document = Operations.CreateTemplatePostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTemplatePostamatGQL extends Apollo.Mutation<Operations.DeleteTemplatePostamatMutation, Operations.DeleteTemplatePostamatMutationVariables> {
    document = Operations.DeleteTemplatePostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForCreateTemplatePostamatGQL extends Apollo.Query<Operations.GetDataForCreateTemplatePostamatQuery, Operations.GetDataForCreateTemplatePostamatQueryVariables> {
    document = Operations.GetDataForCreateTemplatePostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetTemplatePostamatGQL extends Apollo.Query<Operations.GetTemplatePostamatQuery, Operations.GetTemplatePostamatQueryVariables> {
    document = Operations.GetTemplatePostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetTemplatesPostamatGQL extends Apollo.Query<Operations.GetTemplatesPostamatQuery, Operations.GetTemplatesPostamatQueryVariables> {
    document = Operations.GetTemplatesPostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class TemplatePostamatIsNameUniqueGQL extends Apollo.Query<Operations.TemplatePostamatIsNameUniqueQuery, Operations.TemplatePostamatIsNameUniqueQueryVariables> {
    document = Operations.TemplatePostamatIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTemplatePostamatGQL extends Apollo.Mutation<Operations.UpdateTemplatePostamatMutation, Operations.UpdateTemplatePostamatMutationVariables> {
    document = Operations.UpdateTemplatePostamatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }