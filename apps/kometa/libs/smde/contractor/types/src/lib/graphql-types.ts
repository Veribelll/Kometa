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
export type AccountBankFilterInput = {
  and?: InputMaybe<Array<AccountBankFilterInput>>;
  /** Наименование банка */
  bankName?: InputMaybe<StringOperationFilterInput>;
  /** БИК - банковский идентификационный код */
  bic?: InputMaybe<StringOperationFilterInput>;
  /** Корреспондентский счёт */
  correspondentAccount?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AccountBankFilterInput>>;
  /** Расчетный счет */
  paymentAccount?: InputMaybe<StringOperationFilterInput>;
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

/** Реквизиты банковского счета */
export type AccountBankSortInput = {
  /** Наименование банка */
  bankName?: InputMaybe<SortEnumType>;
  /** БИК - банковский идентификационный код */
  bic?: InputMaybe<SortEnumType>;
  /** Корреспондентский счёт */
  correspondentAccount?: InputMaybe<SortEnumType>;
  /** Расчетный счет */
  paymentAccount?: InputMaybe<SortEnumType>;
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

/** Контрагент */
export type ContractorFilterInput = {
  /** Реквизиты банковского счета */
  accountBank?: InputMaybe<AccountBankFilterInput>;
  /** Фактический адрес */
  actualAddress?: InputMaybe<StringOperationFilterInput>;
  /** Адрес */
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<ContractorFilterInput>>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  extraProperties?: InputMaybe<ExtraPropertyDictionaryFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  /** ИНН - Индивидуальный номер налогоплательщика */
  inn?: InputMaybe<StringOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isHost?: InputMaybe<BooleanOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Почтовый адрес */
  mailingAddress?: InputMaybe<StringOperationFilterInput>;
  /** Наименование */
  name?: InputMaybe<StringOperationFilterInput>;
  /** Код ОКПО - Код в Общероссийском классификаторе предприятий и организаций */
  okpo?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ContractorFilterInput>>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

/** Контрагент */
export type ContractorSortInput = {
  /** Реквизиты банковского счета */
  accountBank?: InputMaybe<AccountBankSortInput>;
  /** Фактический адрес */
  actualAddress?: InputMaybe<SortEnumType>;
  /** Адрес */
  address?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  /** ИНН - Индивидуальный номер налогоплательщика */
  inn?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isHost?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  /** Почтовый адрес */
  mailingAddress?: InputMaybe<SortEnumType>;
  /** Наименование */
  name?: InputMaybe<SortEnumType>;
  /** Код ОКПО - Код в Общероссийском классификаторе предприятий и организаций */
  okpo?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
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

export type DeleteCompanyInput = {
  id: Scalars['ID'];
};

export type DeleteIndividualEntrepreneurInput = {
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

/** Компания */
export type UpdateCompanyInput = {
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
  /** Required */
  id: Scalars['ID'];
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

/** Индивидуальный предприниматель */
export type UpdateIndividualEntrepreneurInput = {
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
  /** Required */
  id: Scalars['ID'];
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

export type AccountBankFragment = { __typename?: 'AccountBank', bankName: string, bic: string, correspondentAccount: string, paymentAccount: string };

export type CompanyDetailFragment = { __typename?: 'Company', kpp?: string | null | undefined, okpo?: string | null | undefined, ogrn?: string | null | undefined, actualAddress?: string | null | undefined, mailingAddress?: string | null | undefined, id: string, name: string, address: string, inn: string, isHost: boolean, accountBank: { __typename?: 'AccountBank', bankName: string, bic: string, correspondentAccount: string, paymentAccount: string } };

export type CompanyFragment = { __typename?: 'Company', id: string, name: string, address: string, inn: string, isHost: boolean };

export type ContractorIsInnUniqueQueryVariables = Exact<{
  inn: Scalars['String'];
}>;


export type ContractorIsInnUniqueQuery = { __typename?: 'Query', contractorsAny: boolean };

export type ContractorIsNameUniqueQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type ContractorIsNameUniqueQuery = { __typename?: 'Query', contractorsAny: boolean };

type Contractor_Company_Fragment = { __typename?: 'Company', id: string, name: string, address: string, inn: string, isHost: boolean };

type Contractor_IndividualEntrepreneur_Fragment = { __typename?: 'IndividualEntrepreneur', id: string, name: string, address: string, inn: string, isHost: boolean };

export type ContractorFragment = Contractor_Company_Fragment | Contractor_IndividualEntrepreneur_Fragment;

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'CreateCompanyPayload', company?: { __typename?: 'Company', id: string, name: string, address: string, inn: string, isHost: boolean } | null | undefined, errors?: Array<{ __typename?: 'ContractorInnAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | { __typename?: 'ContractorNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type CreateIndividualEntrepreneurMutationVariables = Exact<{
  input: CreateIndividualEntrepreneurInput;
}>;


export type CreateIndividualEntrepreneurMutation = { __typename?: 'Mutation', createIndividualEntrepreneur: { __typename?: 'CreateIndividualEntrepreneurPayload', individualEntrepreneur?: { __typename?: 'IndividualEntrepreneur', id: string, name: string, address: string, inn: string, isHost: boolean } | null | undefined, errors?: Array<{ __typename?: 'ContractorInnAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | { __typename?: 'ContractorNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteCompanyMutationVariables = Exact<{
  input: DeleteCompanyInput;
}>;


export type DeleteCompanyMutation = { __typename?: 'Mutation', deleteCompany: { __typename?: 'DeleteCompanyPayload', company?: { __typename?: 'Company', id: string, name: string, address: string, inn: string, isHost: boolean } | null | undefined, errors?: Array<{ __typename?: 'ContractorHostDeletionError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteIndividualEntrepreneurMutationVariables = Exact<{
  input: DeleteIndividualEntrepreneurInput;
}>;


export type DeleteIndividualEntrepreneurMutation = { __typename?: 'Mutation', deleteIndividualEntrepreneur: { __typename?: 'DeleteIndividualEntrepreneurPayload', individualEntrepreneur?: { __typename?: 'IndividualEntrepreneur', id: string, name: string, address: string, inn: string, isHost: boolean } | null | undefined, errors?: Array<{ __typename?: 'ContractorHostDeletionError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetCompanyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCompanyQuery = { __typename?: 'Query', companyById: { __typename?: 'Company', kpp?: string | null | undefined, okpo?: string | null | undefined, ogrn?: string | null | undefined, actualAddress?: string | null | undefined, mailingAddress?: string | null | undefined, id: string, name: string, address: string, inn: string, isHost: boolean, accountBank: { __typename?: 'AccountBank', bankName: string, bic: string, correspondentAccount: string, paymentAccount: string } } };

export type GetContractorsQueryVariables = Exact<{
  where?: InputMaybe<ContractorFilterInput>;
  order?: InputMaybe<Array<ContractorSortInput> | ContractorSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetContractorsQuery = { __typename?: 'Query', contractors?: { __typename?: 'ContractorCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Company', id: string, name: string, address: string, inn: string, isHost: boolean } | { __typename?: 'IndividualEntrepreneur', id: string, name: string, address: string, inn: string, isHost: boolean }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type GetIndividualEntrepreneurQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetIndividualEntrepreneurQuery = { __typename?: 'Query', individualEntrepreneurById: { __typename?: 'IndividualEntrepreneur', okpo?: string | null | undefined, ogrnip?: string | null | undefined, actualAddress?: string | null | undefined, mailingAddress?: string | null | undefined, id: string, name: string, address: string, inn: string, isHost: boolean, accountBank: { __typename?: 'AccountBank', bankName: string, bic: string, correspondentAccount: string, paymentAccount: string } } };

export type IndividualEntrepreneurDetailFragment = { __typename?: 'IndividualEntrepreneur', okpo?: string | null | undefined, ogrnip?: string | null | undefined, actualAddress?: string | null | undefined, mailingAddress?: string | null | undefined, id: string, name: string, address: string, inn: string, isHost: boolean, accountBank: { __typename?: 'AccountBank', bankName: string, bic: string, correspondentAccount: string, paymentAccount: string } };

export type IndividualEntrepreneurFragment = { __typename?: 'IndividualEntrepreneur', id: string, name: string, address: string, inn: string, isHost: boolean };

export type UpdateCompanyMutationVariables = Exact<{
  input: UpdateCompanyInput;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany: { __typename?: 'UpdateCompanyPayload', company?: { __typename?: 'Company', id: string, name: string, address: string, inn: string, isHost: boolean } | null | undefined, errors?: Array<{ __typename?: 'ContractorInnAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | { __typename?: 'ContractorNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type UpdateIndividualEntrepreneurMutationVariables = Exact<{
  input: UpdateIndividualEntrepreneurInput;
}>;


export type UpdateIndividualEntrepreneurMutation = { __typename?: 'Mutation', updateIndividualEntrepreneur: { __typename?: 'UpdateIndividualEntrepreneurPayload', individualEntrepreneur?: { __typename?: 'IndividualEntrepreneur', id: string, name: string, address: string, inn: string, isHost: boolean } | null | undefined, errors?: Array<{ __typename?: 'ContractorInnAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | { __typename?: 'ContractorNameAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string } } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const CompanyFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"isHost"}}]}}]} as unknown as DocumentNode<CompanyFragment, unknown>;
export const AccountBankFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountBank"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountBank"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"bic"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentAccount"}},{"kind":"Field","name":{"kind":"Name","value":"paymentAccount"}}]}}]} as unknown as DocumentNode<AccountBankFragment, unknown>;
export const CompanyDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}},{"kind":"Field","name":{"kind":"Name","value":"accountBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountBank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"okpo"}},{"kind":"Field","name":{"kind":"Name","value":"ogrn"}},{"kind":"Field","name":{"kind":"Name","value":"actualAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mailingAddress"}}]}},...CompanyFragmentDoc.definitions,...AccountBankFragmentDoc.definitions]} as unknown as DocumentNode<CompanyDetailFragment, unknown>;
export const ContractorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Contractor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contractor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"isHost"}}]}}]} as unknown as DocumentNode<ContractorFragment, unknown>;
export const IndividualEntrepreneurFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IndividualEntrepreneur"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IndividualEntrepreneur"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"isHost"}}]}}]} as unknown as DocumentNode<IndividualEntrepreneurFragment, unknown>;
export const IndividualEntrepreneurDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IndividualEntrepreneurDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IndividualEntrepreneur"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IndividualEntrepreneur"}},{"kind":"Field","name":{"kind":"Name","value":"accountBank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountBank"}}]}},{"kind":"Field","name":{"kind":"Name","value":"okpo"}},{"kind":"Field","name":{"kind":"Name","value":"ogrnip"}},{"kind":"Field","name":{"kind":"Name","value":"actualAddress"}},{"kind":"Field","name":{"kind":"Name","value":"mailingAddress"}}]}},...IndividualEntrepreneurFragmentDoc.definitions,...AccountBankFragmentDoc.definitions]} as unknown as DocumentNode<IndividualEntrepreneurDetailFragment, unknown>;
export const ContractorIsInnUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContractorIsInnUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inn"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractorsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"inn"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inn"}}}]}}]}}]}]}}]} as unknown as DocumentNode<ContractorIsInnUniqueQuery, ContractorIsInnUniqueQueryVariables>;
export const ContractorIsNameUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContractorIsNameUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractorsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}]}]}}]} as unknown as DocumentNode<ContractorIsNameUniqueQuery, ContractorIsNameUniqueQueryVariables>;
export const CreateCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorInnAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...CompanyFragmentDoc.definitions]} as unknown as DocumentNode<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const CreateIndividualEntrepreneurDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateIndividualEntrepreneur"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateIndividualEntrepreneurInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIndividualEntrepreneur"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"individualEntrepreneur"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IndividualEntrepreneur"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorInnAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...IndividualEntrepreneurFragmentDoc.definitions]} as unknown as DocumentNode<CreateIndividualEntrepreneurMutation, CreateIndividualEntrepreneurMutationVariables>;
export const DeleteCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorHostDeletionError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...CompanyFragmentDoc.definitions]} as unknown as DocumentNode<DeleteCompanyMutation, DeleteCompanyMutationVariables>;
export const DeleteIndividualEntrepreneurDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteIndividualEntrepreneur"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteIndividualEntrepreneurInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteIndividualEntrepreneur"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"individualEntrepreneur"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IndividualEntrepreneur"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorHostDeletionError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...IndividualEntrepreneurFragmentDoc.definitions]} as unknown as DocumentNode<DeleteIndividualEntrepreneurMutation, DeleteIndividualEntrepreneurMutationVariables>;
export const GetCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyDetail"}}]}}]}},...CompanyDetailFragmentDoc.definitions]} as unknown as DocumentNode<GetCompanyQuery, GetCompanyQueryVariables>;
export const GetContractorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContractors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"isHost"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetContractorsQuery, GetContractorsQueryVariables>;
export const GetIndividualEntrepreneurDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIndividualEntrepreneur"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"individualEntrepreneurById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IndividualEntrepreneurDetail"}}]}}]}},...IndividualEntrepreneurDetailFragmentDoc.definitions]} as unknown as DocumentNode<GetIndividualEntrepreneurQuery, GetIndividualEntrepreneurQueryVariables>;
export const UpdateCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorInnAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...CompanyFragmentDoc.definitions]} as unknown as DocumentNode<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const UpdateIndividualEntrepreneurDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateIndividualEntrepreneur"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateIndividualEntrepreneurInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateIndividualEntrepreneur"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"individualEntrepreneur"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IndividualEntrepreneur"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorInnAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContractorNameAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...IndividualEntrepreneurFragmentDoc.definitions]} as unknown as DocumentNode<UpdateIndividualEntrepreneurMutation, UpdateIndividualEntrepreneurMutationVariables>;