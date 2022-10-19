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

export type CreateTemplatePostamatInput = {
  /**
   * Наименование
   * Required
   * Max Length: 50
   */
  name: Scalars['String'];
  /**
   * Секции
   * Required
   * Min Length: 1
   */
  sections: Array<TemplatePostamatTemplateSectionInput>;
};

export type DeleteTemplatePostamatInput = {
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

export type ListFilterInputTypeOfTemplatePostamatTemplateSectionFilterInput = {
  all?: InputMaybe<TemplatePostamatTemplateSectionFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<TemplatePostamatTemplateSectionFilterInput>;
  some?: InputMaybe<TemplatePostamatTemplateSectionFilterInput>;
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

/** Шаблон постамата */
export type TemplatePostamatFilterInput = {
  and?: InputMaybe<Array<TemplatePostamatFilterInput>>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
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
  or?: InputMaybe<Array<TemplatePostamatFilterInput>>;
  /** Ид шаблонов секций */
  sections?: InputMaybe<ListFilterInputTypeOfTemplatePostamatTemplateSectionFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

/** Шаблон постамата */
export type TemplatePostamatSortInput = {
  concurrencyStamp?: InputMaybe<SortEnumType>;
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
  tenantId?: InputMaybe<SortEnumType>;
};

export type TemplatePostamatTemplateSectionFilterInput = {
  and?: InputMaybe<Array<TemplatePostamatTemplateSectionFilterInput>>;
  or?: InputMaybe<Array<TemplatePostamatTemplateSectionFilterInput>>;
  /** Позиция */
  position?: InputMaybe<ComparableInt32OperationFilterInput>;
  templatePostamatId?: InputMaybe<IdOperationFilterInput>;
  templateSectionId?: InputMaybe<IdOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

export type TemplatePostamatTemplateSectionInput = {
  /**
   * Позиция
   * Required
   * Range from 0 to 2147483647
   */
  position: Scalars['Int'];
  /** Required */
  templateSectionId: Scalars['ID'];
};

export type UpdateTemplatePostamatInput = {
  /** Required */
  id: Scalars['ID'];
  /**
   * Наименование
   * Required
   * Max Length: 50
   */
  name: Scalars['String'];
};

export type CreateTemplatePostamatMutationVariables = Exact<{
  input: CreateTemplatePostamatInput;
}>;


export type CreateTemplatePostamatMutation = { __typename?: 'Mutation', createTemplatePostamat: { __typename?: 'CreateTemplatePostamatPayload', templatePostamat?: { __typename?: 'TemplatePostamat', id: string, name: string, sections: Array<{ __typename?: 'TemplatePostamatTemplateSection', position: number, templateSectionId: string, templateSection: { __typename?: 'TemplateSection', id: string, name: string, cells: Array<{ __typename?: 'TemplateSectionTemplateCell', position: number, templateCellId: string, templateCell: { __typename?: 'TemplateCell', id: string, name: string, width: number, height: number, isCell: boolean, imageUrl?: string | null | undefined, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } }> } }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'TemplatePostamatNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteTemplatePostamatMutationVariables = Exact<{
  input: DeleteTemplatePostamatInput;
}>;


export type DeleteTemplatePostamatMutation = { __typename?: 'Mutation', deleteTemplatePostamat: { __typename?: 'DeleteTemplatePostamatPayload', templatePostamat?: { __typename?: 'TemplatePostamat', id: string, name: string, sections: Array<{ __typename?: 'TemplatePostamatTemplateSection', position: number, templateSectionId: string, templateSection: { __typename?: 'TemplateSection', id: string, name: string, cells: Array<{ __typename?: 'TemplateSectionTemplateCell', position: number, templateCellId: string, templateCell: { __typename?: 'TemplateCell', id: string, name: string, width: number, height: number, isCell: boolean, imageUrl?: string | null | undefined, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } }> } }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetDataForCreateTemplatePostamatQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataForCreateTemplatePostamatQuery = { __typename?: 'Query', templatesSection?: { __typename?: 'TemplateSectionCollectionSegment', items?: Array<{ __typename?: 'TemplateSection', id: string, name: string, cells: Array<{ __typename?: 'TemplateSectionTemplateCell', position: number, templateCellId: string, templateCell: { __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, sizeId?: string | null | undefined, imageUrl?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } }> }> | null | undefined } | null | undefined };

export type GetTemplatePostamatQueryVariables = Exact<{
  where?: InputMaybe<TemplatePostamatFilterInput>;
}>;


export type GetTemplatePostamatQuery = { __typename?: 'Query', templatePostamat?: { __typename?: 'TemplatePostamat', id: string, name: string, sections: Array<{ __typename?: 'TemplatePostamatTemplateSection', position: number, templateSectionId: string, templateSection: { __typename?: 'TemplateSection', id: string, name: string, cells: Array<{ __typename?: 'TemplateSectionTemplateCell', position: number, templateCellId: string, templateCell: { __typename?: 'TemplateCell', id: string, name: string, width: number, height: number, isCell: boolean, imageUrl?: string | null | undefined, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } }> } }> } | null | undefined };

export type GetTemplatesPostamatQueryVariables = Exact<{
  where?: InputMaybe<TemplatePostamatFilterInput>;
  order?: InputMaybe<Array<TemplatePostamatSortInput> | TemplatePostamatSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetTemplatesPostamatQuery = { __typename?: 'Query', templatesPostamat?: { __typename?: 'TemplatePostamatCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'TemplatePostamat', id: string, name: string, sections: Array<{ __typename?: 'TemplatePostamatTemplateSection', position: number, templateSectionId: string, templateSection: { __typename?: 'TemplateSection', id: string, name: string, cells: Array<{ __typename?: 'TemplateSectionTemplateCell', position: number, templateCellId: string, templateCell: { __typename?: 'TemplateCell', id: string, name: string, width: number, height: number, isCell: boolean, imageUrl?: string | null | undefined, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } }> } }> }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type TemplatePostamatIsNameUniqueQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type TemplatePostamatIsNameUniqueQuery = { __typename?: 'Query', templatesPostamatAny: boolean };

export type TemplatePostamatFragment = { __typename?: 'TemplatePostamat', id: string, name: string, sections: Array<{ __typename?: 'TemplatePostamatTemplateSection', position: number, templateSectionId: string, templateSection: { __typename?: 'TemplateSection', id: string, name: string, cells: Array<{ __typename?: 'TemplateSectionTemplateCell', position: number, templateCellId: string, templateCell: { __typename?: 'TemplateCell', id: string, name: string, width: number, height: number, isCell: boolean, imageUrl?: string | null | undefined, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } }> } }> };

export type UpdateTemplatePostamatMutationVariables = Exact<{
  input: UpdateTemplatePostamatInput;
}>;


export type UpdateTemplatePostamatMutation = { __typename?: 'Mutation', updateTemplatePostamat: { __typename?: 'UpdateTemplatePostamatPayload', templatePostamat?: { __typename?: 'TemplatePostamat', id: string, name: string, sections: Array<{ __typename?: 'TemplatePostamatTemplateSection', position: number, templateSectionId: string, templateSection: { __typename?: 'TemplateSection', id: string, name: string, cells: Array<{ __typename?: 'TemplateSectionTemplateCell', position: number, templateCellId: string, templateCell: { __typename?: 'TemplateCell', id: string, name: string, width: number, height: number, isCell: boolean, imageUrl?: string | null | undefined, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } }> } }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'TemplatePostamatNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const TemplatePostamatFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TemplatePostamat"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TemplatePostamat"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"templateSectionId"}},{"kind":"Field","name":{"kind":"Name","value":"templateSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cells"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"templateCellId"}},{"kind":"Field","name":{"kind":"Name","value":"templateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"isCell"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"sizeId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TemplatePostamatFragment, unknown>;
export const CreateTemplatePostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTemplatePostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTemplatePostamatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTemplatePostamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatePostamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplatePostamat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TemplatePostamatNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...TemplatePostamatFragmentDoc.definitions]} as unknown as DocumentNode<CreateTemplatePostamatMutation, CreateTemplatePostamatMutationVariables>;
export const DeleteTemplatePostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTemplatePostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTemplatePostamatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTemplatePostamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatePostamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplatePostamat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...TemplatePostamatFragmentDoc.definitions]} as unknown as DocumentNode<DeleteTemplatePostamatMutation, DeleteTemplatePostamatMutationVariables>;
export const GetDataForCreateTemplatePostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForCreateTemplatePostamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatesSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cells"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"templateCellId"}},{"kind":"Field","name":{"kind":"Name","value":"templateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isCell"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"sizeId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDataForCreateTemplatePostamatQuery, GetDataForCreateTemplatePostamatQueryVariables>;
export const GetTemplatePostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTemplatePostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplatePostamatFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatePostamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplatePostamat"}}]}}]}},...TemplatePostamatFragmentDoc.definitions]} as unknown as DocumentNode<GetTemplatePostamatQuery, GetTemplatePostamatQueryVariables>;
export const GetTemplatesPostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTemplatesPostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplatePostamatFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TemplatePostamatSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatesPostamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplatePostamat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...TemplatePostamatFragmentDoc.definitions]} as unknown as DocumentNode<GetTemplatesPostamatQuery, GetTemplatesPostamatQueryVariables>;
export const TemplatePostamatIsNameUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TemplatePostamatIsNameUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatesPostamatAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}]}]}}]} as unknown as DocumentNode<TemplatePostamatIsNameUniqueQuery, TemplatePostamatIsNameUniqueQueryVariables>;
export const UpdateTemplatePostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTemplatePostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTemplatePostamatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTemplatePostamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatePostamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TemplatePostamat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TemplatePostamatNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...TemplatePostamatFragmentDoc.definitions]} as unknown as DocumentNode<UpdateTemplatePostamatMutation, UpdateTemplatePostamatMutationVariables>;