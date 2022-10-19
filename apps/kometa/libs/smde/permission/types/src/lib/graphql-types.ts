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

export type UpdatePermissionDtoInput = {
  isGranted: Scalars['Boolean'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdatePermissionsDtoInput = {
  permissions?: InputMaybe<Array<InputMaybe<UpdatePermissionDtoInput>>>;
};

export type UpdatePermissionsInput = {
  /** Required */
  permissions: UpdatePermissionsDtoInput;
  /** Required */
  providerKey: Scalars['String'];
  /** Required */
  providerName: Scalars['String'];
};

export type GetPermissionsQueryVariables = Exact<{
  providerName: Scalars['String'];
  providerKey: Scalars['String'];
}>;


export type GetPermissionsQuery = { __typename?: 'Query', permissions: { __typename?: 'PermissionList', entityDisplayName: string, groups: Array<{ __typename?: 'PermissionGroup', name: string, displayName: string, permissions: Array<{ __typename?: 'PermissionGrantInfo', name: string, displayName: string, parentName?: string | null | undefined, isGranted: boolean, allowedProviders: Array<string>, grantedProviders: Array<{ __typename?: 'ProviderInfo', providerKey: string, providerName: string }> }> }> } };

export type PermissionGrantInfoFragment = { __typename?: 'PermissionGrantInfo', name: string, displayName: string, parentName?: string | null | undefined, isGranted: boolean, allowedProviders: Array<string>, grantedProviders: Array<{ __typename?: 'ProviderInfo', providerKey: string, providerName: string }> };

export type PermissionGroupFragment = { __typename?: 'PermissionGroup', name: string, displayName: string, permissions: Array<{ __typename?: 'PermissionGrantInfo', name: string, displayName: string, parentName?: string | null | undefined, isGranted: boolean, allowedProviders: Array<string>, grantedProviders: Array<{ __typename?: 'ProviderInfo', providerKey: string, providerName: string }> }> };

export type PermissionListFragment = { __typename?: 'PermissionList', entityDisplayName: string, groups: Array<{ __typename?: 'PermissionGroup', name: string, displayName: string, permissions: Array<{ __typename?: 'PermissionGrantInfo', name: string, displayName: string, parentName?: string | null | undefined, isGranted: boolean, allowedProviders: Array<string>, grantedProviders: Array<{ __typename?: 'ProviderInfo', providerKey: string, providerName: string }> }> }> };

export type UpdatePermissionsMutationVariables = Exact<{
  input: UpdatePermissionsInput;
}>;


export type UpdatePermissionsMutation = { __typename?: 'Mutation', updatePermissions: { __typename?: 'UpdatePermissionsPayload', errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const PermissionGrantInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PermissionGrantInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionGrantInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"parentName"}},{"kind":"Field","name":{"kind":"Name","value":"isGranted"}},{"kind":"Field","name":{"kind":"Name","value":"allowedProviders"}},{"kind":"Field","name":{"kind":"Name","value":"grantedProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"providerKey"}},{"kind":"Field","name":{"kind":"Name","value":"providerName"}}]}}]}}]} as unknown as DocumentNode<PermissionGrantInfoFragment, unknown>;
export const PermissionGroupFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PermissionGroup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PermissionGrantInfo"}}]}}]}},...PermissionGrantInfoFragmentDoc.definitions]} as unknown as DocumentNode<PermissionGroupFragment, unknown>;
export const PermissionListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PermissionList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entityDisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PermissionGroup"}}]}}]}},...PermissionGroupFragmentDoc.definitions]} as unknown as DocumentNode<PermissionListFragment, unknown>;
export const GetPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"providerName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerName"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerKey"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PermissionList"}}]}}]}},...PermissionListFragmentDoc.definitions]} as unknown as DocumentNode<GetPermissionsQuery, GetPermissionsQueryVariables>;
export const UpdatePermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePermissionsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePermissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePermissionsMutation, UpdatePermissionsMutationVariables>;