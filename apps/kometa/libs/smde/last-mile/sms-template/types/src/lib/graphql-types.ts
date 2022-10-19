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

export type DeleteLastMileSmsTemplateInput = {
  eventType: NotificationEventType;
  lastMileId: Scalars['ID'];
  typeOrder: TypeOrder;
};

/** События для уведомлений */
export enum NotificationEventType {
  /** Принятие упаковочного места в последней миле */
  PackingPlaceAccepting = 'PACKING_PLACE_ACCEPTING',
  /** Отмена упаковочного места */
  PackingPlaceCanceled = 'PACKING_PLACE_CANCELED',
  /** Выдача упаковочного места */
  PackingPlaceIssuing = 'PACKING_PLACE_ISSUING',
  /** Возврат упаковочного места */
  PackingPlaceReturning = 'PACKING_PLACE_RETURNING',
  /** Отправка упаковочного места */
  PackingPlaceSending = 'PACKING_PLACE_SENDING',
  /** Пин код для получения товара */
  PinForIssuing = 'PIN_FOR_ISSUING',
  /** Пин код для возврата товара */
  PinForReturning = 'PIN_FOR_RETURNING'
}

export enum TypeOrder {
  Emex = 'Emex'
}

export type UpdateLastMileSmsTemplateInput = {
  /** Required */
  eventType: NotificationEventType;
  /** Required */
  lastMileId: Scalars['ID'];
  /** Required */
  smsTemplateId: Scalars['ID'];
  /** Required */
  typeOrder: TypeOrder;
};

export type DeleteLastMileSmsTemplateMutationVariables = Exact<{
  input: DeleteLastMileSmsTemplateInput;
}>;


export type DeleteLastMileSmsTemplateMutation = { __typename?: 'Mutation', deleteLastMileSmsTemplate: { __typename?: 'DeleteLastMileSmsTemplatePayload', lastMileSmsTemplate?: { __typename?: 'LastMileSmsTemplate', lastMileId: string, typeOrder: TypeOrder, eventType: NotificationEventType, smsTemplateId: string, smsTemplate: { __typename?: 'SmsTemplate', id: string, name: string } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetLastMileSmsTemplatesQueryVariables = Exact<{
  lastMileId: Scalars['ID'];
}>;


export type GetLastMileSmsTemplatesQuery = { __typename?: 'Query', lastMileById: { __typename?: 'Postamat', id: string, smsTemplates: Array<{ __typename?: 'LastMileSmsTemplate', lastMileId: string, typeOrder: TypeOrder, eventType: NotificationEventType, smsTemplateId: string, smsTemplate: { __typename?: 'SmsTemplate', id: string, name: string } }> } };

export type LastMileSmsTemplateFragment = { __typename?: 'LastMileSmsTemplate', lastMileId: string, typeOrder: TypeOrder, eventType: NotificationEventType, smsTemplateId: string, smsTemplate: { __typename?: 'SmsTemplate', id: string, name: string } };

export type UpdateLastMileSmsTemplateMutationVariables = Exact<{
  input: UpdateLastMileSmsTemplateInput;
}>;


export type UpdateLastMileSmsTemplateMutation = { __typename?: 'Mutation', updateLastMileSmsTemplate: { __typename?: 'UpdateLastMileSmsTemplatePayload', lastMileSmsTemplate?: { __typename?: 'LastMileSmsTemplate', lastMileId: string, typeOrder: TypeOrder, eventType: NotificationEventType, smsTemplateId: string, smsTemplate: { __typename?: 'SmsTemplate', id: string, name: string } } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const LastMileSmsTemplateFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LastMileSmsTemplate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LastMileSmsTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMileId"}},{"kind":"Field","name":{"kind":"Name","value":"typeOrder"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"smsTemplateId"}},{"kind":"Field","name":{"kind":"Name","value":"smsTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<LastMileSmsTemplateFragment, unknown>;
export const DeleteLastMileSmsTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLastMileSmsTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteLastMileSmsTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLastMileSmsTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMileSmsTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LastMileSmsTemplate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...LastMileSmsTemplateFragmentDoc.definitions]} as unknown as DocumentNode<DeleteLastMileSmsTemplateMutation, DeleteLastMileSmsTemplateMutationVariables>;
export const GetLastMileSmsTemplatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastMileSmsTemplates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMileById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"smsTemplates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LastMileSmsTemplate"}}]}}]}}]}},...LastMileSmsTemplateFragmentDoc.definitions]} as unknown as DocumentNode<GetLastMileSmsTemplatesQuery, GetLastMileSmsTemplatesQueryVariables>;
export const UpdateLastMileSmsTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLastMileSmsTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLastMileSmsTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLastMileSmsTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMileSmsTemplate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LastMileSmsTemplate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...LastMileSmsTemplateFragmentDoc.definitions]} as unknown as DocumentNode<UpdateLastMileSmsTemplateMutation, UpdateLastMileSmsTemplateMutationVariables>;