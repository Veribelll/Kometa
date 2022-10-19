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

export type ActivateCellInput = {
  cellId: Scalars['ID'];
  postamatId: Scalars['ID'];
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Ячейка */
export type CellFilterInput = {
  and?: InputMaybe<Array<CellFilterInput>>;
  /** ШК */
  barcode?: InputMaybe<StringOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  /** Активирована */
  isEnable?: InputMaybe<BooleanOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  lockId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Наименование */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CellFilterInput>>;
  /** Пин-код */
  pinCode?: InputMaybe<StringOperationFilterInput>;
  /** Места в ячейке */
  places?: InputMaybe<ListFilterInputTypeOfPlaceInCellFilterInput>;
  /** Приоритет использования */
  priority?: InputMaybe<ComparableInt32OperationFilterInput>;
  /** Сервисный пин-код */
  servicePinCode?: InputMaybe<StringOperationFilterInput>;
  sizeId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Статус */
  status?: InputMaybe<CellStatusOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Тип ячейки */
  type?: InputMaybe<TypeCellOperationFilterInput>;
};

/** Ячейка */
export type CellSortInput = {
  /** ШК */
  barcode?: InputMaybe<SortEnumType>;
  contractorId?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  /** Активирована */
  isEnable?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  lockId?: InputMaybe<SortEnumType>;
  /** Наименование */
  name?: InputMaybe<SortEnumType>;
  /** Пин-код */
  pinCode?: InputMaybe<SortEnumType>;
  postamatId?: InputMaybe<SortEnumType>;
  /** Приоритет использования */
  priority?: InputMaybe<SortEnumType>;
  /** Сервисный пин-код */
  servicePinCode?: InputMaybe<SortEnumType>;
  sizeId?: InputMaybe<SortEnumType>;
  /** Статус */
  status?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
  /** Тип ячейки */
  type?: InputMaybe<SortEnumType>;
};

export enum CellStatus {
  /** Занята товаром */
  Busy = 'BUSY',
  /** Свободна */
  Free = 'FREE',
  /** Зарезервирована */
  Reserved = 'RESERVED',
  /** Зарезервирована для возврата */
  ReservedForReturn = 'RESERVED_FOR_RETURN',
  /** Вернули товар */
  Returned = 'RETURNED'
}

export type CellStatusOperationFilterInput = {
  eq?: InputMaybe<CellStatus>;
  in?: InputMaybe<Array<CellStatus>>;
  neq?: InputMaybe<CellStatus>;
  nin?: InputMaybe<Array<CellStatus>>;
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

export type CreateCellInput = {
  /**
   * ШК
   * Required
   * Max Length: 50
   */
  barcode: Scalars['String'];
  /**
   * Наименование
   * Required
   * Max Length: 50
   */
  name: Scalars['String'];
  /** Required */
  postamatId: Scalars['ID'];
  /** Required */
  typeCell: TypeCell;
};

export type DeactivateCellInput = {
  cellId: Scalars['ID'];
  postamatId: Scalars['ID'];
};

export type DeleteCellInput = {
  cellId: Scalars['ID'];
  postamatId: Scalars['ID'];
};

export type IdOperationFilterInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ListFilterInputTypeOfPlaceInCellFilterInput = {
  all?: InputMaybe<PlaceInCellFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<PlaceInCellFilterInput>;
  some?: InputMaybe<PlaceInCellFilterInput>;
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

export type PlaceInCellFilterInput = {
  and?: InputMaybe<Array<PlaceInCellFilterInput>>;
  cellId?: InputMaybe<IdOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  or?: InputMaybe<Array<PlaceInCellFilterInput>>;
  packingPlaceId?: InputMaybe<IdOperationFilterInput>;
  reserved?: InputMaybe<BooleanOperationFilterInput>;
  /** Хранить до */
  storeUntil?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

export type PostamatAssignLockToCellInput = {
  cellId: Scalars['ID'];
  lockId: Scalars['ID'];
  postamatId: Scalars['ID'];
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

export enum TypeCell {
  Cell = 'CELL',
  Service = 'SERVICE',
  Virtual = 'VIRTUAL'
}

export type TypeCellOperationFilterInput = {
  eq?: InputMaybe<TypeCell>;
  in?: InputMaybe<Array<TypeCell>>;
  neq?: InputMaybe<TypeCell>;
  nin?: InputMaybe<Array<TypeCell>>;
};

export enum TypeOrder {
  Emex = 'Emex'
}

export type UpdateCellInput = {
  /**
   * ШК
   * Required
   * Max Length: 50
   */
  barcode: Scalars['String'];
  /** Required */
  cellId: Scalars['ID'];
  /**
   * Наименование
   * Required
   * Max Length: 50
   */
  name: Scalars['String'];
  /** Max Length: 6 */
  pinCode?: InputMaybe<Scalars['String']>;
  /** Required */
  postamatId: Scalars['ID'];
  /** Max Length: 6 */
  servicePinCode?: InputMaybe<Scalars['String']>;
};

export type ActivateCellMutationVariables = Exact<{
  input: ActivateCellInput;
}>;


export type ActivateCellMutation = { __typename?: 'Mutation', activateCell: { __typename?: 'ActivateCellPayload', cell?: { __typename?: 'Cell', id: string, type: TypeCell, name: string, status: CellStatus, barcode: string, pinCode?: string | null | undefined, servicePinCode?: string | null | undefined, priority: number, isEnable: boolean, lockId?: string | null | undefined, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type AssignLockToCellMutationVariables = Exact<{
  input: PostamatAssignLockToCellInput;
}>;


export type AssignLockToCellMutation = { __typename?: 'Mutation', postamatAssignLockToCell: { __typename?: 'PostamatAssignLockToCellPayload', postamat?: { __typename?: 'Postamat', id: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type CellDetailFragment = { __typename?: 'Cell', id: string, type: TypeCell, name: string, status: CellStatus, barcode: string, pinCode?: string | null | undefined, servicePinCode?: string | null | undefined, priority: number, isEnable: boolean, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined, places: Array<{ __typename?: 'PlaceInCell', packingPlaceId: string, packingPlace: { __typename?: 'PackingPlace', id: string, typeOrder: TypeOrder, status: PackingPlaceStatus, barcode: string, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } }> };

export type CellIsBarcodeUniqueQueryVariables = Exact<{
  postamatId: Scalars['ID'];
  barcode: Scalars['String'];
}>;


export type CellIsBarcodeUniqueQuery = { __typename?: 'Query', cellsAny: boolean };

export type CellIsNameUniqueQueryVariables = Exact<{
  postamatId: Scalars['ID'];
  name: Scalars['String'];
}>;


export type CellIsNameUniqueQuery = { __typename?: 'Query', cellsAny: boolean };

export type CellIsPinCodeUniqueQueryVariables = Exact<{
  postamatId: Scalars['ID'];
  pinCode: Scalars['String'];
}>;


export type CellIsPinCodeUniqueQuery = { __typename?: 'Query', cellsAny: boolean };

export type CellIsServicePinCodeUniqueQueryVariables = Exact<{
  postamatId: Scalars['ID'];
  servicePinCode: Scalars['String'];
}>;


export type CellIsServicePinCodeUniqueQuery = { __typename?: 'Query', cellsAny: boolean };

export type CellFragment = { __typename?: 'Cell', id: string, type: TypeCell, name: string, status: CellStatus, barcode: string, pinCode?: string | null | undefined, servicePinCode?: string | null | undefined, priority: number, isEnable: boolean, lockId?: string | null | undefined, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined };

export type CreateCellMutationVariables = Exact<{
  input: CreateCellInput;
}>;


export type CreateCellMutation = { __typename?: 'Mutation', createCell: { __typename?: 'CreateCellPayload', cell?: { __typename?: 'Cell', id: string, type: TypeCell, name: string, status: CellStatus, barcode: string, pinCode?: string | null | undefined, servicePinCode?: string | null | undefined, priority: number, isEnable: boolean, lockId?: string | null | undefined, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'CellBarcodeAlreadyExistsError', message: string } | { __typename?: 'CellNameAlreadyExistsError', message: string } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeactivateCellMutationVariables = Exact<{
  input: DeactivateCellInput;
}>;


export type DeactivateCellMutation = { __typename?: 'Mutation', deactivateCell: { __typename?: 'DeactivateCellPayload', cell?: { __typename?: 'Cell', id: string, type: TypeCell, name: string, status: CellStatus, barcode: string, pinCode?: string | null | undefined, servicePinCode?: string | null | undefined, priority: number, isEnable: boolean, lockId?: string | null | undefined, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteCellMutationVariables = Exact<{
  input: DeleteCellInput;
}>;


export type DeleteCellMutation = { __typename?: 'Mutation', deleteCell: { __typename?: 'DeleteCellPayload', cell?: { __typename?: 'Cell', id: string, type: TypeCell, name: string, status: CellStatus, barcode: string, pinCode?: string | null | undefined, servicePinCode?: string | null | undefined, priority: number, isEnable: boolean, lockId?: string | null | undefined, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'CellDeleteWhenNotEmptyError', message: string } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetCellByIdQueryVariables = Exact<{
  cellId: Scalars['ID'];
}>;


export type GetCellByIdQuery = { __typename?: 'Query', cellById: { __typename?: 'Cell', id: string, type: TypeCell, name: string, status: CellStatus, barcode: string, pinCode?: string | null | undefined, servicePinCode?: string | null | undefined, priority: number, isEnable: boolean, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined, places: Array<{ __typename?: 'PlaceInCell', packingPlaceId: string, packingPlace: { __typename?: 'PackingPlace', id: string, typeOrder: TypeOrder, status: PackingPlaceStatus, barcode: string, sizeId?: string | null | undefined, size?: { __typename?: 'Size', id: string, name: string } | null | undefined } }> } };

export type GetCellsQueryVariables = Exact<{
  postamatId: Scalars['ID'];
  where?: InputMaybe<CellFilterInput>;
  order?: InputMaybe<Array<CellSortInput> | CellSortInput>;
}>;


export type GetCellsQuery = { __typename?: 'Query', cells: Array<{ __typename?: 'Cell', id: string, type: TypeCell, name: string, status: CellStatus, barcode: string, pinCode?: string | null | undefined, servicePinCode?: string | null | undefined, priority: number, isEnable: boolean, lockId?: string | null | undefined, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined }> };

export type GetDataForAssignLockToCellQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetDataForAssignLockToCellQuery = { __typename?: 'Query', controllers: Array<{ __typename?: 'PromixController', id: string, name: string, locks: Array<{ __typename?: 'Lock', id: string, address: string }> }> };

export type UpdateCellMutationVariables = Exact<{
  input: UpdateCellInput;
}>;


export type UpdateCellMutation = { __typename?: 'Mutation', updateCell: { __typename?: 'UpdateCellPayload', cell?: { __typename?: 'Cell', id: string, type: TypeCell, name: string, status: CellStatus, barcode: string, pinCode?: string | null | undefined, servicePinCode?: string | null | undefined, priority: number, isEnable: boolean, lockId?: string | null | undefined, lock?: { __typename?: 'Lock', id: string, address: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'CellBarcodeAlreadyExistsError', message: string } | { __typename?: 'CellNameAlreadyExistsError', message: string } | { __typename?: 'CellPinCodeAlreadyExistsError', message: string } | { __typename?: 'CellServicePinCodeAlreadyExistsError', message: string } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const CellDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CellDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cell"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"pinCode"}},{"kind":"Field","name":{"kind":"Name","value":"servicePinCode"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"isEnable"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"packingPlaceId"}},{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeOrder"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"sizeId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CellDetailFragment, unknown>;
export const CellFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Cell"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cell"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"pinCode"}},{"kind":"Field","name":{"kind":"Name","value":"servicePinCode"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"isEnable"}},{"kind":"Field","name":{"kind":"Name","value":"lockId"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<CellFragment, unknown>;
export const ActivateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ActivateCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ActivateCellInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activateCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...CellFragmentDoc.definitions]} as unknown as DocumentNode<ActivateCellMutation, ActivateCellMutationVariables>;
export const AssignLockToCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AssignLockToCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostamatAssignLockToCellInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatAssignLockToCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AssignLockToCellMutation, AssignLockToCellMutationVariables>;
export const CellIsBarcodeUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CellIsBarcodeUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"barcode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postamatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"barcode"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"barcode"}}}]}}]}}]}]}}]} as unknown as DocumentNode<CellIsBarcodeUniqueQuery, CellIsBarcodeUniqueQueryVariables>;
export const CellIsNameUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CellIsNameUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postamatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}]}]}}]} as unknown as DocumentNode<CellIsNameUniqueQuery, CellIsNameUniqueQueryVariables>;
export const CellIsPinCodeUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CellIsPinCodeUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pinCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postamatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pinCode"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pinCode"}}}]}}]}}]}]}}]} as unknown as DocumentNode<CellIsPinCodeUniqueQuery, CellIsPinCodeUniqueQueryVariables>;
export const CellIsServicePinCodeUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CellIsServicePinCodeUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"servicePinCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postamatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"servicePinCode"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"servicePinCode"}}}]}}]}}]}]}}]} as unknown as DocumentNode<CellIsServicePinCodeUniqueQuery, CellIsServicePinCodeUniqueQueryVariables>;
export const CreateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCellInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...CellFragmentDoc.definitions]} as unknown as DocumentNode<CreateCellMutation, CreateCellMutationVariables>;
export const DeactivateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeactivateCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeactivateCellInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deactivateCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...CellFragmentDoc.definitions]} as unknown as DocumentNode<DeactivateCellMutation, DeactivateCellMutationVariables>;
export const DeleteCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCellInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...CellFragmentDoc.definitions]} as unknown as DocumentNode<DeleteCellMutation, DeleteCellMutationVariables>;
export const GetCellByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCellById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cellId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cellId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cellId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CellDetail"}}]}}]}},...CellDetailFragmentDoc.definitions]} as unknown as DocumentNode<GetCellByIdQuery, GetCellByIdQueryVariables>;
export const GetCellsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCells"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CellFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CellSortInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cells"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postamatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cell"}}]}}]}},...CellFragmentDoc.definitions]} as unknown as DocumentNode<GetCellsQuery, GetCellsQueryVariables>;
export const GetDataForAssignLockToCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForAssignLockToCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"controllers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postamatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"locks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<GetDataForAssignLockToCellQuery, GetDataForAssignLockToCellQueryVariables>;
export const UpdateCellDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCell"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCellInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCell"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Cell"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...CellFragmentDoc.definitions]} as unknown as DocumentNode<UpdateCellMutation, UpdateCellMutationVariables>;