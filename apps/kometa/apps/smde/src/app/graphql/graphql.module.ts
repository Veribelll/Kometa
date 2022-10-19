import { InMemoryCache } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments';
import { typePolicies } from '@kometa/shared/util-graphql';
import { HttpLink } from 'apollo-angular/http';

const uri = environment.apis.default.url + '/graphql';

export function createApollo(injector: Injector) {
  const httpLink = injector.get(HttpLink);
  const link = httpLink.create({
    uri,
  });

  const error = onError(({ graphQLErrors, networkError }) => {
    console.error({ graphQLErrors, networkError });
    const toastrService = injector.get(ToastrService);
    toastrService.error('Обратитесь к администратору!', 'Критическая ошибка!');
  });

  return {
    link: error.concat(link),
    cache: new InMemoryCache({
      addTypename: true,
      resultCaching: true,
      typePolicies,
    }),
    connectToDevTools: true,
    defaultOptions: {
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
      mutate: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
      },
    },
  };
}

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [Injector],
    },
  ],
})
export class GraphqlModule {}
