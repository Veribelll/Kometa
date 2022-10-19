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

export type LastMileAccountIdsFilterInput = {
  and?: InputMaybe<Array<LastMileAccountIdsFilterInput>>;
  emexAccountId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  or?: InputMaybe<Array<LastMileAccountIdsFilterInput>>;
  smsAccountId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

export type LastMileAccountIdsSortInput = {
  emexAccountId?: InputMaybe<SortEnumType>;
  smsAccountId?: InputMaybe<SortEnumType>;
};

/** Последняя миля */
export type LastMileFilterInput = {
  /** Ключи доступа */
  accessKeys?: InputMaybe<ListFilterInputTypeOfAccessKeyFilterInput>;
  /** Ид аккаунтов */
  accountIds?: InputMaybe<LastMileAccountIdsFilterInput>;
  /** Адрес */
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<LastMileFilterInput>>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  /** Внешний ID */
  externalId?: InputMaybe<StringOperationFilterInput>;
  extraProperties?: InputMaybe<ExtraPropertyDictionaryFilterInput>;
  /** Заводской номер */
  factoryNumber?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Наименование */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<LastMileFilterInput>>;
  /** Сроки возврата заказов */
  returnPeriods?: InputMaybe<ListFilterInputTypeOfLastMileReturnPeriodFilterInput>;
  /** Смс шаблоны */
  smsTemplates?: InputMaybe<ListFilterInputTypeOfLastMileSmsTemplateFilterInput>;
  /** Статус */
  status?: InputMaybe<LastMileStatusOperationFilterInput>;
  /** Сроки хранения заказов */
  storagePeriods?: InputMaybe<ListFilterInputTypeOfLastMileStoragePeriodFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Код доступа */
  token?: InputMaybe<StringOperationFilterInput>;
};

export type LastMileReturnPeriodFilterInput = {
  and?: InputMaybe<Array<LastMileReturnPeriodFilterInput>>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  lastMileId?: InputMaybe<IdOperationFilterInput>;
  or?: InputMaybe<Array<LastMileReturnPeriodFilterInput>>;
  /** Период возврата заказа в часах */
  period?: InputMaybe<ComparableInt32OperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  typeOrder?: InputMaybe<TypeOrderFilterInput>;
};

export type LastMileSmsTemplateFilterInput = {
  and?: InputMaybe<Array<LastMileSmsTemplateFilterInput>>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  eventType?: InputMaybe<NotificationEventTypeOperationFilterInput>;
  or?: InputMaybe<Array<LastMileSmsTemplateFilterInput>>;
  smsTemplateId?: InputMaybe<IdOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  typeOrder?: InputMaybe<TypeOrderFilterInput>;
};

/** Последняя миля */
export type LastMileSortInput = {
  /** Ид аккаунтов */
  accountIds?: InputMaybe<LastMileAccountIdsSortInput>;
  /** Адрес */
  address?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  contractorId?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  /** Внешний ID */
  externalId?: InputMaybe<SortEnumType>;
  /** Заводской номер */
  factoryNumber?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  /** Наименование */
  name?: InputMaybe<SortEnumType>;
  /** Статус */
  status?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
  /** Код доступа */
  token?: InputMaybe<SortEnumType>;
};

export enum LastMileStatus {
  Activated = 'ACTIVATED',
  Deactivated = 'DEACTIVATED'
}

export type LastMileStatusOperationFilterInput = {
  eq?: InputMaybe<LastMileStatus>;
  in?: InputMaybe<Array<LastMileStatus>>;
  neq?: InputMaybe<LastMileStatus>;
  nin?: InputMaybe<Array<LastMileStatus>>;
};

export type LastMileStoragePeriodFilterInput = {
  and?: InputMaybe<Array<LastMileStoragePeriodFilterInput>>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  lastMileId?: InputMaybe<IdOperationFilterInput>;
  or?: InputMaybe<Array<LastMileStoragePeriodFilterInput>>;
  /** Период хранения заказа в часах */
  period?: InputMaybe<ComparableInt32OperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  typeOrder?: InputMaybe<TypeOrderFilterInput>;
};

export type ListFilterInputTypeOfAccessKeyFilterInput = {
  all?: InputMaybe<AccessKeyFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<AccessKeyFilterInput>;
  some?: InputMaybe<AccessKeyFilterInput>;
};

export type ListFilterInputTypeOfLastMileReturnPeriodFilterInput = {
  all?: InputMaybe<LastMileReturnPeriodFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LastMileReturnPeriodFilterInput>;
  some?: InputMaybe<LastMileReturnPeriodFilterInput>;
};

export type ListFilterInputTypeOfLastMileSmsTemplateFilterInput = {
  all?: InputMaybe<LastMileSmsTemplateFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LastMileSmsTemplateFilterInput>;
  some?: InputMaybe<LastMileSmsTemplateFilterInput>;
};

export type ListFilterInputTypeOfLastMileStoragePeriodFilterInput = {
  all?: InputMaybe<LastMileStoragePeriodFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LastMileStoragePeriodFilterInput>;
  some?: InputMaybe<LastMileStoragePeriodFilterInput>;
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

export type NotificationEventTypeOperationFilterInput = {
  eq?: InputMaybe<NotificationEventType>;
  in?: InputMaybe<Array<NotificationEventType>>;
  neq?: InputMaybe<NotificationEventType>;
  nin?: InputMaybe<Array<NotificationEventType>>;
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

export type TypeOrderFilterInput = {
  and?: InputMaybe<Array<TypeOrderFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TypeOrderFilterInput>>;
  value?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type UpdateLastMileAccountsInput = {
  emexAccountId?: InputMaybe<Scalars['ID']>;
  /** Required */
  lastMileId: Scalars['ID'];
  smsAccountId?: InputMaybe<Scalars['ID']>;
};

export type GetDataForUpdateLastMileAccountsQueryVariables = Exact<{
  lastMileId: Scalars['ID'];
}>;


export type GetDataForUpdateLastMileAccountsQuery = { __typename?: 'Query', lastMileById: { __typename?: 'Postamat', id: string, accountIds: { __typename?: 'LastMileAccountIds', emexAccountId?: string | null | undefined, smsAccountId?: string | null | undefined } }, emexAccounts?: { __typename?: 'EmexAccountCollectionSegment', items?: Array<{ __typename?: 'EmexAccount', id: string, name: string }> | null | undefined } | null | undefined, smsAccounts?: { __typename?: 'SmsAccountCollectionSegment', items?: Array<{ __typename?: 'SmsCenterAccount', id: string, name: string }> | null | undefined } | null | undefined };

export type GetLastMileQueryVariables = Exact<{
  where?: InputMaybe<LastMileFilterInput>;
}>;


export type GetLastMileQuery = { __typename?: 'Query', lastMile?: { __typename?: 'Postamat', status: LastMileStatus, id: string, name: string, address: string, externalId: string } | null | undefined };

export type GetLastMilesQueryVariables = Exact<{
  where?: InputMaybe<LastMileFilterInput>;
  order?: InputMaybe<Array<LastMileSortInput> | LastMileSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetLastMilesQuery = { __typename?: 'Query', lastMiles?: { __typename?: 'LastMileCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Postamat', id: string, name: string, address: string, externalId: string }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type LastMileDetailFragment = { __typename?: 'Postamat', status: LastMileStatus, id: string, name: string, address: string, externalId: string };

export type LastMileFragment = { __typename?: 'Postamat', id: string, name: string, address: string, externalId: string };

export type UpdateLastMileAccountsMutationVariables = Exact<{
  input: UpdateLastMileAccountsInput;
}>;


export type UpdateLastMileAccountsMutation = { __typename?: 'Mutation', updateLastMileAccounts: { __typename?: 'UpdateLastMileAccountsPayload', lastMile?: { __typename?: 'Postamat', id: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const LastMileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LastMile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LastMile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]} as unknown as DocumentNode<LastMileFragment, unknown>;
export const LastMileDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LastMileDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LastMile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LastMile"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},...LastMileFragmentDoc.definitions]} as unknown as DocumentNode<LastMileDetailFragment, unknown>;
export const GetDataForUpdateLastMileAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataForUpdateLastMileAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMileById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastMileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountIds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"smsAccountId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"emexAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"smsAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetDataForUpdateLastMileAccountsQuery, GetDataForUpdateLastMileAccountsQueryVariables>;
export const GetLastMileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastMile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LastMileFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LastMileDetail"}}]}}]}},...LastMileDetailFragmentDoc.definitions]} as unknown as DocumentNode<GetLastMileQuery, GetLastMileQueryVariables>;
export const GetLastMilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLastMiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LastMileFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LastMileSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetLastMilesQuery, GetLastMilesQueryVariables>;
export const UpdateLastMileAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLastMileAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLastMileAccountsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLastMileAccounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateLastMileAccountsMutation, UpdateLastMileAccountsMutationVariables>;