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

export type ComparableInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<Scalars['Long']>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<Scalars['Long']>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
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

export type CreateEmexAccountInput = {
  /**
   * Наименование
   * Required
   * Max Length: 100
   */
  name: Scalars['String'];
  /**
   * Required
   * Max Length: 255
   */
  password: Scalars['String'];
  /**
   * Required
   * Range from 0 to 1,7976931348623157E+308
   */
  userId: Scalars['Long'];
};

export type DeleteEmexAccountInput = {
  id: Scalars['ID'];
};

/** Emex аккаунт */
export type EmexAccountFilterInput = {
  and?: InputMaybe<Array<EmexAccountFilterInput>>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  extraProperties?: InputMaybe<ExtraPropertyDictionaryFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Наименование */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<EmexAccountFilterInput>>;
  /** Пароль оптовика */
  password?: InputMaybe<StringOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Идентификатор оптовика в системе */
  userId?: InputMaybe<ComparableInt64OperationFilterInput>;
};

/** Emex аккаунт */
export type EmexAccountSortInput = {
  concurrencyStamp?: InputMaybe<SortEnumType>;
  contractorId?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  /** Наименование */
  name?: InputMaybe<SortEnumType>;
  /** Пароль оптовика */
  password?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
  /** Идентификатор оптовика в системе */
  userId?: InputMaybe<SortEnumType>;
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

export type UpdateEmexAccountInput = {
  /** Required */
  id: Scalars['ID'];
  /**
   * Наименование
   * Required
   * Max Length: 100
   */
  name: Scalars['String'];
  /**
   * Required
   * Range from 0 to 1,7976931348623157E+308
   */
  userId: Scalars['Long'];
};

export type CreateEmexAccountMutationVariables = Exact<{
  input: CreateEmexAccountInput;
}>;


export type CreateEmexAccountMutation = { __typename?: 'Mutation', createEmexAccount: { __typename?: 'CreateEmexAccountPayload', emexAccount?: { __typename?: 'EmexAccount', id: string, userId: any, name: string, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | null | undefined, errors?: Array<{ __typename?: 'EmexAccountNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'EmexAccountUserIdAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteEmexAccountMutationVariables = Exact<{
  input: DeleteEmexAccountInput;
}>;


export type DeleteEmexAccountMutation = { __typename?: 'Mutation', deleteEmexAccount: { __typename?: 'DeleteEmexAccountPayload', emexAccount?: { __typename?: 'EmexAccount', id: string, userId: any, name: string, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type EmexAccountIsNameUniqueQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type EmexAccountIsNameUniqueQuery = { __typename?: 'Query', emexAccountsAny: boolean };

export type EmexAccountFragment = { __typename?: 'EmexAccount', id: string, userId: any, name: string, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } };

export type GetEmexAccountQueryVariables = Exact<{
  where?: InputMaybe<EmexAccountFilterInput>;
}>;


export type GetEmexAccountQuery = { __typename?: 'Query', emexAccount?: { __typename?: 'EmexAccount', id: string, userId: any, name: string, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | null | undefined };

export type GetEmexAccountsQueryVariables = Exact<{
  where?: InputMaybe<EmexAccountFilterInput>;
  order?: InputMaybe<Array<EmexAccountSortInput> | EmexAccountSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetEmexAccountsQuery = { __typename?: 'Query', emexAccounts?: { __typename?: 'EmexAccountCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'EmexAccount', id: string, userId: any, name: string, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type UpdateEmexAccountMutationVariables = Exact<{
  input: UpdateEmexAccountInput;
}>;


export type UpdateEmexAccountMutation = { __typename?: 'Mutation', updateEmexAccount: { __typename?: 'UpdateEmexAccountPayload', emexAccount?: { __typename?: 'EmexAccount', id: string, userId: any, name: string, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | null | undefined, errors?: Array<{ __typename?: 'EmexAccountNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'EmexAccountUserIdAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const EmexAccountFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmexAccount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<EmexAccountFragment, unknown>;
export const CreateEmexAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmexAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEmexAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmexAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexAccount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexAccountNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexAccountUserIdAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...EmexAccountFragmentDoc.definitions]} as unknown as DocumentNode<CreateEmexAccountMutation, CreateEmexAccountMutationVariables>;
export const DeleteEmexAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEmexAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteEmexAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEmexAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexAccount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...EmexAccountFragmentDoc.definitions]} as unknown as DocumentNode<DeleteEmexAccountMutation, DeleteEmexAccountMutationVariables>;
export const EmexAccountIsNameUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmexAccountIsNameUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexAccountsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}]}]}}]} as unknown as DocumentNode<EmexAccountIsNameUniqueQuery, EmexAccountIsNameUniqueQueryVariables>;
export const GetEmexAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmexAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EmexAccountFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexAccount"}}]}}]}},...EmexAccountFragmentDoc.definitions]} as unknown as DocumentNode<GetEmexAccountQuery, GetEmexAccountQueryVariables>;
export const GetEmexAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmexAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EmexAccountFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmexAccountSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexAccounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexAccount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...EmexAccountFragmentDoc.definitions]} as unknown as DocumentNode<GetEmexAccountsQuery, GetEmexAccountsQueryVariables>;
export const UpdateEmexAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEmexAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEmexAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEmexAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexAccount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexAccountNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexAccountUserIdAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...EmexAccountFragmentDoc.definitions]} as unknown as DocumentNode<UpdateEmexAccountMutation, UpdateEmexAccountMutationVariables>;