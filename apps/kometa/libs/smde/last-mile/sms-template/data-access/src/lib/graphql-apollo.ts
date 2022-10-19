import * as Operations from '@kometa/smde/last-mile/sms-template/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteLastMileSmsTemplateGQL extends Apollo.Mutation<Operations.DeleteLastMileSmsTemplateMutation, Operations.DeleteLastMileSmsTemplateMutationVariables> {
    document = Operations.DeleteLastMileSmsTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetLastMileSmsTemplatesGQL extends Apollo.Query<Operations.GetLastMileSmsTemplatesQuery, Operations.GetLastMileSmsTemplatesQueryVariables> {
    document = Operations.GetLastMileSmsTemplatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateLastMileSmsTemplateGQL extends Apollo.Mutation<Operations.UpdateLastMileSmsTemplateMutation, Operations.UpdateLastMileSmsTemplateMutationVariables> {
    document = Operations.UpdateLastMileSmsTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }