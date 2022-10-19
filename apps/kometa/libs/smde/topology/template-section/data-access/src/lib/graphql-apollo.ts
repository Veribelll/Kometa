import * as Operations from '@kometa/smde/topology/template-section/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateTemplateSectionGQL extends Apollo.Mutation<Operations.CreateTemplateSectionMutation, Operations.CreateTemplateSectionMutationVariables> {
    document = Operations.CreateTemplateSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTemplateSectionGQL extends Apollo.Mutation<Operations.DeleteTemplateSectionMutation, Operations.DeleteTemplateSectionMutationVariables> {
    document = Operations.DeleteTemplateSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForCreateTemplateSectionGQL extends Apollo.Query<Operations.GetDataForCreateTemplateSectionQuery, Operations.GetDataForCreateTemplateSectionQueryVariables> {
    document = Operations.GetDataForCreateTemplateSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetTemplateSectionGQL extends Apollo.Query<Operations.GetTemplateSectionQuery, Operations.GetTemplateSectionQueryVariables> {
    document = Operations.GetTemplateSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetTemplatesSectionGQL extends Apollo.Query<Operations.GetTemplatesSectionQuery, Operations.GetTemplatesSectionQueryVariables> {
    document = Operations.GetTemplatesSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class TemplateSectionIsNameUniqueGQL extends Apollo.Query<Operations.TemplateSectionIsNameUniqueQuery, Operations.TemplateSectionIsNameUniqueQueryVariables> {
    document = Operations.TemplateSectionIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTemplateSectionGQL extends Apollo.Mutation<Operations.UpdateTemplateSectionMutation, Operations.UpdateTemplateSectionMutationVariables> {
    document = Operations.UpdateTemplateSectionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }