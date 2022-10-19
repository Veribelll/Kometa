import * as Operations from '@kometa/smde/sms/account/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class CreateSmsCenterAccountGQL extends Apollo.Mutation<Operations.CreateSmsCenterAccountMutation, Operations.CreateSmsCenterAccountMutationVariables> {
    document = Operations.CreateSmsCenterAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSmsCenterAccountGQL extends Apollo.Mutation<Operations.DeleteSmsCenterAccountMutation, Operations.DeleteSmsCenterAccountMutationVariables> {
    document = Operations.DeleteSmsCenterAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetSmsAccountGQL extends Apollo.Query<Operations.GetSmsAccountQuery, Operations.GetSmsAccountQueryVariables> {
    document = Operations.GetSmsAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetSmsAccountsGQL extends Apollo.Query<Operations.GetSmsAccountsQuery, Operations.GetSmsAccountsQueryVariables> {
    document = Operations.GetSmsAccountsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class SmsAccountIsNameUniqueGQL extends Apollo.Query<Operations.SmsAccountIsNameUniqueQuery, Operations.SmsAccountIsNameUniqueQueryVariables> {
    document = Operations.SmsAccountIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSmsCenterAccountGQL extends Apollo.Mutation<Operations.UpdateSmsCenterAccountMutation, Operations.UpdateSmsCenterAccountMutationVariables> {
    document = Operations.UpdateSmsCenterAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }