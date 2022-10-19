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

export enum Parity {
  Even = 'EVEN',
  Mark = 'MARK',
  None = 'NONE',
  Odd = 'ODD',
  Space = 'SPACE'
}

export enum StopBits {
  None = 'NONE',
  One = 'ONE',
  OnePointFive = 'ONE_POINT_FIVE',
  Two = 'TWO'
}

export type UpdatePostamatFilePrinterInput = {
  /**
   * Путь к файлу
   * Required
   */
  filePath: Scalars['String'];
  /** Включен */
  isEnabled: Scalars['Boolean'];
  /** Required */
  postamatId: Scalars['ID'];
};

export type UpdatePostamatNetworkPrinterInput = {
  /**
   * IP адрес
   * Required
   */
  ipAddress: Scalars['String'];
  /** Включен */
  isEnabled: Scalars['Boolean'];
  /**
   * Порт
   * Required
   * Range from 0 to 2147483647
   */
  port: Scalars['Int'];
  /** Required */
  postamatId: Scalars['ID'];
  /** Циклическое подключение */
  reconnectOnTimeout: Scalars['Boolean'];
};

export type UpdatePostamatScannerInput = {
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
  /** Required */
  id: Scalars['ID'];
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

export type UpdatePostamatSerialPrinterInput = {
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
  /** Включен */
  isEnabled: Scalars['Boolean'];
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
  /** Required */
  postamatId: Scalars['ID'];
  /**
   * Стандартное число стоповых битов в байте.
   * Required
   */
  stopBits: StopBits;
};

export type UpdatePostamatSettingsInput = {
  /** Телефон администратора */
  adminPhone?: InputMaybe<Scalars['String']>;
  /** Required */
  id: Scalars['ID'];
  /** Авто обновление */
  isAutoUpdate: Scalars['Boolean'];
  /** Прием только по списку ожидания. */
  receptionWaitingListOnly: Scalars['Boolean'];
};

export type GetPostamatFilePrinterQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetPostamatFilePrinterQuery = { __typename?: 'Query', postamatById: { __typename?: 'Postamat', filePrinter: { __typename?: 'FilePrinter', filePath: string, isEnabled: boolean } } };

export type GetPostamatNetworkPrinterQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetPostamatNetworkPrinterQuery = { __typename?: 'Query', postamatById: { __typename?: 'Postamat', networkPrinter: { __typename?: 'NetworkPrinter', ipAddress: string, port: number, reconnectOnTimeout: boolean, isEnabled: boolean } } };

export type GetPostamatScannerQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetPostamatScannerQuery = { __typename?: 'Query', postamatById: { __typename?: 'Postamat', scanner: { __typename?: 'PostamatScanner', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string } } };

export type GetPostamatSerialPrinterQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetPostamatSerialPrinterQuery = { __typename?: 'Query', postamatById: { __typename?: 'Postamat', serialPrinter: { __typename?: 'SerialPrinter', isEnabled: boolean, settings: { __typename?: 'SerialPortSettings', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string } } } };

export type GetPostamatSettingsQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetPostamatSettingsQuery = { __typename?: 'Query', postamatById: { __typename?: 'Postamat', settings: { __typename?: 'PostamatSettings', isAutoUpdate: boolean, receptionWaitingListOnly: boolean, adminPhone?: string | null | undefined } } };

export type PostamatFilePrinterFragment = { __typename?: 'FilePrinter', filePath: string, isEnabled: boolean };

export type PostamatNetworkPrinterFragment = { __typename?: 'NetworkPrinter', ipAddress: string, port: number, reconnectOnTimeout: boolean, isEnabled: boolean };

export type PostamatScannerFragment = { __typename?: 'PostamatScanner', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string };

export type PostamatSerialPrinterFragment = { __typename?: 'SerialPrinter', isEnabled: boolean, settings: { __typename?: 'SerialPortSettings', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string } };

export type PostamatSettingsFragment = { __typename?: 'PostamatSettings', isAutoUpdate: boolean, receptionWaitingListOnly: boolean, adminPhone?: string | null | undefined };

export type UpdatePostamatFilePrinterMutationVariables = Exact<{
  input: UpdatePostamatFilePrinterInput;
}>;


export type UpdatePostamatFilePrinterMutation = { __typename?: 'Mutation', updatePostamatFilePrinter: { __typename?: 'UpdatePostamatFilePrinterPayload', postamat?: { __typename?: 'Postamat', filePrinter: { __typename?: 'FilePrinter', filePath: string, isEnabled: boolean } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type UpdatePostamatNetworkPrinterMutationVariables = Exact<{
  input: UpdatePostamatNetworkPrinterInput;
}>;


export type UpdatePostamatNetworkPrinterMutation = { __typename?: 'Mutation', updatePostamatNetworkPrinter: { __typename?: 'UpdatePostamatNetworkPrinterPayload', postamat?: { __typename?: 'Postamat', networkPrinter: { __typename?: 'NetworkPrinter', ipAddress: string, port: number, reconnectOnTimeout: boolean, isEnabled: boolean } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'FormatError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type UpdatePostamatScannerMutationVariables = Exact<{
  input: UpdatePostamatScannerInput;
}>;


export type UpdatePostamatScannerMutation = { __typename?: 'Mutation', updatePostamatScanner: { __typename?: 'UpdatePostamatScannerPayload', postamat?: { __typename?: 'Postamat', scanner: { __typename?: 'PostamatScanner', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type UpdatePostamatSerialPrinterMutationVariables = Exact<{
  input: UpdatePostamatSerialPrinterInput;
}>;


export type UpdatePostamatSerialPrinterMutation = { __typename?: 'Mutation', updatePostamatSerialPrinter: { __typename?: 'UpdatePostamatSerialPrinterPayload', postamat?: { __typename?: 'Postamat', serialPrinter: { __typename?: 'SerialPrinter', isEnabled: boolean, settings: { __typename?: 'SerialPortSettings', baudRate: number, dataBits: number, parity: Parity, stopBits: StopBits, portName: string } } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type UpdatePostamatSettingsMutationVariables = Exact<{
  input: UpdatePostamatSettingsInput;
}>;


export type UpdatePostamatSettingsMutation = { __typename?: 'Mutation', updatePostamatSettings: { __typename?: 'UpdatePostamatSettingsPayload', postamat?: { __typename?: 'Postamat', settings: { __typename?: 'PostamatSettings', isAutoUpdate: boolean, receptionWaitingListOnly: boolean, adminPhone?: string | null | undefined } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const PostamatFilePrinterFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostamatFilePrinter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FilePrinter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filePath"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}}]}}]} as unknown as DocumentNode<PostamatFilePrinterFragment, unknown>;
export const PostamatNetworkPrinterFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostamatNetworkPrinter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NetworkPrinter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ipAddress"}},{"kind":"Field","name":{"kind":"Name","value":"port"}},{"kind":"Field","name":{"kind":"Name","value":"reconnectOnTimeout"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}}]}}]} as unknown as DocumentNode<PostamatNetworkPrinterFragment, unknown>;
export const PostamatScannerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostamatScanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostamatScanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baudRate"}},{"kind":"Field","name":{"kind":"Name","value":"dataBits"}},{"kind":"Field","name":{"kind":"Name","value":"parity"}},{"kind":"Field","name":{"kind":"Name","value":"stopBits"}},{"kind":"Field","name":{"kind":"Name","value":"portName"}}]}}]} as unknown as DocumentNode<PostamatScannerFragment, unknown>;
export const PostamatSerialPrinterFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostamatSerialPrinter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SerialPrinter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baudRate"}},{"kind":"Field","name":{"kind":"Name","value":"dataBits"}},{"kind":"Field","name":{"kind":"Name","value":"parity"}},{"kind":"Field","name":{"kind":"Name","value":"stopBits"}},{"kind":"Field","name":{"kind":"Name","value":"portName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}}]}}]} as unknown as DocumentNode<PostamatSerialPrinterFragment, unknown>;
export const PostamatSettingsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostamatSettings"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostamatSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAutoUpdate"}},{"kind":"Field","name":{"kind":"Name","value":"receptionWaitingListOnly"}},{"kind":"Field","name":{"kind":"Name","value":"adminPhone"}}]}}]} as unknown as DocumentNode<PostamatSettingsFragment, unknown>;
export const GetPostamatFilePrinterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostamatFilePrinter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filePrinter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatFilePrinter"}}]}}]}}]}},...PostamatFilePrinterFragmentDoc.definitions]} as unknown as DocumentNode<GetPostamatFilePrinterQuery, GetPostamatFilePrinterQueryVariables>;
export const GetPostamatNetworkPrinterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostamatNetworkPrinter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"networkPrinter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatNetworkPrinter"}}]}}]}}]}},...PostamatNetworkPrinterFragmentDoc.definitions]} as unknown as DocumentNode<GetPostamatNetworkPrinterQuery, GetPostamatNetworkPrinterQueryVariables>;
export const GetPostamatScannerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostamatScanner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scanner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatScanner"}}]}}]}}]}},...PostamatScannerFragmentDoc.definitions]} as unknown as DocumentNode<GetPostamatScannerQuery, GetPostamatScannerQueryVariables>;
export const GetPostamatSerialPrinterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostamatSerialPrinter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serialPrinter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatSerialPrinter"}}]}}]}}]}},...PostamatSerialPrinterFragmentDoc.definitions]} as unknown as DocumentNode<GetPostamatSerialPrinterQuery, GetPostamatSerialPrinterQueryVariables>;
export const GetPostamatSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostamatSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatSettings"}}]}}]}}]}},...PostamatSettingsFragmentDoc.definitions]} as unknown as DocumentNode<GetPostamatSettingsQuery, GetPostamatSettingsQueryVariables>;
export const UpdatePostamatFilePrinterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostamatFilePrinter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostamatFilePrinterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostamatFilePrinter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filePrinter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatFilePrinter"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PostamatFilePrinterFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePostamatFilePrinterMutation, UpdatePostamatFilePrinterMutationVariables>;
export const UpdatePostamatNetworkPrinterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostamatNetworkPrinter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostamatNetworkPrinterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostamatNetworkPrinter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"networkPrinter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatNetworkPrinter"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PostamatNetworkPrinterFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePostamatNetworkPrinterMutation, UpdatePostamatNetworkPrinterMutationVariables>;
export const UpdatePostamatScannerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostamatScanner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostamatScannerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostamatScanner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scanner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatScanner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PostamatScannerFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePostamatScannerMutation, UpdatePostamatScannerMutationVariables>;
export const UpdatePostamatSerialPrinterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostamatSerialPrinter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostamatSerialPrinterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostamatSerialPrinter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"serialPrinter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatSerialPrinter"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PostamatSerialPrinterFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePostamatSerialPrinterMutation, UpdatePostamatSerialPrinterMutationVariables>;
export const UpdatePostamatSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostamatSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostamatSettingsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostamatSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostamatSettings"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PostamatSettingsFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePostamatSettingsMutation, UpdatePostamatSettingsMutationVariables>;