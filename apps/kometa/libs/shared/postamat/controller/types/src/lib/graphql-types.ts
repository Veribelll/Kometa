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

/** Контроллер */
export type ControllerBaseFilterInput = {
  and?: InputMaybe<Array<ControllerBaseFilterInput>>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  /** Замки */
  locks?: InputMaybe<ListFilterInputTypeOfLockFilterInput>;
  /** Наименование */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ControllerBaseFilterInput>>;
  /** Настройки serial port */
  settings?: InputMaybe<SerialPortSettingsFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

/** Контроллер */
export type ControllerBaseSortInput = {
  contractorId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  /** Наименование */
  name?: InputMaybe<SortEnumType>;
  postamatId?: InputMaybe<SortEnumType>;
  /** Настройки serial port */
  settings?: InputMaybe<SerialPortSettingsSortInput>;
  tenantId?: InputMaybe<SortEnumType>;
};

export type CreatePromixControllerInput = {
  /**
   * Наименование
   * Required
   * Max Length: 100
   */
  name: Scalars['String'];
  /** Required */
  postamatId: Scalars['ID'];
  /**
   * Кол-во контроллеров
   * Range from 1 to 2147483647
   */
  quantity: Scalars['Int'];
  /**
   * Настройки serial port
   * Required
   */
  settings: SerialPortSettingsInput;
};

export type DeletePromixControllerInput = {
  controllerId: Scalars['ID'];
  postamatId: Scalars['ID'];
};

export type IdOperationFilterInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ListFilterInputTypeOfLockFilterInput = {
  all?: InputMaybe<LockFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LockFilterInput>;
  some?: InputMaybe<LockFilterInput>;
};

/** Замок */
export type LockFilterInput = {
  /** Адрес */
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<LockFilterInput>>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  controllerId?: InputMaybe<IdOperationFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  or?: InputMaybe<Array<LockFilterInput>>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

export enum Parity {
  Even = 'EVEN',
  Mark = 'MARK',
  None = 'NONE',
  Odd = 'ODD',
  Space = 'SPACE'
}

export type ParityOperationFilterInput = {
  eq?: InputMaybe<Parity>;
  in?: InputMaybe<Array<Parity>>;
  neq?: InputMaybe<Parity>;
  nin?: InputMaybe<Array<Parity>>;
};

export type SerialPortSettingsFilterInput = {
  and?: InputMaybe<Array<SerialPortSettingsFilterInput>>;
  /** Скорость передачи для последовательного порта (в бодах). */
  baudRate?: InputMaybe<ComparableInt32OperationFilterInput>;
  /** Стандартное число битов данных в байте. */
  dataBits?: InputMaybe<ComparableInt32OperationFilterInput>;
  or?: InputMaybe<Array<SerialPortSettingsFilterInput>>;
  /** Протокол контроля четности. */
  parity?: InputMaybe<ParityOperationFilterInput>;
  /** Последовательный порт, в частности, любой из доступных портов COM. */
  portName?: InputMaybe<StringOperationFilterInput>;
  /** Стандартное число стоповых битов в байте. */
  stopBits?: InputMaybe<StopBitsOperationFilterInput>;
};

export type SerialPortSettingsInput = {
  /**
   * Скорость передачи для последовательного порта (в бодах).
   * Required
   * Range from 0 to 2147483647
   */
  baudRate: Scalars['Int'];
  /**
   * Стандартное число битов данных в байте.
   * Required
   * Range from 0 to 2147483647
   */
  dataBits: Scalars['Int'];
  /**
   * Протокол контроля четности.
   * Required
   */
  parity: Parity;
  /**
   * Последовательный порт, в частности, любой из доступных портов COM.
   * Required
   */
  portName: Scalars['String'];
  /**
   * Стандартное число стоповых битов в байте.
   * Required
   */
  stopBits: StopBits;
};

export type SerialPortSettingsSortInput = {
  /** Скорость передачи для последовательного порта (в бодах). */
  baudRate?: InputMaybe<SortEnumType>;
  /** Стандартное число битов данных в байте. */
  dataBits?: InputMaybe<SortEnumType>;
  /** Протокол контроля четности. */
  parity?: InputMaybe<SortEnumType>;
  /** Последовательный порт, в частности, любой из доступных портов COM. */
  portName?: InputMaybe<SortEnumType>;
  /** Стандартное число стоповых битов в байте. */
  stopBits?: InputMaybe<SortEnumType>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum StopBits {
  None = 'NONE',
  One = 'ONE',
  OnePointFive = 'ONE_POINT_FIVE',
  Two = 'TWO'
}

export type StopBitsOperationFilterInput = {
  eq?: InputMaybe<StopBits>;
  in?: InputMaybe<Array<StopBits>>;
  neq?: InputMaybe<StopBits>;
  nin?: InputMaybe<Array<StopBits>>;
};

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

export type UpdatePromixControllerInput = {
  /** Required */
  controllerId: Scalars['ID'];
  /**
   * Наименование
   * Required
   * Max Length: 100
   */
  name: Scalars['String'];
  /** Required */
  postamatId: Scalars['ID'];
  /**
   * Настройки serial port
   * Required
   */
  settings: SerialPortSettingsInput;
};

export type ControllerIsNameUniqueQueryVariables = Exact<{
  postamatId: Scalars['ID'];
  name: Scalars['String'];
}>;


export type ControllerIsNameUniqueQuery = { __typename?: 'Query', controllersAny: boolean };

export type ControllerFragment = { __typename?: 'PromixController', id: string, name: string, settings: { __typename?: 'SerialPortSettings', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string }, locks: Array<{ __typename?: 'Lock', id: string, address: string }> };

export type CreatePromixControllerMutationVariables = Exact<{
  input: CreatePromixControllerInput;
}>;


export type CreatePromixControllerMutation = { __typename?: 'Mutation', createPromixController: { __typename?: 'CreatePromixControllerPayload', promixController?: { __typename?: 'PromixController', id: string, name: string, settings: { __typename?: 'SerialPortSettings', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string }, locks: Array<{ __typename?: 'Lock', id: string, address: string }> } | null | undefined, errors?: Array<{ __typename?: 'ControllerNameAlreadyExistsError', message: string } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeletePromixControllerMutationVariables = Exact<{
  input: DeletePromixControllerInput;
}>;


export type DeletePromixControllerMutation = { __typename?: 'Mutation', deletePromixController: { __typename?: 'DeletePromixControllerPayload', promixController?: { __typename?: 'PromixController', id: string, name: string, settings: { __typename?: 'SerialPortSettings', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string }, locks: Array<{ __typename?: 'Lock', id: string, address: string }> } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetControllersQueryVariables = Exact<{
  postamatId: Scalars['ID'];
  where?: InputMaybe<ControllerBaseFilterInput>;
  order?: InputMaybe<Array<ControllerBaseSortInput> | ControllerBaseSortInput>;
}>;


export type GetControllersQuery = { __typename?: 'Query', controllers: Array<{ __typename?: 'PromixController', id: string, name: string, settings: { __typename?: 'SerialPortSettings', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string }, locks: Array<{ __typename?: 'Lock', id: string, address: string }> }> };

export type LockFragment = { __typename?: 'Lock', id: string, address: string };

export type PromixControllerFragment = { __typename?: 'PromixController', id: string, name: string, settings: { __typename?: 'SerialPortSettings', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string }, locks: Array<{ __typename?: 'Lock', id: string, address: string }> };

export type UpdatePromixControllerMutationVariables = Exact<{
  input: UpdatePromixControllerInput;
}>;


export type UpdatePromixControllerMutation = { __typename?: 'Mutation', updatePromixController: { __typename?: 'UpdatePromixControllerPayload', promixController?: { __typename?: 'PromixController', id: string, name: string, settings: { __typename?: 'SerialPortSettings', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string }, locks: Array<{ __typename?: 'Lock', id: string, address: string }> } | null | undefined, errors?: Array<{ __typename?: 'ControllerNameAlreadyExistsError', message: string } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const ControllerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Controller"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ControllerBase"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baudRate"}},{"kind":"Field","name":{"kind":"Name","value":"dataBits"}},{"kind":"Field","name":{"kind":"Name","value":"parity"}},{"kind":"Field","name":{"kind":"Name","value":"stopBits"}},{"kind":"Field","name":{"kind":"Name","value":"portName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<ControllerFragment, unknown>;
export const LockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Lock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Lock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode<LockFragment, unknown>;
export const PromixControllerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PromixController"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PromixController"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baudRate"}},{"kind":"Field","name":{"kind":"Name","value":"dataBits"}},{"kind":"Field","name":{"kind":"Name","value":"parity"}},{"kind":"Field","name":{"kind":"Name","value":"stopBits"}},{"kind":"Field","name":{"kind":"Name","value":"portName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<PromixControllerFragment, unknown>;
export const ControllerIsNameUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ControllerIsNameUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"controllersAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postamatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}]}]}}]} as unknown as DocumentNode<ControllerIsNameUniqueQuery, ControllerIsNameUniqueQueryVariables>;
export const CreatePromixControllerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePromixController"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePromixControllerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPromixController"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promixController"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PromixController"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PromixControllerFragmentDoc.definitions]} as unknown as DocumentNode<CreatePromixControllerMutation, CreatePromixControllerMutationVariables>;
export const DeletePromixControllerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePromixController"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeletePromixControllerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePromixController"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promixController"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PromixController"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PromixControllerFragmentDoc.definitions]} as unknown as DocumentNode<DeletePromixControllerMutation, DeletePromixControllerMutationVariables>;
export const GetControllersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetControllers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ControllerBaseFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ControllerBaseSortInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"controllers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postamatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Controller"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PromixController"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PromixController"}}]}}]}}]}},...ControllerFragmentDoc.definitions,...PromixControllerFragmentDoc.definitions]} as unknown as DocumentNode<GetControllersQuery, GetControllersQueryVariables>;
export const UpdatePromixControllerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePromixController"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePromixControllerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePromixController"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"promixController"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PromixController"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PromixControllerFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePromixControllerMutation, UpdatePromixControllerMutationVariables>;