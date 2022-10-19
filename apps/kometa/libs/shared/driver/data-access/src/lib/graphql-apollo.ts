import * as Operations from '@kometa/postamat/driver/types';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GetControllersForDriverGQL extends Apollo.Query<
  Operations.GetControllersForDriverQuery,
  Operations.GetControllersForDriverQueryVariables
> {
  document = Operations.GetControllersForDriverDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
