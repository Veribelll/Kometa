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

export type AccessKeyFilterInput = {
  and?: InputMaybe<Array<AccessKeyFilterInput>>;
  /** Штрих код */
  barcode?: InputMaybe<StringOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  /** Истекает в */
  expiresDt?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  identityUserId?: InputMaybe<IdOperationFilterInput>;
  /** Временный */
  isDisposable?: InputMaybe<BooleanOperationFilterInput>;
  /** Последний вход */
  lastEntrance?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  or?: InputMaybe<Array<AccessKeyFilterInput>>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

export type AccessKeySortInput = {
  /** Штрих код */
  barcode?: InputMaybe<SortEnumType>;
  contractorId?: InputMaybe<SortEnumType>;
  /** Истекает в */
  expiresDt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  identityUserId?: InputMaybe<SortEnumType>;
  /** Временный */
  isDisposable?: InputMaybe<SortEnumType>;
  /** Последний вход */
  lastEntrance?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
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

export type CreateAccessKeyInput = {
  /**
   * Required
   * Max Length: 100
   */
  barcode: Scalars['String'];
  expiresDt?: InputMaybe<Scalars['DateTime']>;
  /** Required */
  identityUserId: Scalars['ID'];
  isDisposable: Scalars['Boolean'];
  /** Required */
  lastMileId: Scalars['ID'];
};

export type DeleteAccessKeyInput = {
  id: Scalars['ID'];
  lastMileId: Scalars['ID'];
};

export type IdOperationFilterInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
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

export type UpdateAccessKeyInput = {
  /**
   * Required
   * Max Length: 100
   */
  barcode: Scalars['String'];
  expiresDt?: InputMaybe<Scalars['DateTime']>;
  /** Required */
  id: Scalars['ID'];
  isDisposable: Scalars['Boolean'];
  /** Required */
  lastMileId: Scalars['ID'];
};

export type AccessKeyIsBarcodeUniqueQueryVariables = Exact<{
  lastMileId: Scalars['ID'];
  barcode: Scalars['String'];
}>;


export type AccessKeyIsBarcodeUniqueQuery = { __typename?: 'Query', accessKeysAny: boolean };

export type AccessKeyFragment = { __typename?: 'AccessKey', id: string, barcode: string, lastMileId: string, identityUserId: string, expiresDt?: any | null | undefined, lastEntrance?: any | null | undefined, isDisposable: boolean, identityUser: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string, email: string, contractors: Array<{ __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string }>, roles: Array<{ __typename?: 'IdentityRole', id: string, name: string }> } };

export type CreateAccessKeyMutationVariables = Exact<{
  input: CreateAccessKeyInput;
}>;


export type CreateAccessKeyMutation = { __typename?: 'Mutation', createAccessKey: { __typename?: 'CreateAccessKeyPayload', accessKey?: { __typename?: 'AccessKey', id: string, barcode: string, lastMileId: string, identityUserId: string, expiresDt?: any | null | undefined, lastEntrance?: any | null | undefined, isDisposable: boolean, identityUser: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string, email: string, contractors: Array<{ __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string }>, roles: Array<{ __typename?: 'IdentityRole', id: string, name: string }> } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteAccessKeyMutationVariables = Exact<{
  input: DeleteAccessKeyInput;
}>;


export type DeleteAccessKeyMutation = { __typename?: 'Mutation', deleteAccessKey: { __typename?: 'DeleteAccessKeyPayload', accessKey?: { __typename?: 'AccessKey', id: string, barcode: string, lastMileId: string, identityUserId: string, expiresDt?: any | null | undefined, lastEntrance?: any | null | undefined, isDisposable: boolean, identityUser: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string, email: string, contractors: Array<{ __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string }>, roles: Array<{ __typename?: 'IdentityRole', id: string, name: string }> } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetAccessKeyQueryVariables = Exact<{
  lastMileId: Scalars['ID'];
  where?: InputMaybe<AccessKeyFilterInput>;
}>;


export type GetAccessKeyQuery = { __typename?: 'Query', accessKey?: { __typename?: 'AccessKey', id: string, barcode: string, lastMileId: string, identityUserId: string, expiresDt?: any | null | undefined, lastEntrance?: any | null | undefined, isDisposable: boolean, identityUser: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string, email: string, contractors: Array<{ __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string }>, roles: Array<{ __typename?: 'IdentityRole', id: string, name: string }> } } | null | undefined };

export type GetAccessKeysQueryVariables = Exact<{
  lastMileId: Scalars['ID'];
  where?: InputMaybe<AccessKeyFilterInput>;
  order?: InputMaybe<Array<AccessKeySortInput> | AccessKeySortInput>;
}>;


export type GetAccessKeysQuery = { __typename?: 'Query', accessKeys: Array<{ __typename?: 'AccessKey', id: string, barcode: string, lastMileId: string, identityUserId: string, expiresDt?: any | null | undefined, lastEntrance?: any | null | undefined, isDisposable: boolean, identityUser: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string, email: string, contractors: Array<{ __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string }>, roles: Array<{ __typename?: 'IdentityRole', id: string, name: string }> } }> };

export type UpdateAccessKeyMutationVariables = Exact<{
  input: UpdateAccessKeyInput;
}>;


export type UpdateAccessKeyMutation = { __typename?: 'Mutation', updateAccessKey: { __typename?: 'UpdateAccessKeyPayload', accessKey?: { __typename?: 'AccessKey', id: string, barcode: string, lastMileId: string, identityUserId: string, expiresDt?: any | null | undefined, lastEntrance?: any | null | undefined, isDisposable: boolean, identityUser: { __typename?: 'IdentityUser', id: string, surname: string, name: string, middleName?: string | null | undefined, phoneNumber: string, email: string, contractors: Array<{ __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string }>, roles: Array<{ __typename?: 'IdentityRole', id: string, name: string }> } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const AccessKeyFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccessKey"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccessKey"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"lastMileId"}},{"kind":"Field","name":{"kind":"Name","value":"identityUserId"}},{"kind":"Field","name":{"kind":"Name","value":"identityUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"contractors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expiresDt"}},{"kind":"Field","name":{"kind":"Name","value":"lastEntrance"}},{"kind":"Field","name":{"kind":"Name","value":"isDisposable"}}]}}]} as unknown as DocumentNode<AccessKeyFragment, unknown>;
export const AccessKeyIsBarcodeUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessKeyIsBarcodeUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"barcode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessKeysAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lastMileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"barcode"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"barcode"}}}]}}]}}]}]}}]} as unknown as DocumentNode<AccessKeyIsBarcodeUniqueQuery, AccessKeyIsBarcodeUniqueQueryVariables>;
export const CreateAccessKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAccessKey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAccessKeyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccessKey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...AccessKeyFragmentDoc.definitions]} as unknown as DocumentNode<CreateAccessKeyMutation, CreateAccessKeyMutationVariables>;
export const DeleteAccessKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAccessKey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAccessKeyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAccessKey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...AccessKeyFragmentDoc.definitions]} as unknown as DocumentNode<DeleteAccessKeyMutation, DeleteAccessKeyMutationVariables>;
export const GetAccessKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccessKey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccessKeyFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessKey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lastMileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessKey"}}]}}]}},...AccessKeyFragmentDoc.definitions]} as unknown as DocumentNode<GetAccessKeyQuery, GetAccessKeyQueryVariables>;
export const GetAccessKeysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccessKeys"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccessKeyFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccessKeySortInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessKeys"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lastMileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessKey"}}]}}]}},...AccessKeyFragmentDoc.definitions]} as unknown as DocumentNode<GetAccessKeysQuery, GetAccessKeysQueryVariables>;
export const UpdateAccessKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAccessKey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAccessKeyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAccessKey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccessKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...AccessKeyFragmentDoc.definitions]} as unknown as DocumentNode<UpdateAccessKeyMutation, UpdateAccessKeyMutationVariables>;