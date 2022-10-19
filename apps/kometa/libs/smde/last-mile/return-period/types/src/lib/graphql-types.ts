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

export enum TypeOrder {
  Emex = 'Emex'
}

export type UpdateLastMileReturnPeriodInput = {
  /** Required */
  lastMileId: Scalars['ID'];
  /**
   * Required
   * Range from 0 to 2147483647
   */
  period: Scalars['Int'];
  /** Required */
  typeOrder: TypeOrder;
};

export type GetLastMileReturnPeriodsQueryVariables = Exact<{
  lastMileId: Scalars['ID'];
}>;


export type GetLastMileReturnPeriodsQuery = { __typename?: 'Query', lastMileById: { __typename?: 'Postamat', returnPeriods: Array<{ __typename?: 'LastMileReturnPeriod', lastMileId: string, typeOrder: TypeOrder, period: number }> } };

export type LastMileReturnPeriodFragment = { __typename?: 'LastMileReturnPeriod', lastMileId: string, typeOrder: TypeOrder, period: number };

export type UpdateLastMileReturnPeriodMutationVariables = Exact<{
  input: UpdateLastMileReturnPeriodInput;
}>;


export type UpdateLastMileReturnPeriodMutation = { __typename?: 'Mutation', updateLastMileReturnPeriod: { __typename?: 'UpdateLastMileReturnPeriodPayload', lastMileReturnPeriod?: { __typename?: 'LastMileReturnPeriod', lastMileId: string, typeOrder: TypeOrder, period: number } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const LastMileReturnPeriodFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LastMileReturnPeriod"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LastMileReturnPeriod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMileId"}},{"kind":"Field","name":{"kind":"Name","value":"typeOrder"}},{"kind":"Field","name":{"kind":"Name","value":"period"}}]}}]} as unknown as DocumentNode<LastMileReturnPeriodFragment, unknown>;
export const GetLastMileReturnPeriodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastMileReturnPeriods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMileById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returnPeriods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LastMileReturnPeriod"}}]}}]}}]}},...LastMileReturnPeriodFragmentDoc.definitions]} as unknown as DocumentNode<GetLastMileReturnPeriodsQuery, GetLastMileReturnPeriodsQueryVariables>;
export const UpdateLastMileReturnPeriodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLastMileReturnPeriod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLastMileReturnPeriodInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLastMileReturnPeriod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMileReturnPeriod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LastMileReturnPeriod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...LastMileReturnPeriodFragmentDoc.definitions]} as unknown as DocumentNode<UpdateLastMileReturnPeriodMutation, UpdateLastMileReturnPeriodMutationVariables>;