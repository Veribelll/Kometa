import * as Operations from '@kometa/smde/topology/template-cell/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateTemplateCellGQL extends Apollo.Mutation<Operations.CreateTemplateCellMutation, Operations.CreateTemplateCellMutationVariables> {
    document = Operations.CreateTemplateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTemplateCellGQL extends Apollo.Mutation<Operations.DeleteTemplateCellMutation, Operations.DeleteTemplateCellMutationVariables> {
    document = Operations.DeleteTemplateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForCreateTemplateCellGQL extends Apollo.Query<Operations.GetDataForCreateTemplateCellQuery, Operations.GetDataForCreateTemplateCellQueryVariables> {
    document = Operations.GetDataForCreateTemplateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForUpdateTemplateCellGQL extends Apollo.Query<Operations.GetDataForUpdateTemplateCellQuery, Operations.GetDataForUpdateTemplateCellQueryVariables> {
    document = Operations.GetDataForUpdateTemplateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetTemplateCellGQL extends Apollo.Query<Operations.GetTemplateCellQuery, Operations.GetTemplateCellQueryVariables> {
    document = Operations.GetTemplateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetTemplatesCellGQL extends Apollo.Query<Operations.GetTemplatesCellQuery, Operations.GetTemplatesCellQueryVariables> {
    document = Operations.GetTemplatesCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class TemplateCellIsNameUniqueGQL extends Apollo.Query<Operations.TemplateCellIsNameUniqueQuery, Operations.TemplateCellIsNameUniqueQueryVariables> {
    document = Operations.TemplateCellIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTemplateCellGQL extends Apollo.Mutation<Operations.UpdateTemplateCellMutation, Operations.UpdateTemplateCellMutationVariables> {
    document = Operations.UpdateTemplateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }