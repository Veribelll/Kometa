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

export type CellDisplayInput = {
  cellId?: InputMaybe<Scalars['ID']>;
  /** Required */
  templateCellId: Scalars['ID'];
  /** Required */
  x: Scalars['Int'];
  /** Required */
  y: Scalars['Int'];
};

export enum TypeCell {
  Cell = 'CELL',
  Service = 'SERVICE',
  Virtual = 'VIRTUAL'
}

export type UpdatePostamatDisplayInput = {
  /**
   * Required
   * Min Length: 1
   */
  cellDisplays: Array<CellDisplayInput>;
  postamatId: Scalars['ID'];
};

export type UpdateTopologyInput = {
  postamatId: Scalars['ID'];
  /** Max Length: 20 */
  prefixBarcode?: InputMaybe<Scalars['String']>;
  /** Max Length: 20 */
  prefixName?: InputMaybe<Scalars['String']>;
  templatePostamatId?: InputMaybe<Scalars['ID']>;
};

export type CellDisplayFragment = { __typename?: 'CellDisplay', x: number, y: number, cellId?: string | null | undefined, templateCellId: string, cell?: { __typename?: 'Cell', id: string, type: TypeCell, name: string, barcode: string } | null | undefined, templateCell: { __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, imageUrl?: string | null | undefined } };

export type GetCellDisplaysQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetCellDisplaysQuery = { __typename?: 'Query', postamatById: { __typename?: 'Postamat', displays: Array<{ __typename?: 'CellDisplay', x: number, y: number, cellId?: string | null | undefined, templateCellId: string, cell?: { __typename?: 'Cell', id: string, type: TypeCell, name: string, barcode: string } | null | undefined, templateCell: { __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, imageUrl?: string | null | undefined } }> } };

export type GetDataForUpdateCellDisplaysQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetDataForUpdateCellDisplaysQuery = { __typename?: 'Query', postamatById: { __typename?: 'Postamat', cells: Array<{ __typename?: 'Cell', id: string, type: TypeCell, name: string, barcode: string }>, displays: Array<{ __typename?: 'CellDisplay', x: number, y: number, cellId?: string | null | undefined, templateCellId: string, templateCell: { __typename?: 'TemplateCell', id: string, isCell: boolean, name: string, width: number, height: number, imageUrl?: string | null | undefined } }> }, templatesSection?: { __typename?: 'TemplateSectionCollectionSegment', items?: Array<{ __typename?: 'TemplateSection', id: string, name: string, cells: Array<{ __typename?: 'TemplateSectionTemplateCell', position: number, templateCellId: string, templateCell: { __typename?: 'TemplateCell', id: string, name: string, width: number, height: number, isCell: boolean, imageUrl?: string | null | undefined } }> }> | null | undefined } | null | undefined, templatesCell?: { __typename?: 'TemplateCellCollectionSegment', items?: Array<{ __typename?: 'TemplateCell', id: string, name: string, width: number, height: number, isCell: boolean, imageUrl?: string | null | undefined }> | null | undefined } | null | undefined };

export type GetDataForUpdateTopologyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataForUpdateTopologyQuery = { __typename?: 'Query', templatesPostamat?: { __typename?: 'TemplatePostamatCollectionSegment', items?: Array<{ __typename?: 'TemplatePostamat', id: string, name: string }> | null | undefined } | null | undefined };

export type UpdatePostamatDisplayMutationVariables = Exact<{
  input: UpdatePostamatDisplayInput;
}>;


export type UpdatePostamatDisplayMutation = { __typename?: 'Mutation', updatePostamatDisplay: { __typename?: 'UpdatePostamatDisplayPayload', postamat?: { __typename?: 'Postamat', id: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type UpdateTopologyMutationVariables = Exact<{
  input: UpdateTopologyInput;
}>;


export type UpdateTopologyMutation = { __typename?: 'Mutation', updateTopology: { __typename?: 'UpdateTopologyPayload', postamat?: { __typename?: 'Postamat', id: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const CellDisplayFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CellDisplay"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CellDisplay"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"cellId"}},{"kind":"Field","name":{"kind":"Name","value":"templateCellId"}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isCell"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<CellDisplayFragment, unknown>;
export const GetCellDisplaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCellDisplays"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CellDisplay"}}]}}]}}]}},...CellDisplayFragmentDoc.definitions]} as unknown as DocumentNode<GetCellDisplaysQuery, GetCellDisplaysQueryVariables>;
export const GetDataForUpdateCellDisplaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForUpdateCellDisplays"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cells"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"CELL"},{"kind":"EnumValue","value":"SERVICE"}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"isEnable"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"displays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"cellId"}},{"kind":"Field","name":{"kind":"Name","value":"templateCellId"}},{"kind":"Field","name":{"kind":"Name","value":"templateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isCell"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"templatesSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cells"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"templateCellId"}},{"kind":"Field","name":{"kind":"Name","value":"templateCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"isCell"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"templatesCell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"isCell"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetDataForUpdateCellDisplaysQuery, GetDataForUpdateCellDisplaysQueryVariables>;
export const GetDataForUpdateTopologyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForUpdateTopology"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templatesPostamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetDataForUpdateTopologyQuery, GetDataForUpdateTopologyQueryVariables>;
export const UpdatePostamatDisplayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostamatDisplay"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostamatDisplayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostamatDisplay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePostamatDisplayMutation, UpdatePostamatDisplayMutationVariables>;
export const UpdateTopologyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTopology"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTopologyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTopology"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTopologyMutation, UpdateTopologyMutationVariables>;