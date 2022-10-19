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

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableNullableOfGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type CreatePackingPlaceInput = {
  /**
   * Required
   * Max Length: 255
   */
  barcode: Scalars['String'];
  courierId?: InputMaybe<Scalars['ID']>;
  lastMileId?: InputMaybe<Scalars['ID']>;
  sizeId?: InputMaybe<Scalars['ID']>;
  /** Required */
  typeOrder: TypeOrder;
};

export type DeletePackingPlaceInput = {
  id: Scalars['ID'];
};

export type ExtraPropertyDictionaryFilterInput = {
  and?: InputMaybe<Array<ExtraPropertyDictionaryFilterInput>>;
  comparer?: InputMaybe<IEqualityComparerOfStringFilterInput>;
  count?: InputMaybe<ComparableInt32OperationFilterInput>;
  keys?: InputMaybe<ListStringOperationFilterInput>;
  or?: InputMaybe<Array<ExtraPropertyDictionaryFilterInput>>;
  values?: InputMaybe<ListFilterInputTypeOfObjectFilterInput>;
};

export type IEqualityComparerOfStringFilterInput = {
  and?: InputMaybe<Array<IEqualityComparerOfStringFilterInput>>;
  or?: InputMaybe<Array<IEqualityComparerOfStringFilterInput>>;
};

export type IdOperationFilterInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ListFilterInputTypeOfObjectFilterInput = {
  all?: InputMaybe<ObjectFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ObjectFilterInput>;
  some?: InputMaybe<ObjectFilterInput>;
};

export type ListFilterInputTypeOfPackingPlaceStatusChangeHistoryFilterInput = {
  all?: InputMaybe<PackingPlaceStatusChangeHistoryFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<PackingPlaceStatusChangeHistoryFilterInput>;
  some?: InputMaybe<PackingPlaceStatusChangeHistoryFilterInput>;
};

export type ListStringOperationFilterInput = {
  all?: InputMaybe<StringOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<StringOperationFilterInput>;
  some?: InputMaybe<StringOperationFilterInput>;
};

export type ObjectFilterInput = {
  and?: InputMaybe<Array<ObjectFilterInput>>;
  or?: InputMaybe<Array<ObjectFilterInput>>;
};

export type PackingPlaceFilterInput = {
  and?: InputMaybe<Array<PackingPlaceFilterInput>>;
  /** Штрих код */
  barcode?: InputMaybe<StringOperationFilterInput>;
  /** История изменения статуса */
  changesHistory?: InputMaybe<ListFilterInputTypeOfPackingPlaceStatusChangeHistoryFilterInput>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  courierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  customerId?: InputMaybe<IdOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  extraProperties?: InputMaybe<ExtraPropertyDictionaryFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  /** Заблокировано от изменений */
  isLocked?: InputMaybe<BooleanOperationFilterInput>;
  lastMileId?: InputMaybe<IdOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  or?: InputMaybe<Array<PackingPlaceFilterInput>>;
  returnRequestId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  shipmentRequestId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  sizeId?: InputMaybe<IdOperationFilterInput>;
  /** Статус упаковочного места */
  status?: InputMaybe<PackingPlaceStatusOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  typeOrder?: InputMaybe<TypeOrderOperationFilterInput>;
};

export type PackingPlaceSortInput = {
  /** Штрих код */
  barcode?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  contractorId?: InputMaybe<SortEnumType>;
  courierId?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  customerId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  /** Заблокировано от изменений */
  isLocked?: InputMaybe<SortEnumType>;
  lastMileId?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  returnRequestId?: InputMaybe<SortEnumType>;
  shipmentRequestId?: InputMaybe<SortEnumType>;
  sizeId?: InputMaybe<SortEnumType>;
  /** Статус упаковочного места */
  status?: InputMaybe<PackingPlaceStatusSortInput>;
  tenantId?: InputMaybe<SortEnumType>;
  typeOrder?: InputMaybe<TypeOrderSortInput>;
};

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

/** История изменения статуса */
export type PackingPlaceStatusChangeHistoryFilterInput = {
  and?: InputMaybe<Array<PackingPlaceStatusChangeHistoryFilterInput>>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  or?: InputMaybe<Array<PackingPlaceStatusChangeHistoryFilterInput>>;
  /** Статус */
  status?: InputMaybe<PackingPlaceStatusOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

export type PackingPlaceStatusOperationFilterInput = {
  eq?: InputMaybe<PackingPlaceStatus>;
  in?: InputMaybe<Array<InputMaybe<PackingPlaceStatus>>>;
  neq?: InputMaybe<PackingPlaceStatus>;
  nin?: InputMaybe<Array<InputMaybe<PackingPlaceStatus>>>;
};

/** Статус упаковочного места */
export type PackingPlaceStatusSortInput = {
  name?: InputMaybe<SortEnumType>;
  value?: InputMaybe<SortEnumType>;
};

export type SendPackingPlaceInput = {
  id: Scalars['ID'];
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum TypeOrder {
  Emex = 'Emex'
}

export type TypeOrderOperationFilterInput = {
  eq?: InputMaybe<TypeOrder>;
  in?: InputMaybe<Array<InputMaybe<TypeOrder>>>;
  neq?: InputMaybe<TypeOrder>;
  nin?: InputMaybe<Array<InputMaybe<TypeOrder>>>;
};

export type TypeOrderSortInput = {
  name?: InputMaybe<SortEnumType>;
  value?: InputMaybe<SortEnumType>;
};

export type UpdatePackingPlaceInput = {
  /**
   * Required
   * Max Length: 255
   */
  barcode: Scalars['String'];
  courierId?: InputMaybe<Scalars['ID']>;
  /** Required */
  id: Scalars['ID'];
  lastMileId?: InputMaybe<Scalars['ID']>;
  sizeId?: InputMaybe<Scalars['ID']>;
};

export type CreatePackingPlaceMutationVariables = Exact<{
  input: CreatePackingPlaceInput;
}>;


export type CreatePackingPlaceMutation = { __typename?: 'Mutation', createPackingPlace: { __typename?: 'CreatePackingPlacePayload', packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, typeOrder: TypeOrder, customerId?: string | null | undefined, courierId?: string | null | undefined, sizeId?: string | null | undefined, lastMileId?: string | null | undefined, isLocked: boolean, customer?: { __typename?: 'EmexCustomer', id: string, name: string, externalId: string, phone: string, email?: string | null | undefined } | null | undefined, courier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, lastMile?: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceBarcodeAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeletePackingPlaceMutationVariables = Exact<{
  input: DeletePackingPlaceInput;
}>;


export type DeletePackingPlaceMutation = { __typename?: 'Mutation', deletePackingPlace: { __typename?: 'DeletePackingPlacePayload', packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, typeOrder: TypeOrder, customerId?: string | null | undefined, courierId?: string | null | undefined, sizeId?: string | null | undefined, lastMileId?: string | null | undefined, isLocked: boolean, customer?: { __typename?: 'EmexCustomer', id: string, name: string, externalId: string, phone: string, email?: string | null | undefined } | null | undefined, courier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, lastMile?: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceLockedError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetDataForCreatePackingPlaceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataForCreatePackingPlaceQuery = { __typename?: 'Query', sizes?: { __typename?: 'SizeCollectionSegment', items?: Array<{ __typename?: 'Size', id: string, name: string }> | null | undefined } | null | undefined };

export type GetDataForUpdatePackingPlaceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataForUpdatePackingPlaceQuery = { __typename?: 'Query', sizes?: { __typename?: 'SizeCollectionSegment', items?: Array<{ __typename?: 'Size', id: string, name: string }> | null | undefined } | null | undefined };

export type GetPackingPlaceQueryVariables = Exact<{
  where?: InputMaybe<PackingPlaceFilterInput>;
}>;


export type GetPackingPlaceQuery = { __typename?: 'Query', packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, typeOrder: TypeOrder, customerId?: string | null | undefined, courierId?: string | null | undefined, sizeId?: string | null | undefined, lastMileId?: string | null | undefined, isLocked: boolean, customer?: { __typename?: 'EmexCustomer', id: string, name: string, externalId: string, phone: string, email?: string | null | undefined } | null | undefined, courier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, lastMile?: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string } | null | undefined } | null | undefined };

export type GetPackingPlacesQueryVariables = Exact<{
  where?: InputMaybe<PackingPlaceFilterInput>;
  order?: InputMaybe<Array<PackingPlaceSortInput> | PackingPlaceSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetPackingPlacesQuery = { __typename?: 'Query', packingPlaces?: { __typename?: 'PackingPlaceCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, typeOrder: TypeOrder, customerId?: string | null | undefined, courierId?: string | null | undefined, sizeId?: string | null | undefined, lastMileId?: string | null | undefined, isLocked: boolean, customer?: { __typename?: 'EmexCustomer', id: string, name: string, externalId: string, phone: string, email?: string | null | undefined } | null | undefined, courier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, lastMile?: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string } | null | undefined }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type PackingPlaceIsBarcodeUniqueQueryVariables = Exact<{
  barcode: Scalars['String'];
}>;


export type PackingPlaceIsBarcodeUniqueQuery = { __typename?: 'Query', packingPlacesAny: boolean };

export type PackingPlaceFragment = { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, typeOrder: TypeOrder, customerId?: string | null | undefined, courierId?: string | null | undefined, sizeId?: string | null | undefined, lastMileId?: string | null | undefined, isLocked: boolean, customer?: { __typename?: 'EmexCustomer', id: string, name: string, externalId: string, phone: string, email?: string | null | undefined } | null | undefined, courier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, lastMile?: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string } | null | undefined };

export type SendPackingPlaceMutationVariables = Exact<{
  input: SendPackingPlaceInput;
}>;


export type SendPackingPlaceMutation = { __typename?: 'Mutation', sendPackingPlace: { __typename?: 'SendPackingPlacePayload', packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, typeOrder: TypeOrder, customerId?: string | null | undefined, courierId?: string | null | undefined, sizeId?: string | null | undefined, lastMileId?: string | null | undefined, isLocked: boolean, customer?: { __typename?: 'EmexCustomer', id: string, name: string, externalId: string, phone: string, email?: string | null | undefined } | null | undefined, courier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, lastMile?: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceIncorrectStatusError', code?: string | null | undefined, message: string, details?: string | null | undefined, current: PackingPlaceStatus, next: PackingPlaceStatus } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type UpdatePackingPlaceMutationVariables = Exact<{
  input: UpdatePackingPlaceInput;
}>;


export type UpdatePackingPlaceMutation = { __typename?: 'Mutation', updatePackingPlace: { __typename?: 'UpdatePackingPlacePayload', packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, typeOrder: TypeOrder, customerId?: string | null | undefined, courierId?: string | null | undefined, sizeId?: string | null | undefined, lastMileId?: string | null | undefined, isLocked: boolean, customer?: { __typename?: 'EmexCustomer', id: string, name: string, externalId: string, phone: string, email?: string | null | undefined } | null | undefined, courier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined } | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined, lastMile?: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceBarcodeAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'PackingPlaceEmployeeIsNotCourierError', message: string } | { __typename?: 'PackingPlaceLockedError', message: string } | { __typename?: 'PackingPlaceShipmentRequestAssignedError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const PackingPlaceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PackingPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"typeOrder"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courierId"}},{"kind":"Field","name":{"kind":"Name","value":"courier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sizeId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastMileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastMile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}}]}}]} as unknown as DocumentNode<PackingPlaceFragment, unknown>;
export const CreatePackingPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePackingPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePackingPlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPackingPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PackingPlace"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlaceBarcodeAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PackingPlaceFragmentDoc.definitions]} as unknown as DocumentNode<CreatePackingPlaceMutation, CreatePackingPlaceMutationVariables>;
export const DeletePackingPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePackingPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeletePackingPlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePackingPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PackingPlace"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PackingPlaceFragmentDoc.definitions]} as unknown as DocumentNode<DeletePackingPlaceMutation, DeletePackingPlaceMutationVariables>;
export const GetDataForCreatePackingPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForCreatePackingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetDataForCreatePackingPlaceQuery, GetDataForCreatePackingPlaceQueryVariables>;
export const GetDataForUpdatePackingPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForUpdatePackingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetDataForUpdatePackingPlaceQuery, GetDataForUpdatePackingPlaceQueryVariables>;
export const GetPackingPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPackingPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlaceFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PackingPlace"}}]}}]}},...PackingPlaceFragmentDoc.definitions]} as unknown as DocumentNode<GetPackingPlaceQuery, GetPackingPlaceQueryVariables>;
export const GetPackingPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPackingPlaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlaceFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlaceSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlaces"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PackingPlace"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...PackingPlaceFragmentDoc.definitions]} as unknown as DocumentNode<GetPackingPlacesQuery, GetPackingPlacesQueryVariables>;
export const PackingPlaceIsBarcodeUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PackingPlaceIsBarcodeUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"barcode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlacesAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"barcode"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"barcode"}}}]}}]}}]}]}}]} as unknown as DocumentNode<PackingPlaceIsBarcodeUniqueQuery, PackingPlaceIsBarcodeUniqueQueryVariables>;
export const SendPackingPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendPackingPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendPackingPlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendPackingPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PackingPlace"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlaceIncorrectStatusError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PackingPlaceFragmentDoc.definitions]} as unknown as DocumentNode<SendPackingPlaceMutation, SendPackingPlaceMutationVariables>;
export const UpdatePackingPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePackingPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePackingPlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePackingPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PackingPlace"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlaceBarcodeAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PackingPlaceFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePackingPlaceMutation, UpdatePackingPlaceMutationVariables>;