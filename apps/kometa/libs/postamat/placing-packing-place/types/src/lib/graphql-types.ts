import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  UUID: any;
};

export enum CellStatus {
  /** Занята товаром */
  Busy = 'BUSY',
  /** Свободна */
  Free = 'FREE',
  /** Зарезервирована */
  Reserved = 'RESERVED',
  /** Зарезервирована для возврата */
  ReservedForReturn = 'RESERVED_FOR_RETURN',
  /** Вернули товар */
  Returned = 'RETURNED'
}

export type PutPackingPlaceInPostamatInput = {
  cellId: Scalars['ID'];
  packingPlaceIds: Array<Scalars['ID']>;
  postamatId: Scalars['ID'];
};

export enum TypeCell {
  Cell = 'CELL',
  Service = 'SERVICE',
  Virtual = 'VIRTUAL'
}

export type GetDataForPlacingPackingPlaceQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetDataForPlacingPackingPlaceQuery = { __typename?: 'Query', postamatById: { __typename?: 'Postamat', cells: Array<{ __typename?: 'Cell', id: string, type: TypeCell, status: CellStatus, name: string, barcode: string, sizeId?: string | null | undefined, lockId?: string | null | undefined, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, places: Array<{ __typename?: 'PlaceInCell', packingPlaceId: string, packingPlace: { __typename?: 'PackingPlace', id: string, barcode: string, customerId?: string | null | undefined, customer?: { __typename?: 'EmexCustomer', id: string, externalId: string } | null | undefined } }> }> }, packingPlaceByLastMileId: Array<{ __typename?: 'PackingPlace', id: string, barcode: string, customerId?: string | null | undefined, sizeId?: string | null | undefined, customer?: { __typename?: 'EmexCustomer', id: string, externalId: string } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined }> };

export type PackingPlaceForPlacementFragment = { __typename?: 'PackingPlace', id: string, barcode: string, customerId?: string | null | undefined, sizeId?: string | null | undefined, customer?: { __typename?: 'EmexCustomer', id: string, externalId: string } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined };

export type PutPackingPlaceInPostamatMutationVariables = Exact<{
  input: PutPackingPlaceInPostamatInput;
}>;


export type PutPackingPlaceInPostamatMutation = { __typename?: 'Mutation', putPackingPlaceInPostamat: { __typename?: 'PutPackingPlaceInPostamatPayload', postamat?: { __typename?: 'Postamat', id: string } | null | undefined, errors?: Array<{ __typename: 'EntityNotFoundError', message: string } | { __typename: 'ValidationError', message: string }> | null | undefined } };

export const PackingPlaceForPlacementFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PackingPlaceForPlacement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sizeId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PackingPlaceForPlacementFragment, unknown>;
export const GetDataForPlacingPackingPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForPlacingPackingPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cells"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"sizeId"}},{"kind":"Field","name":{"kind":"Name","value":"lockId"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlaceId"}},{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"packingPlaceByLastMileId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lastMileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"Sent"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PackingPlaceForPlacement"}}]}}]}},...PackingPlaceForPlacementFragmentDoc.definitions]} as unknown as DocumentNode<GetDataForPlacingPackingPlaceQuery, GetDataForPlacingPackingPlaceQueryVariables>;
export const PutPackingPlaceInPostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PutPackingPlaceInPostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PutPackingPlaceInPostamatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"putPackingPlaceInPostamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]} as unknown as DocumentNode<PutPackingPlaceInPostamatMutation, PutPackingPlaceInPostamatMutationVariables>;