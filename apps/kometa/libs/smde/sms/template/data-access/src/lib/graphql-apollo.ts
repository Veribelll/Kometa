import * as Operations from '@kometa/smde/sms/template/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateSmsTemplateGQL extends Apollo.Mutation<Operations.CreateSmsTemplateMutation, Operations.CreateSmsTemplateMutationVariables> {
    document = Operations.CreateSmsTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSmsTemplateGQL extends Apollo.Mutation<Operations.DeleteSmsTemplateMutation, Operations.DeleteSmsTemplateMutationVariables> {
    document = Operations.DeleteSmsTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetSmsTemplateGQL extends Apollo.Query<Operations.GetSmsTemplateQuery, Operations.GetSmsTemplateQueryVariables> {
    document = Operations.GetSmsTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetSmsTemplatesGQL extends Apollo.Query<Operations.GetSmsTemplatesQuery, Operations.GetSmsTemplatesQueryVariables> {
    document = Operations.GetSmsTemplatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class SmsTemplateIsNameUniqueGQL extends Apollo.Query<Operations.SmsTemplateIsNameUniqueQuery, Operations.SmsTemplateIsNameUniqueQueryVariables> {
    document = Operations.SmsTemplateIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSmsTemplateGQL extends Apollo.Mutation<Operations.UpdateSmsTemplateMutation, Operations.UpdateSmsTemplateMutationVariables> {
    document = Operations.UpdateSmsTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }