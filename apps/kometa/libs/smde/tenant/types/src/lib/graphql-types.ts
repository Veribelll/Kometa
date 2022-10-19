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

/** Реквизиты банковского счета */
export type AccountBankInput = {
  /**
   * Наименование банка
   * Required
   * Max Length: 70
   */
  bankName: Scalars['String'];
  /**
   * БИК - банковский идентификационный код
   * Required
   * Length: 9
   */
  bic: Scalars['String'];
  /**
   * Корреспондентский счёт
   * Required
   * Length: 20
   */
  correspondentAccount: Scalars['String'];
  /**
   * Расчетный счет
   * Required
   * Length: 20
   */
  paymentAccount: Scalars['String'];
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

/** Компания */
export type CreateCompanyInput = {
  /**
   * Реквизиты банковского счета
   * Required
   */
  accountBank: AccountBankInput;
  /**
   * Фактический адрес
   * Max Length: 200
   */
  actualAddress?: InputMaybe<Scalars['String']>;
  /**
   * Адрес
   * Required
   * Max Length: 200
   */
  address: Scalars['String'];
  /**
   * ИНН - Индивидуальный номер налогоплательщика
   * Required
   * Length: 10
   */
  inn: Scalars['String'];
  /**
   * КПП - Код причины постановки
   * Length: 9
   */
  kpp?: InputMaybe<Scalars['String']>;
  /**
   * Почтовый адрес
   * Max Length: 200
   */
  mailingAddress?: InputMaybe<Scalars['String']>;
  /**
   * Наименование
   * Required
   * Max Length: 100
   */
  name: Scalars['String'];
  /**
   * ОГРН - Основной государственный регистрационный номер
   * Length: 13
   */
  ogrn?: InputMaybe<Scalars['String']>;
  /**
   * Код ОКПО - Код в Общероссийском классификаторе предприятий и организаций
   * Length: 8
   */
  okpo?: InputMaybe<Scalars['String']>;
};

export type CreateContractorInput = {
  company?: InputMaybe<CreateCompanyInput>;
  individualEntrepreneur?: InputMaybe<CreateIndividualEntrepreneurInput>;
};

/** Индивидуальный предприниматель */
export type CreateIndividualEntrepreneurInput = {
  /**
   * Реквизиты банковского счета
   * Required
   */
  accountBank: AccountBankInput;
  /**
   * Фактический адрес
   * Max Length: 200
   */
  actualAddress?: InputMaybe<Scalars['String']>;
  /**
   * Адрес
   * Required
   * Max Length: 200
   */
  address: Scalars['String'];
  /**
   * ИНН - Индивидуальный номер налогоплательщика
   * Required
   * Length: 12
   */
  inn: Scalars['String'];
  /**
   * Почтовый адрес
   * Max Length: 200
   */
  mailingAddress?: InputMaybe<Scalars['String']>;
  /**
   * Наименование
   * Required
   * Max Length: 100
   */
  name: Scalars['String'];
  /**
   * ОГРНИП - Основной государственный регистрационный номер индивидуального предпринимателя
   * Length: 15
   */
  ogrnip?: InputMaybe<Scalars['String']>;
  /**
   * Код ОКПО - Код в Общероссийском классификаторе предприятий и организаций
   * Length: 10
   */
  okpo?: InputMaybe<Scalars['String']>;
};

export type CreateTenantInput = {
  /**
   * Required
   * Max Length: 256
   */
  adminEmailAddress: Scalars['String'];
  /**
   * Required
   * Max Length: 128
   */
  adminPassword: Scalars['String'];
  /** Required */
  contractor: CreateContractorInput;
  /** Required */
  emailForDocuments: Scalars['String'];
  /**
   * Required
   * Max Length: 256
   */
  name: Scalars['String'];
};

export type DeleteTenantInput = {
  /** Required */
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

export type ListFilterInputTypeOfTenantConnectionStringFilterInput = {
  all?: InputMaybe<TenantConnectionStringFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<TenantConnectionStringFilterInput>;
  some?: InputMaybe<TenantConnectionStringFilterInput>;
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

export const SortEnumType = {
  Asc: 'ASC',
  Desc: 'DESC'
} as const;

export type SortEnumType = typeof SortEnumType[keyof typeof SortEnumType];
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

export type TenantConnectionStringFilterInput = {
  and?: InputMaybe<Array<TenantConnectionStringFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TenantConnectionStringFilterInput>>;
  tenantId?: InputMaybe<IdOperationFilterInput>;
  value?: InputMaybe<StringOperationFilterInput>;
};

export type TenantFilterInput = {
  and?: InputMaybe<Array<TenantFilterInput>>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  connectionStrings?: InputMaybe<ListFilterInputTypeOfTenantConnectionStringFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  extraProperties?: InputMaybe<ExtraPropertyDictionaryFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TenantFilterInput>>;
};

export type TenantSortInput = {
  concurrencyStamp?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

export type UpdateTenantInput = {
  /** Required */
  emailForDocuments: Scalars['String'];
  /** Required */
  id: Scalars['ID'];
  /**
   * Required
   * Max Length: 256
   */
  name: Scalars['String'];
};

export type CreateTenantMutationVariables = Exact<{
  input: CreateTenantInput;
}>;


export type CreateTenantMutation = { __typename?: 'Mutation', createTenant: { __typename?: 'CreateTenantPayload', tenant?: { __typename?: 'Tenant', id: string, name: string, emailForDocuments: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'TenantNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, tenant: { __typename?: 'Tenant', id: string, name: string } } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteTenantMutationVariables = Exact<{
  input: DeleteTenantInput;
}>;


export type DeleteTenantMutation = { __typename?: 'Mutation', deleteTenant: { __typename?: 'DeleteTenantPayload', tenant?: { __typename?: 'Tenant', id: string, name: string, emailForDocuments: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetTenantQueryVariables = Exact<{
  where?: InputMaybe<TenantFilterInput>;
}>;


export type GetTenantQuery = { __typename?: 'Query', tenant?: { __typename?: 'Tenant', id: string, name: string, emailForDocuments: string } | null | undefined };

export type GetTenantsQueryVariables = Exact<{
  where?: InputMaybe<TenantFilterInput>;
  order?: InputMaybe<Array<TenantSortInput> | TenantSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetTenantsQuery = { __typename?: 'Query', tenants?: { __typename?: 'TenantCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Tenant', id: string, name: string, emailForDocuments: string }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type TenantIsEmailUniqueQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type TenantIsEmailUniqueQuery = { __typename?: 'Query', isEmailUnique: boolean };

export type TenantIsNameUniqueQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type TenantIsNameUniqueQuery = { __typename?: 'Query', tenantsAny: boolean };

export type TenantFragment = { __typename?: 'Tenant', id: string, name: string, emailForDocuments: string };

export type UpdateTenantMutationVariables = Exact<{
  input: UpdateTenantInput;
}>;


export type UpdateTenantMutation = { __typename?: 'Mutation', updateTenant: { __typename?: 'UpdateTenantPayload', tenant?: { __typename?: 'Tenant', id: string, name: string, emailForDocuments: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'TenantNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, tenant: { __typename?: 'Tenant', id: string, name: string } } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const TenantFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tenant"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"emailForDocuments"}}]}}]} as unknown as DocumentNode<TenantFragment, unknown>;
export const CreateTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTenantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tenant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TenantNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...TenantFragmentDoc.definitions]} as unknown as DocumentNode<CreateTenantMutation, CreateTenantMutationVariables>;
export const DeleteTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTenantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tenant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...TenantFragmentDoc.definitions]} as unknown as DocumentNode<DeleteTenantMutation, DeleteTenantMutationVariables>;
export const GetTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TenantFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tenant"}}]}}]}},...TenantFragmentDoc.definitions]} as unknown as DocumentNode<GetTenantQuery, GetTenantQueryVariables>;
export const GetTenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TenantFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TenantSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tenant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...TenantFragmentDoc.definitions]} as unknown as DocumentNode<GetTenantsQuery, GetTenantsQueryVariables>;
export const TenantIsEmailUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TenantIsEmailUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isEmailUnique"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<TenantIsEmailUniqueQuery, TenantIsEmailUniqueQueryVariables>;
export const TenantIsNameUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TenantIsNameUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenantsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}]}]}}]} as unknown as DocumentNode<TenantIsNameUniqueQuery, TenantIsNameUniqueQueryVariables>;
export const UpdateTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTenantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tenant"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TenantNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...TenantFragmentDoc.definitions]} as unknown as DocumentNode<UpdateTenantMutation, UpdateTenantMutationVariables>;