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

export type CancelReturnRequestInput = {
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

export type CreateReturnRequestInput = {
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
  packingPlaceId: Scalars['ID'];
};

export type DeleteReturnRequestInput = {
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

export type ListFilterInputTypeOfReturnRequestStatusChangeHistoryFilterInput = {
  all?: InputMaybe<ReturnRequestStatusChangeHistoryFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ReturnRequestStatusChangeHistoryFilterInput>;
  some?: InputMaybe<ReturnRequestStatusChangeHistoryFilterInput>;
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

export type ReturnRequestFilterInput = {
  and?: InputMaybe<Array<ReturnRequestFilterInput>>;
  atCourierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  atLastMileId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Причина */
  cause?: InputMaybe<StringOperationFilterInput>;
  changesHistory?: InputMaybe<ListFilterInputTypeOfReturnRequestStatusChangeHistoryFilterInput>;
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
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  or?: InputMaybe<Array<ReturnRequestFilterInput>>;
  /** Статус заявки */
  status?: InputMaybe<ReturnRequestStatusFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

export type ReturnRequestSortInput = {
  atCourierId?: InputMaybe<SortEnumType>;
  atLastMileId?: InputMaybe<SortEnumType>;
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
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  /** Статус заявки */
  status?: InputMaybe<ReturnRequestStatusSortInput>;
  tenantId?: InputMaybe<SortEnumType>;
};

/** Статус заявки на возврат упаковочного места */
export enum ReturnRequestStatus {
  AtCourier = 'AtCourier',
  Canceled = 'Canceled',
  InLastMile = 'InLastMile',
  Returned = 'Returned'
}

export type ReturnRequestStatusChangeHistoryFilterInput = {
  and?: InputMaybe<Array<ReturnRequestStatusChangeHistoryFilterInput>>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  or?: InputMaybe<Array<ReturnRequestStatusChangeHistoryFilterInput>>;
  /** Статус */
  status?: InputMaybe<ReturnRequestStatusOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

/** Статус заявки на возврат упаковочного места */
export type ReturnRequestStatusFilterInput = {
  and?: InputMaybe<Array<ReturnRequestStatusFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ReturnRequestStatusFilterInput>>;
  value?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type ReturnRequestStatusOperationFilterInput = {
  eq?: InputMaybe<ReturnRequestStatus>;
  in?: InputMaybe<Array<InputMaybe<ReturnRequestStatus>>>;
  neq?: InputMaybe<ReturnRequestStatus>;
  nin?: InputMaybe<Array<InputMaybe<ReturnRequestStatus>>>;
};

/** Статус заявки на возврат упаковочного места */
export type ReturnRequestStatusSortInput = {
  name?: InputMaybe<SortEnumType>;
  value?: InputMaybe<SortEnumType>;
};

export type ReturnReturnRequestInput = {
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

export type UpdateReturnRequestInput = {
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

export type CancelReturnRequestMutationVariables = Exact<{
  input: CancelReturnRequestInput;
}>;


export type CancelReturnRequestMutation = { __typename?: 'Mutation', cancelReturnRequest: { __typename?: 'CancelReturnRequestPayload', returnRequest?: { __typename?: 'ReturnRequest', id: string, code: string, status: ReturnRequestStatus, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, atCourierId?: string | null | undefined, atLastMileId?: string | null | undefined, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, atCourier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string } | null | undefined, atLastMile?: { __typename?: 'Postamat', id: string, name: string, externalId: string, address: string } | null | undefined, changesHistory: Array<{ __typename?: 'ReturnRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ReturnRequestStatus }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceIncorrectStatusError', message: string } | { __typename?: 'ReturnRequestIncorrectStatusError', code?: string | null | undefined, message: string, details?: string | null | undefined, current: ReturnRequestStatus, next: ReturnRequestStatus } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type CreateReturnRequestMutationVariables = Exact<{
  input: CreateReturnRequestInput;
}>;


export type CreateReturnRequestMutation = { __typename?: 'Mutation', createReturnRequest: { __typename?: 'CreateReturnRequestPayload', returnRequest?: { __typename?: 'ReturnRequest', id: string, code: string, status: ReturnRequestStatus, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, atCourierId?: string | null | undefined, atLastMileId?: string | null | undefined, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, atCourier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string } | null | undefined, atLastMile?: { __typename?: 'Postamat', id: string, name: string, externalId: string, address: string } | null | undefined, changesHistory: Array<{ __typename?: 'ReturnRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ReturnRequestStatus }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ReturnRequestCodeAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ReturnRequestLocationNotSpecifiedError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteReturnRequestMutationVariables = Exact<{
  input: DeleteReturnRequestInput;
}>;


export type DeleteReturnRequestMutation = { __typename?: 'Mutation', deleteReturnRequest: { __typename?: 'DeleteReturnRequestPayload', returnRequest?: { __typename?: 'ReturnRequest', id: string, code: string, status: ReturnRequestStatus, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, atCourierId?: string | null | undefined, atLastMileId?: string | null | undefined, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, atCourier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string } | null | undefined, atLastMile?: { __typename?: 'Postamat', id: string, name: string, externalId: string, address: string } | null | undefined, changesHistory: Array<{ __typename?: 'ReturnRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ReturnRequestStatus }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ReturnRequestLockedError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetReturnRequestQueryVariables = Exact<{
  where?: InputMaybe<ReturnRequestFilterInput>;
}>;


export type GetReturnRequestQuery = { __typename?: 'Query', returnRequest?: { __typename?: 'ReturnRequest', id: string, code: string, status: ReturnRequestStatus, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, atCourierId?: string | null | undefined, atLastMileId?: string | null | undefined, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, atCourier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string } | null | undefined, atLastMile?: { __typename?: 'Postamat', id: string, name: string, externalId: string, address: string } | null | undefined, changesHistory: Array<{ __typename?: 'ReturnRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ReturnRequestStatus }> } | null | undefined };

export type GetReturnRequestsQueryVariables = Exact<{
  where?: InputMaybe<ReturnRequestFilterInput>;
  order?: InputMaybe<Array<ReturnRequestSortInput> | ReturnRequestSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetReturnRequestsQuery = { __typename?: 'Query', returnRequests?: { __typename?: 'ReturnRequestCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'ReturnRequest', id: string, code: string, status: ReturnRequestStatus, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, atCourierId?: string | null | undefined, atLastMileId?: string | null | undefined, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, atCourier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string } | null | undefined, atLastMile?: { __typename?: 'Postamat', id: string, name: string, externalId: string, address: string } | null | undefined, changesHistory: Array<{ __typename?: 'ReturnRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ReturnRequestStatus }> }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type ReturnRequestIsCodeUniqueQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type ReturnRequestIsCodeUniqueQuery = { __typename?: 'Query', returnRequestsAny: boolean };

export type ReturnRequestFragment = { __typename?: 'ReturnRequest', id: string, code: string, status: ReturnRequestStatus, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, atCourierId?: string | null | undefined, atLastMileId?: string | null | undefined, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, atCourier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string } | null | undefined, atLastMile?: { __typename?: 'Postamat', id: string, name: string, externalId: string, address: string } | null | undefined, changesHistory: Array<{ __typename?: 'ReturnRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ReturnRequestStatus }> };

export type ReturnReturnRequestMutationVariables = Exact<{
  input: ReturnReturnRequestInput;
}>;


export type ReturnReturnRequestMutation = { __typename?: 'Mutation', returnReturnRequest: { __typename?: 'ReturnReturnRequestPayload', returnRequest?: { __typename?: 'ReturnRequest', id: string, code: string, status: ReturnRequestStatus, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, atCourierId?: string | null | undefined, atLastMileId?: string | null | undefined, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, atCourier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string } | null | undefined, atLastMile?: { __typename?: 'Postamat', id: string, name: string, externalId: string, address: string } | null | undefined, changesHistory: Array<{ __typename?: 'ReturnRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ReturnRequestStatus }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceIncorrectStatusError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ReturnRequestIncorrectStatusError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type UpdateReturnRequestMutationVariables = Exact<{
  input: UpdateReturnRequestInput;
}>;


export type UpdateReturnRequestMutation = { __typename?: 'Mutation', updateReturnRequest: { __typename?: 'UpdateReturnRequestPayload', returnRequest?: { __typename?: 'ReturnRequest', id: string, code: string, status: ReturnRequestStatus, cause?: string | null | undefined, comment?: string | null | undefined, courierId: string, atCourierId?: string | null | undefined, atLastMileId?: string | null | undefined, courier: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string }, atCourier?: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string } | null | undefined, atLastMile?: { __typename?: 'Postamat', id: string, name: string, externalId: string, address: string } | null | undefined, changesHistory: Array<{ __typename?: 'ReturnRequestStatusChangeHistory', creationTime?: any | null | undefined, status: ReturnRequestStatus }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ReturnRequestCodeAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ReturnRequestLockedError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const ReturnRequestFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReturnRequest"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"cause"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"courierId"}},{"kind":"Field","name":{"kind":"Name","value":"courier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"atCourierId"}},{"kind":"Field","name":{"kind":"Name","value":"atCourier"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"atLastMileId"}},{"kind":"Field","name":{"kind":"Name","value":"atLastMile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"changesHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ReturnRequestFragment, unknown>;
export const CancelReturnRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelReturnRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CancelReturnRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelReturnRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReturnRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequestIncorrectStatusError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...ReturnRequestFragmentDoc.definitions]} as unknown as DocumentNode<CancelReturnRequestMutation, CancelReturnRequestMutationVariables>;
export const CreateReturnRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReturnRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateReturnRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReturnRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReturnRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequestCodeAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...ReturnRequestFragmentDoc.definitions]} as unknown as DocumentNode<CreateReturnRequestMutation, CreateReturnRequestMutationVariables>;
export const DeleteReturnRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteReturnRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteReturnRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteReturnRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReturnRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequestLockedError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...ReturnRequestFragmentDoc.definitions]} as unknown as DocumentNode<DeleteReturnRequestMutation, DeleteReturnRequestMutationVariables>;
export const GetReturnRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReturnRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequestFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReturnRequest"}}]}}]}},...ReturnRequestFragmentDoc.definitions]} as unknown as DocumentNode<GetReturnRequestQuery, GetReturnRequestQueryVariables>;
export const GetReturnRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReturnRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequestFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequestSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReturnRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...ReturnRequestFragmentDoc.definitions]} as unknown as DocumentNode<GetReturnRequestsQuery, GetReturnRequestsQueryVariables>;
export const ReturnRequestIsCodeUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ReturnRequestIsCodeUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnRequestsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}}]}}]}]}}]} as unknown as DocumentNode<ReturnRequestIsCodeUniqueQuery, ReturnRequestIsCodeUniqueQueryVariables>;
export const ReturnReturnRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ReturnReturnRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnReturnRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnReturnRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReturnRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequestIncorrectStatusError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlaceIncorrectStatusError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...ReturnRequestFragmentDoc.definitions]} as unknown as DocumentNode<ReturnReturnRequestMutation, ReturnReturnRequestMutationVariables>;
export const UpdateReturnRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateReturnRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateReturnRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateReturnRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReturnRequest"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequestCodeAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReturnRequestLockedError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...ReturnRequestFragmentDoc.definitions]} as unknown as DocumentNode<UpdateReturnRequestMutation, UpdateReturnRequestMutationVariables>;