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

/** Тип баланса */
export enum EmexTypeBalance {
  /** Оплата с баланса Emex */
  Emex = 'EMEX',
  /** Оплата картой при получении */
  None = 'NONE'
}

/** Тип оплаты */
export enum EmexTypePayment {
  /** Полная оплата картой при получении */
  FullCashless = 'FULL_CASHLESS',
  /** Предоплата */
  Prepayment = 'PREPAYMENT'
}

/** Статус упаковочного места */
export enum PackingPlaceStatus {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Created = 'Created',
  InProcessReturn = 'InProcessReturn',
  InProcessSend = 'InProcessSend',
  Issued = 'Issued',
  Returned = 'Returned',
  Sent = 'Sent'
}

export enum TypeOrder {
  Emex = 'Emex'
}

export type GetEmexProductsForPackingPlaceQueryVariables = Exact<{
  packingPlaceId: Scalars['ID'];
}>;


export type GetEmexProductsForPackingPlaceQuery = { __typename?: 'Query', emexProducts?: { __typename?: 'EmexProductCollectionSegment', items?: Array<{ __typename?: 'EmexProduct', id: string, orderId: string, barcode?: string | null | undefined, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, order: { __typename?: 'EmexOrder', id: string, globalId: any, externalId: string, customer: { __typename?: 'EmexCustomer', externalId: string, name: string, phone: string, email?: string | null | undefined } } }> | null | undefined } | null | undefined };

export type GetPackingPlaceByIdQueryVariables = Exact<{
  packingPlaceId: Scalars['ID'];
}>;


export type GetPackingPlaceByIdQuery = { __typename?: 'Query', packingPlaceById: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, typeOrder: TypeOrder, customerId?: string | null | undefined, courierId?: string | null | undefined, sizeId?: string | null | undefined, lastMileId?: string | null | undefined, isLocked: boolean, customer?: { __typename?: 'EmexCustomer', id: string, name: string, externalId: string, phone: string, email?: string | null | undefined } | null | undefined, courier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, lastMile?: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string } | null | undefined } };

export type GetPackingPlaceChangesHistoryQueryVariables = Exact<{
  packingPlaceId: Scalars['ID'];
}>;


export type GetPackingPlaceChangesHistoryQuery = { __typename?: 'Query', packingPlaceById: { __typename?: 'PackingPlace', changesHistory: Array<{ __typename?: 'PackingPlaceStatusChangeHistory', status: PackingPlaceStatus, creationTime?: any | null | undefined }> } };

export type PackingPlaceDetailFragment = { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, typeOrder: TypeOrder, customerId?: string | null | undefined, courierId?: string | null | undefined, sizeId?: string | null | undefined, lastMileId?: string | null | undefined, isLocked: boolean, customer?: { __typename?: 'EmexCustomer', id: string, name: string, externalId: string, phone: string, email?: string | null | undefined } | null | undefined, courier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, lastMile?: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string } | null | undefined };

export const PackingPlaceDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PackingPlaceDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"typeOrder"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courierId"}},{"kind":"Field","name":{"kind":"Name","value":"courier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sizeId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastMileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastMile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}}]}}]} as unknown as DocumentNode<PackingPlaceDetailFragment, unknown>;
export const GetEmexProductsForPackingPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmexProductsForPackingPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"packingPlaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"packingPlaceId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"packingPlaceId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"orderId"}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"globalId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"typeBalance"}},{"kind":"Field","name":{"kind":"Name","value":"typePayment"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"vendorCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sum"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"vat"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturerCountry"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturerCountryCode"}},{"kind":"Field","name":{"kind":"Name","value":"marking"}},{"kind":"Field","name":{"kind":"Name","value":"gtd"}}]}}]}}]}}]} as unknown as DocumentNode<GetEmexProductsForPackingPlaceQuery, GetEmexProductsForPackingPlaceQueryVariables>;
export const GetPackingPlaceByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPackingPlaceById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"packingPlaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlaceById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"packingPlaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PackingPlaceDetail"}}]}}]}},...PackingPlaceDetailFragmentDoc.definitions]} as unknown as DocumentNode<GetPackingPlaceByIdQuery, GetPackingPlaceByIdQueryVariables>;
export const GetPackingPlaceChangesHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPackingPlaceChangesHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"packingPlaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlaceById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"packingPlaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changesHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}}]}}]}}]}}]} as unknown as DocumentNode<GetPackingPlaceChangesHistoryQuery, GetPackingPlaceChangesHistoryQueryVariables>;