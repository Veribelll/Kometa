import * as Operations from '@kometa/shared/postamat/cell/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

  @Injectable({
    providedIn: 'root'
  })
  export class ActivateCellGQL extends Apollo.Mutation<Operations.ActivateCellMutation, Operations.ActivateCellMutationVariables> {
    document = Operations.ActivateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class AssignLockToCellGQL extends Apollo.Mutation<Operations.AssignLockToCellMutation, Operations.AssignLockToCellMutationVariables> {
    document = Operations.AssignLockToCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CellIsBarcodeUniqueGQL extends Apollo.Query<Operations.CellIsBarcodeUniqueQuery, Operations.CellIsBarcodeUniqueQueryVariables> {
    document = Operations.CellIsBarcodeUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CellIsNameUniqueGQL extends Apollo.Query<Operations.CellIsNameUniqueQuery, Operations.CellIsNameUniqueQueryVariables> {
    document = Operations.CellIsNameUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CellIsPinCodeUniqueGQL extends Apollo.Query<Operations.CellIsPinCodeUniqueQuery, Operations.CellIsPinCodeUniqueQueryVariables> {
    document = Operations.CellIsPinCodeUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CellIsServicePinCodeUniqueGQL extends Apollo.Query<Operations.CellIsServicePinCodeUniqueQuery, Operations.CellIsServicePinCodeUniqueQueryVariables> {
    document = Operations.CellIsServicePinCodeUniqueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCellGQL extends Apollo.Mutation<Operations.CreateCellMutation, Operations.CreateCellMutationVariables> {
    document = Operations.CreateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeactivateCellGQL extends Apollo.Mutation<Operations.DeactivateCellMutation, Operations.DeactivateCellMutationVariables> {
    document = Operations.DeactivateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCellGQL extends Apollo.Mutation<Operations.DeleteCellMutation, Operations.DeleteCellMutationVariables> {
    document = Operations.DeleteCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetCellByIdGQL extends Apollo.Query<Operations.GetCellByIdQuery, Operations.GetCellByIdQueryVariables> {
    document = Operations.GetCellByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetCellsGQL extends Apollo.Query<Operations.GetCellsQuery, Operations.GetCellsQueryVariables> {
    document = Operations.GetCellsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class GetDataForAssignLockToCellGQL extends Apollo.Query<Operations.GetDataForAssignLockToCellQuery, Operations.GetDataForAssignLockToCellQueryVariables> {
    document = Operations.GetDataForAssignLockToCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCellGQL extends Apollo.Mutation<Operations.UpdateCellMutation, Operations.UpdateCellMutationVariables> {
    document = Operations.UpdateCellDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }