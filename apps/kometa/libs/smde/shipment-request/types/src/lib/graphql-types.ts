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

export type CancelShipmentRequestInput = {
  id: Scalars['ID'];
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

export type CreateShipmentRequestInput = {
  /**
   * Причина
   * Max Length: 255
   */
  cause?: InputMaybe<Scalars['String']>;
  /**
   * Код
   * Required
   * Max Length: 100
   */
  code: Scalars['String'];
  /**
   * Комментарий для курьера
   * Max Length: 255
   */
  comment?: InputMaybe<Scalars['String']>;
  /** Required */
  courierId: Scalars['ID'];
  /** Required */
  lastMileId: Scalars['ID'];
  /**
   * Required
   * Min Length: 1
   */
  packingPlaceIds: Array<Scalars['ID']>;
};

export type DeleteShipmentRequestInput = {
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

export enum LastMileStatus {
  Activated = 'ACTIVATED',
  Deactivated = 'DEACTIVATED'
}

export type ListFilterInputTypeOfObjectFilterInput = {
  all?: InputMaybe<ObjectFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ObjectFilterInput>;
  some?: InputMaybe<ObjectFilterInput>;
};

export type ListFilterInputTypeOfShipmentRequestStatusChangeHistoryFilterInput = {
  all?: InputMaybe<ShipmentRequestStatusChangeHistoryFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ShipmentRequestStatusChangeHistoryFilterInput>;
  some?: InputMaybe<ShipmentRequestStatusChangeHistoryFilterInput>;
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

export type ShipmentRequestFilterInput = {
  and?: InputMaybe<Array<ShipmentRequestFilterInput>>;
  /** Причина */
  cause?: InputMaybe<StringOperationFilterInput>;
  changesHistory?: InputMaybe<ListFilterInputTypeOfShipmentRequestStatusChangeHistoryFilterInput>;
  /** Код */
  code?: InputMaybe<StringOperationFilterInput>;
  /** Комментарий для курьера */
  comment?: InputMaybe<StringOperationFilterInput>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  courierId?: InputMaybe<IdOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  extraProperties?: InputMaybe<ExtraPropertyDictionaryFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isLocked?: InputMaybe<BooleanOperationFilterInput>;
  lastMileId?: InputMaybe<IdOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentRequestFilterInput>>;
  /** Статус заявки */
  status?: InputMaybe<ShipmentRequestStatusFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

export type ShipmentRequestSortInput = {
  /** Причина */
  cause?: InputMaybe<SortEnumType>;
  /** Код */
  code?: InputMaybe<SortEnumType>;
  /** Комментарий для курьера */
  comment?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  contractorId?: InputMaybe<SortEnumType>;
  courierId?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isLocked?: InputMaybe<SortEnumType>;
  lastMileId?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  /** Статус заявки */
  status?: InputMaybe<ShipmentRequestStatusSortInput>;
  tenantId?: InputMaybe<SortEnumType>;
};

/** Статус заявки на отправку упаковочных мест в последнюю милю */
export enum ShipmentRequestStatus {
  Canceled = 'Canceled',
  Created = 'Created',
  PartiallyAccepted = 'PartiallyAccepted',
  Sent = 'Sent'
}

export type ShipmentRequestStatusChangeHistoryFilterInput = {
  and?: InputMaybe<Array<ShipmentRequestStatusChangeHistoryFilterInput>>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentRequestStatusChangeHistoryFilterInput>>;
  /** Статус */
  status?: InputMaybe<ShipmentRequestStatusOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

/** Статус заявки на отправку упаковочных мест в последнюю милю */
export type ShipmentRequestStatusFilterInput = {
  and?: InputMaybe<Array<ShipmentRequestStatusFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ShipmentRequestStatusFilterInput>>;
  value?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type ShipmentRequestStatusOperationFilterInput = {
  eq?: InputMaybe<ShipmentRequestStatus>;
  in?: InputMaybe<Array<InputMaybe<ShipmentRequestStatus>>>;
  neq?: InputMaybe<ShipmentRequestStatus>;
  nin?: InputMaybe<Array<InputMaybe<ShipmentRequestStatus>>>;
};

/** Статус заявки на отправку упаковочных мест в последнюю милю */
export type ShipmentRequestStatusSortInput = {
  name?: InputMaybe<SortEnumType>;
  value?: InputMaybe<SortEnumType>;
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

export type UpdateShipmentRequestInput = {
  /**
   * Комментарий для курьера
   * Max Length: 255
   */
  comment?: InputMaybe<Scalars['String']>;
  /** Required */
  courierId: Scalars['ID'];
  /** Required */
  id: Scalars['ID'];
};

export type CancelShipmentRequestMutationVariables = Exact<{
  input: CancelShipmentRequestInput;
}>;


export type CancelShipmentRequestMutation = { __typename?: 'Mutation', cancelShipmentRequest: { __typename?: 'CancelShipmentRequestPayload', shipmentRequest?: { __typename?: 'ShipmentRequest', id: string, status: ShipmentRequestStatus, code: string, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, lastMileId: string, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, lastMile: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string, status: LastMileStatus }, packingPlaces: Array<{ __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined }>, changesHistory: Array<{ __typename?: 'ShipmentRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ShipmentRequestStatus }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceIncorrectStatusError', message: string } | { __typename?: 'ShipmentRequestIncorrectStatusError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type CreateShipmentRequestMutationVariables = Exact<{
  input: CreateShipmentRequestInput;
}>;


export type CreateShipmentRequestMutation = { __typename?: 'Mutation', createShipmentRequest: { __typename?: 'CreateShipmentRequestPayload', shipmentRequest?: { __typename?: 'ShipmentRequest', id: string, status: ShipmentRequestStatus, code: string, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, lastMileId: string, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, lastMile: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string, status: LastMileStatus }, packingPlaces: Array<{ __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined }>, changesHistory: Array<{ __typename?: 'ShipmentRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ShipmentRequestStatus }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ShipmentRequestCodeAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteShipmentRequestMutationVariables = Exact<{
  input: DeleteShipmentRequestInput;
}>;


export type DeleteShipmentRequestMutation = { __typename?: 'Mutation', deleteShipmentRequest: { __typename?: 'DeleteShipmentRequestPayload', shipmentRequest?: { __typename?: 'ShipmentRequest', id: string, status: ShipmentRequestStatus, code: string, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, lastMileId: string, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, lastMile: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string, status: LastMileStatus }, packingPlaces: Array<{ __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined }>, changesHistory: Array<{ __typename?: 'ShipmentRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ShipmentRequestStatus }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ShipmentRequestLockedError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetShipmentRequestQueryVariables = Exact<{
  where?: InputMaybe<ShipmentRequestFilterInput>;
}>;


export type GetShipmentRequestQuery = { __typename?: 'Query', shipmentRequest?: { __typename?: 'ShipmentRequest', id: string, status: ShipmentRequestStatus, code: string, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, lastMileId: string, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, lastMile: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string, status: LastMileStatus }, packingPlaces: Array<{ __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined }>, changesHistory: Array<{ __typename?: 'ShipmentRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ShipmentRequestStatus }> } | null | undefined };

export type GetShipmentRequestsQueryVariables = Exact<{
  where?: InputMaybe<ShipmentRequestFilterInput>;
  order?: InputMaybe<Array<ShipmentRequestSortInput> | ShipmentRequestSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetShipmentRequestsQuery = { __typename?: 'Query', shipmentRequests?: { __typename?: 'ShipmentRequestCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'ShipmentRequest', id: string, status: ShipmentRequestStatus, code: string, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, lastMileId: string, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, lastMile: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string, status: LastMileStatus }, packingPlaces: Array<{ __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined }>, changesHistory: Array<{ __typename?: 'ShipmentRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ShipmentRequestStatus }> }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type ShipmentRequestIsNameUniqueQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type ShipmentRequestIsNameUniqueQuery = { __typename?: 'Query', shipmentRequestsAny: boolean };

export type ShipmentRequestFragment = { __typename?: 'ShipmentRequest', id: string, status: ShipmentRequestStatus, code: string, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, lastMileId: string, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, lastMile: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string, status: LastMileStatus }, packingPlaces: Array<{ __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined }>, changesHistory: Array<{ __typename?: 'ShipmentRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ShipmentRequestStatus }> };

export type UpdateShipmentRequestMutationVariables = Exact<{
  input: UpdateShipmentRequestInput;
}>;


export type UpdateShipmentRequestMutation = { __typename?: 'Mutation', updateShipmentRequest: { __typename?: 'UpdateShipmentRequestPayload', shipmentRequest?: { __typename?: 'ShipmentRequest', id: string, status: ShipmentRequestStatus, code: string, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, lastMileId: string, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, lastMile: { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string, status: LastMileStatus }, packingPlaces: Array<{ __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined }>, changesHistory: Array<{ __typename?: 'ShipmentRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ShipmentRequestStatus }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ShipmentRequestCodeAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ShipmentRequestLockedError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const ShipmentRequestFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShipmentRequest"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShipmentRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"cause"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"courierId"}},{"kind":"Field","name":{"kind":"Name","value":"courier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastMileId"}},{"kind":"Field","name":{"kind":"Name","value":"lastMile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"packingPlaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"sizeId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"changesHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ShipmentRequestFragment, unknown>;
export const CancelShipmentRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelShipmentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CancelShipmentRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelShipmentRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shipmentRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShipmentRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...ShipmentRequestFragmentDoc.definitions]} as unknown as DocumentNode<CancelShipmentRequestMutation, CancelShipmentRequestMutationVariables>;
export const CreateShipmentRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateShipmentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateShipmentRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createShipmentRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shipmentRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShipmentRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShipmentRequestCodeAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...ShipmentRequestFragmentDoc.definitions]} as unknown as DocumentNode<CreateShipmentRequestMutation, CreateShipmentRequestMutationVariables>;
export const DeleteShipmentRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteShipmentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteShipmentRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteShipmentRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shipmentRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShipmentRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShipmentRequestLockedError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...ShipmentRequestFragmentDoc.definitions]} as unknown as DocumentNode<DeleteShipmentRequestMutation, DeleteShipmentRequestMutationVariables>;
export const GetShipmentRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetShipmentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ShipmentRequestFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shipmentRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShipmentRequest"}}]}}]}},...ShipmentRequestFragmentDoc.definitions]} as unknown as DocumentNode<GetShipmentRequestQuery, GetShipmentRequestQueryVariables>;
export const GetShipmentRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetShipmentRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ShipmentRequestFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ShipmentRequestSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shipmentRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShipmentRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...ShipmentRequestFragmentDoc.definitions]} as unknown as DocumentNode<GetShipmentRequestsQuery, GetShipmentRequestsQueryVariables>;
export const ShipmentRequestIsNameUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShipmentRequestIsNameUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shipmentRequestsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}}]}}]}]}}]} as unknown as DocumentNode<ShipmentRequestIsNameUniqueQuery, ShipmentRequestIsNameUniqueQueryVariables>;
export const UpdateShipmentRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateShipmentRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateShipmentRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateShipmentRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shipmentRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShipmentRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShipmentRequestCodeAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ShipmentRequestLockedError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...ShipmentRequestFragmentDoc.definitions]} as unknown as DocumentNode<UpdateShipmentRequestMutation, UpdateShipmentRequestMutationVariables>;