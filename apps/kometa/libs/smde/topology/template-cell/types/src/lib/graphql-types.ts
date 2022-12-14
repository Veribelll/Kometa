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

export type CreateTemplateCellInput = {
  /**
   * ????????????
   * Required
   * Range from 1 to 2147483647
   */
  height: Scalars['Int'];
  /** Required */
  isCell: Scalars['Boolean'];
  isImage: Scalars['Boolean'];
  /**
   * ????????????????????????
   * Required
   * Max Length: 50
   */
  name: Scalars['String'];
  sizeId?: InputMaybe<Scalars['ID']>;
  /**
   * ????????????
   * Required
   * Range from 1 to 2147483647
   */
  width: Scalars['Int'];
};

export type DeleteTemplateCellInput = {
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

/** ???????????? ???????????? */
export type TemplateCellFilterInput = {
  and?: InputMaybe<Array<TemplateCellFilterInput>>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  extraProperties?: InputMaybe<ExtraPropertyDictionaryFilterInput>;
  /** ???????????? */
  height?: InputMaybe<ComparableInt32OperationFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  /** ???????????? ???? ?????????????????????? */
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  /** ?????? ?????????????? */
  isCell?: InputMaybe<BooleanOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** ???????????????????????? */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TemplateCellFilterInput>>;
  sizeId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** ???????????? */
  width?: InputMaybe<ComparableInt32OperationFilterInput>;
};

/** ???????????? ???????????? */
export type TemplateCellSortInput = {
  concurrencyStamp?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  /** ???????????? */
  height?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  /** ???????????? ???? ?????????????????????? */
  imageUrl?: InputMaybe<SortEnumType>;
  /** ?????? ?????????????? */
  isCell?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  /** ???????????????????????? */
  name?: InputMaybe<SortEnumType>;
  sizeId?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
  /** ???????????? */
  width?: InputMaybe<SortEnumType>;
};

export type UpdateTemplateCellInput = {
  /** Required */
  id: Scalars['ID'];
  /**
   * ????????????????????????
   * Required
   * Max Length: 50
   */
  name: Scalars['String'];
  sizeId?: InputMaybe<Scalars['ID']>;
};

export type CreateTemplateCellMutationVariables = Exact<{
  input: CreateTemplateCellInput;
}>;


export type CreateTemplateCellMutation = { __typename?: 'Mutation', createTemplateCell: { __typename?: 'CreateTemplateCellPayload', templateCell?: { __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, sizeId?: string | null | undefined, imageUrl?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'TemplateCellNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'TemplateCellSizeIdEmptyError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteTemplateCellMutationVariables = Exact<{
  input: DeleteTemplateCellInput;
}>;


export type DeleteTemplateCellMutation = { __typename?: 'Mutation', deleteTemplateCell: { __typename?: 'DeleteTemplateCellPayload', templateCell?: { __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, sizeId?: string | null | undefined, imageUrl?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetDataForCreateTemplateCellQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataForCreateTemplateCellQuery = { __typename?: 'Query', sizes?: { __typename?: 'SizeCollectionSegment', items?: Array<{ __typename?: 'Size', id: string, name: string }> | null | undefined } | null | undefined };

export type GetDataForUpdateTemplateCellQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataForUpdateTemplateCellQuery = { __typename?: 'Query', sizes?: { __typename?: 'SizeCollectionSegment', items?: Array<{ __typename?: 'Size', id: string, name: string }> | null | undefined } | null | undefined };

export type GetTemplateCellQueryVariables = Exact<{
  where?: InputMaybe<TemplateCellFilterInput>;
}>;


export type GetTemplateCellQuery = { __typename?: 'Query', templateCell?: { __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, sizeId?: string | null | undefined, imageUrl?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } | null | undefined };

export type GetTemplatesCellQueryVariables = Exact<{
  where?: InputMaybe<TemplateCellFilterInput>;
  order?: InputMaybe<Array<TemplateCellSortInput> | TemplateCellSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetTemplatesCellQuery = { __typename?: 'Query', templatesCell?: { __typename?: 'TemplateCellCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, sizeId?: string | null | undefined, imageUrl?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type TemplateCellIsNameUniqueQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type TemplateCellIsNameUniqueQuery = { __typename?: 'Query', templatesCellAny: boolean };

export type TemplateCellFragment = { __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, sizeId?: string | null | undefined, imageUrl?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined };

export type UpdateTemplateCellMutationVariables = Exact<{
  input: UpdateTemplateCellInput;
}>;


export type UpdateTemplateCellMutation = { __typename?: 'Mutation', updateTemplateCell: { __typename?: 'UpdateTemplateCellPayload', templateCell?: { __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, sizeId?: string | null | undefined, imageUrl?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'TemplateCellNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const TemplateCellFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TemplateCell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateCell"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isCell"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"sizeId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]} as unknown as DocumentNode<TemplateCellFragment, unknown>;
export const CreateTemplateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTemplateCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTemplateCellInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTemplateCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplateCell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateCellNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateCellSizeIdEmptyError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...TemplateCellFragmentDoc.definitions]} as unknown as DocumentNode<CreateTemplateCellMutation, CreateTemplateCellMutationVariables>;
export const DeleteTemplateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTemplateCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTemplateCellInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTemplateCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplateCell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...TemplateCellFragmentDoc.definitions]} as unknown as DocumentNode<DeleteTemplateCellMutation, DeleteTemplateCellMutationVariables>;
export const GetDataForCreateTemplateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForCreateTemplateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetDataForCreateTemplateCellQuery, GetDataForCreateTemplateCellQueryVariables>;
export const GetDataForUpdateTemplateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForUpdateTemplateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetDataForUpdateTemplateCellQuery, GetDataForUpdateTemplateCellQueryVariables>;
export const GetTemplateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTemplateCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateCellFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplateCell"}}]}}]}},...TemplateCellFragmentDoc.definitions]} as unknown as DocumentNode<GetTemplateCellQuery, GetTemplateCellQueryVariables>;
export const GetTemplatesCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTemplatesCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateCellFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateCellSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatesCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplateCell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...TemplateCellFragmentDoc.definitions]} as unknown as DocumentNode<GetTemplatesCellQuery, GetTemplatesCellQueryVariables>;
export const TemplateCellIsNameUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TemplateCellIsNameUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatesCellAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}]}]}}]} as unknown as DocumentNode<TemplateCellIsNameUniqueQuery, TemplateCellIsNameUniqueQueryVariables>;
export const UpdateTemplateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTemplateCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTemplateCellInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTemplateCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplateCell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TemplateCellNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...TemplateCellFragmentDoc.definitions]} as unknown as DocumentNode<UpdateTemplateCellMutation, UpdateTemplateCellMutationVariables>;