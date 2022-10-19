import * as Operations from '@kometa/shared/postamat/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostamatFilePrinterGQL extends Apollo.Query<Operations.GetPostamatFilePrinterQuery, Operations.GetPostamatFilePrinterQueryVariables> {
    document = Operations.GetPostamatFilePrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostamatNetworkPrinterGQL extends Apollo.Query<Operations.GetPostamatNetworkPrinterQuery, Operations.GetPostamatNetworkPrinterQueryVariables> {
    document = Operations.GetPostamatNetworkPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostamatScannerGQL extends Apollo.Query<Operations.GetPostamatScannerQuery, Operations.GetPostamatScannerQueryVariables> {
    document = Operations.GetPostamatScannerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostamatSerialPrinterGQL extends Apollo.Query<Operations.GetPostamatSerialPrinterQuery, Operations.GetPostamatSerialPrinterQueryVariables> {
    document = Operations.GetPostamatSerialPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostamatSettingsGQL extends Apollo.Query<Operations.GetPostamatSettingsQuery, Operations.GetPostamatSettingsQueryVariables> {
    document = Operations.GetPostamatSettingsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostamatFilePrinterGQL extends Apollo.Mutation<Operations.UpdatePostamatFilePrinterMutation, Operations.UpdatePostamatFilePrinterMutationVariables> {
    document = Operations.UpdatePostamatFilePrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostamatNetworkPrinterGQL extends Apollo.Mutation<Operations.UpdatePostamatNetworkPrinterMutation, Operations.UpdatePostamatNetworkPrinterMutationVariables> {
    document = Operations.UpdatePostamatNetworkPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostamatScannerGQL extends Apollo.Mutation<Operations.UpdatePostamatScannerMutation, Operations.UpdatePostamatScannerMutationVariables> {
    document = Operations.UpdatePostamatScannerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostamatSerialPrinterGQL extends Apollo.Mutation<Operations.UpdatePostamatSerialPrinterMutation, Operations.UpdatePostamatSerialPrinterMutationVariables> {
    document = Operations.UpdatePostamatSerialPrinterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePostamatSettingsGQL extends Apollo.Mutation<Operations.UpdatePostamatSettingsMutation, Operations.UpdatePostamatSettingsMutationVariables> {
    document = Operations.UpdatePostamatSettingsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }