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

export type ComparableDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  neq?: InputMaybe<Scalars['Decimal']>;
  ngt?: InputMaybe<Scalars['Decimal']>;
  ngte?: InputMaybe<Scalars['Decimal']>;
  nin?: InputMaybe<Array<Scalars['Decimal']>>;
  nlt?: InputMaybe<Scalars['Decimal']>;
  nlte?: InputMaybe<Scalars['Decimal']>;
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

export type ComparableInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<Scalars['Long']>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<Scalars['Long']>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
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

export type CreateEmexOrderInput = {
  /**
   * ????????????
   * Required
   */
  customer: EmexCustomerInput;
  /**
   * ?????????????? ID ????????????
   * Required
   */
  externalId: Scalars['String'];
  /**
   * ?????????????????????????? ???????????????? Emex
   * Required
   * Range from 0 to 1,7976931348623157E+308
   */
  globalId: Scalars['Long'];
  /**
   * ????????????
   * Required
   * Min Length: 1
   */
  products: Array<EmexProductInput>;
};

export type CreateEmexProductInput = {
  orderId: Scalars['ID'];
  product: EmexProductInput;
};

export type DeleteEmexOrderInput = {
  id: Scalars['ID'];
};

export type DeleteEmexProductInput = {
  orderId: Scalars['ID'];
  productId: Scalars['ID'];
};

/** ???????????? Emex */
export type EmexCustomerInput = {
  /**
   * Email
   * Max Length: 255
   */
  email?: InputMaybe<Scalars['String']>;
  /**
   * ?????????????? ID
   * Required
   * Max Length: 255
   */
  externalId: Scalars['String'];
  /**
   * ??????
   * Required
   * Max Length: 255
   */
  name: Scalars['String'];
  /**
   * ??????????????
   * Required
   * Min Length: 3
   * Max Length: 32
   */
  phone: Scalars['String'];
};

/** ?????????? Emex */
export type EmexOrderFilterInput = {
  and?: InputMaybe<Array<EmexOrderFilterInput>>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  customerId?: InputMaybe<IdOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  externalId?: InputMaybe<StringOperationFilterInput>;
  extraProperties?: InputMaybe<ExtraPropertyDictionaryFilterInput>;
  /** ?????????????????????????? ???????????????? Emex */
  globalId?: InputMaybe<ComparableInt64OperationFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isLocked?: InputMaybe<BooleanOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  or?: InputMaybe<Array<EmexOrderFilterInput>>;
  products?: InputMaybe<ListFilterInputTypeOfEmexProductFilterInput>;
  status?: InputMaybe<EmexOrderStatusOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
};

/** ?????????? Emex */
export type EmexOrderSortInput = {
  concurrencyStamp?: InputMaybe<SortEnumType>;
  contractorId?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  customerId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  externalId?: InputMaybe<SortEnumType>;
  /** ?????????????????????????? ???????????????? Emex */
  globalId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isLocked?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
};

export enum EmexOrderStatus {
  Accepted = 'ACCEPTED',
  Created = 'CREATED',
  Issued = 'ISSUED',
  PartiallyAccepted = 'PARTIALLY_ACCEPTED',
  PartiallyIssued = 'PARTIALLY_ISSUED',
  PartiallySent = 'PARTIALLY_SENT',
  Return = 'RETURN',
  Sent = 'SENT'
}

export type EmexOrderStatusOperationFilterInput = {
  eq?: InputMaybe<EmexOrderStatus>;
  in?: InputMaybe<Array<EmexOrderStatus>>;
  neq?: InputMaybe<EmexOrderStatus>;
  nin?: InputMaybe<Array<EmexOrderStatus>>;
};

/** ?????????? Emex */
export type EmexProductFilterInput = {
  and?: InputMaybe<Array<EmexProductFilterInput>>;
  /** ?????????? ?????? */
  barcode?: InputMaybe<StringOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  /** ?????????????????????????????? ???????????????????? */
  gtd?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isLocked?: InputMaybe<BooleanOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** ?????????????????????????? */
  manufacturer?: InputMaybe<StringOperationFilterInput>;
  /** ???????????? ?????????????????????????? */
  manufacturerCountry?: InputMaybe<StringOperationFilterInput>;
  /** ?????? ???????????? ?????????????????????????? */
  manufacturerCountryCode?: InputMaybe<StringOperationFilterInput>;
  /** ???????????????????? */
  marking?: InputMaybe<StringOperationFilterInput>;
  /** ???????????????? */
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<EmexProductFilterInput>>;
  orderId?: InputMaybe<IdOperationFilterInput>;
  /** ???? ???????????????????????? ?????????? */
  packingPlaceId?: InputMaybe<IdOperationFilterInput>;
  /** ???????? */
  price?: InputMaybe<ComparableDecimalOperationFilterInput>;
  /** ??????-???? */
  quantity?: InputMaybe<ComparableDecimalOperationFilterInput>;
  status?: InputMaybe<EmexProductStatusOperationFilterInput>;
  /** ?????????? */
  sum?: InputMaybe<ComparableDecimalOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** ?????? ?????????????? */
  typeBalance?: InputMaybe<EmexTypeBalanceOperationFilterInput>;
  /** ?????? ???????????? */
  typePayment?: InputMaybe<EmexTypePaymentOperationFilterInput>;
  /** ???????????? ?????? */
  vat?: InputMaybe<ComparableDecimalOperationFilterInput>;
  /** ?????????????? */
  vendorCode?: InputMaybe<StringOperationFilterInput>;
};

export type EmexProductInput = {
  /**
   * ?????????? ??????
   * Max Length: 255
   */
  barcode?: InputMaybe<Scalars['String']>;
  /**
   * ?????????????????????????????? ????????????????????
   * Max Length: 255
   */
  gtd?: InputMaybe<Scalars['String']>;
  /**
   * ??????????????????????????
   * Required
   * Max Length: 255
   */
  manufacturer: Scalars['String'];
  /**
   * ???????????? ??????????????????????????
   * Max Length: 255
   */
  manufacturerCountry?: InputMaybe<Scalars['String']>;
  /**
   * ?????? ???????????? ??????????????????????????
   * Max Length: 255
   */
  manufacturerCountryCode?: InputMaybe<Scalars['String']>;
  /**
   * ????????????????????
   * Max Length: 255
   */
  marking?: InputMaybe<Scalars['String']>;
  /**
   * ????????????????
   * Required
   * Max Length: 255
   */
  name: Scalars['String'];
  /** Required */
  packingPlaceId: Scalars['ID'];
  /**
   * ????????
   * Range from 0 to 1,7976931348623157E+308
   */
  price: Scalars['Decimal'];
  /**
   * ??????-????
   * Required
   * Range from 0 to 1,7976931348623157E+308
   */
  quantity: Scalars['Decimal'];
  /**
   * ??????????
   * Range from 0 to 1,7976931348623157E+308
   */
  sum: Scalars['Decimal'];
  /**
   * ?????? ??????????????
   * Required
   */
  typeBalance: EmexTypeBalance;
  /**
   * ?????? ????????????
   * Required
   */
  typePayment: EmexTypePayment;
  /**
   * ???????????? ??????
   * Range from 0 to 1,7976931348623157E+308
   */
  vat: Scalars['Decimal'];
  /**
   * ??????????????
   * Required
   * Max Length: 255
   */
  vendorCode: Scalars['String'];
};

/** ?????????? Emex */
export type EmexProductSortInput = {
  /** ?????????? ?????? */
  barcode?: InputMaybe<SortEnumType>;
  contractorId?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  /** ?????????????????????????????? ???????????????????? */
  gtd?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  isLocked?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  /** ?????????????????????????? */
  manufacturer?: InputMaybe<SortEnumType>;
  /** ???????????? ?????????????????????????? */
  manufacturerCountry?: InputMaybe<SortEnumType>;
  /** ?????? ???????????? ?????????????????????????? */
  manufacturerCountryCode?: InputMaybe<SortEnumType>;
  /** ???????????????????? */
  marking?: InputMaybe<SortEnumType>;
  /** ???????????????? */
  name?: InputMaybe<SortEnumType>;
  orderId?: InputMaybe<SortEnumType>;
  /** ???? ???????????????????????? ?????????? */
  packingPlaceId?: InputMaybe<SortEnumType>;
  /** ???????? */
  price?: InputMaybe<SortEnumType>;
  /** ??????-???? */
  quantity?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  /** ?????????? */
  sum?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
  /** ?????? ?????????????? */
  typeBalance?: InputMaybe<SortEnumType>;
  /** ?????? ???????????? */
  typePayment?: InputMaybe<SortEnumType>;
  /** ???????????? ?????? */
  vat?: InputMaybe<SortEnumType>;
  /** ?????????????? */
  vendorCode?: InputMaybe<SortEnumType>;
};

export enum EmexProductStatus {
  Accepted = 'ACCEPTED',
  Created = 'CREATED',
  Issued = 'ISSUED',
  Return = 'RETURN',
  Sent = 'SENT'
}

export type EmexProductStatusOperationFilterInput = {
  eq?: InputMaybe<EmexProductStatus>;
  in?: InputMaybe<Array<EmexProductStatus>>;
  neq?: InputMaybe<EmexProductStatus>;
  nin?: InputMaybe<Array<EmexProductStatus>>;
};

/** ?????? ?????????????? */
export enum EmexTypeBalance {
  /** ???????????? ?? ?????????????? Emex */
  Emex = 'EMEX',
  /** ???????????? ???????????? ?????? ?????????????????? */
  None = 'NONE'
}

export type EmexTypeBalanceOperationFilterInput = {
  eq?: InputMaybe<EmexTypeBalance>;
  in?: InputMaybe<Array<EmexTypeBalance>>;
  neq?: InputMaybe<EmexTypeBalance>;
  nin?: InputMaybe<Array<EmexTypeBalance>>;
};

/** ?????? ???????????? */
export enum EmexTypePayment {
  /** ???????????? ???????????? ???????????? ?????? ?????????????????? */
  FullCashless = 'FULL_CASHLESS',
  /** ???????????????????? */
  Prepayment = 'PREPAYMENT'
}

export type EmexTypePaymentOperationFilterInput = {
  eq?: InputMaybe<EmexTypePayment>;
  in?: InputMaybe<Array<EmexTypePayment>>;
  neq?: InputMaybe<EmexTypePayment>;
  nin?: InputMaybe<Array<EmexTypePayment>>;
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

export type ListFilterInputTypeOfEmexProductFilterInput = {
  all?: InputMaybe<EmexProductFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<EmexProductFilterInput>;
  some?: InputMaybe<EmexProductFilterInput>;
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

/** ???????????? ???????????????????????? ?????????? */
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

export type UpdateEmexOrderInput = {
  /**
   * ????????????
   * Required
   */
  customer: EmexCustomerInput;
  /**
   * ?????????????? ID ????????????
   * Required
   */
  externalId: Scalars['String'];
  /**
   * ?????????????????????????? ???????????????? Emex
   * Required
   * Range from 0 to 1,7976931348623157E+308
   */
  globalId: Scalars['Long'];
  /** Required */
  id: Scalars['ID'];
};

export type UpdateEmexProductInput = {
  orderId: Scalars['ID'];
  product: EmexProductInput;
  productId: Scalars['ID'];
};

export type CreateEmexOrderMutationVariables = Exact<{
  input: CreateEmexOrderInput;
}>;


export type CreateEmexOrderMutation = { __typename?: 'Mutation', createEmexOrder: { __typename?: 'CreateEmexOrderPayload', emexOrder?: { __typename?: 'EmexOrder', id: string, status: EmexOrderStatus, globalId: any, externalId: string, creationTime?: any | null | undefined, isLocked: boolean, customer: { __typename?: 'EmexCustomer', externalId: string, name: string, phone: string, email?: string | null | undefined }, products: Array<{ __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined }> } | null | undefined, errors?: Array<{ __typename?: 'EmexOrderCustomerIdIsNotEqualError', code?: string | null | undefined, message: string, details?: string | null | undefined, packingPlace: { __typename?: 'PackingPlace', id: string, barcode: string } } | { __typename?: 'EmexOrderExternalIdAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceLockedError', code?: string | null | undefined, message: string, details?: string | null | undefined, packingPlace: { __typename?: 'PackingPlace', id: string, barcode: string } } | { __typename?: 'TypeOrderIsNotCorrectError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type CreateEmexProductMutationVariables = Exact<{
  input: CreateEmexProductInput;
}>;


export type CreateEmexProductMutation = { __typename?: 'Mutation', createEmexProduct: { __typename?: 'CreateEmexProductPayload', emexProduct?: { __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EmexOrderCustomerIdIsNotEqualError', message: string } | { __typename?: 'EmexOrderLockedError', message: string } | { __typename?: 'EmexProductLockedError', message: string } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceLockedError', message: string } | { __typename?: 'TypeOrderIsNotCorrectError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteEmexOrderMutationVariables = Exact<{
  input: DeleteEmexOrderInput;
}>;


export type DeleteEmexOrderMutation = { __typename?: 'Mutation', deleteEmexOrder: { __typename?: 'DeleteEmexOrderPayload', emexOrder?: { __typename?: 'EmexOrder', id: string, status: EmexOrderStatus, globalId: any, externalId: string, creationTime?: any | null | undefined, isLocked: boolean, customer: { __typename?: 'EmexCustomer', externalId: string, name: string, phone: string, email?: string | null | undefined }, products: Array<{ __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined }> } | null | undefined, errors?: Array<{ __typename?: 'EmexOrderLockedError', message: string } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeleteEmexProductMutationVariables = Exact<{
  input: DeleteEmexProductInput;
}>;


export type DeleteEmexProductMutation = { __typename?: 'Mutation', deleteEmexProduct: { __typename?: 'DeleteEmexProductPayload', emexProduct?: { __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EmexOrderLockedError', message: string } | { __typename?: 'EmexProductLockedError', message: string } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type EmexOrderFragment = { __typename?: 'EmexOrder', id: string, status: EmexOrderStatus, globalId: any, externalId: string, creationTime?: any | null | undefined, isLocked: boolean, customer: { __typename?: 'EmexCustomer', externalId: string, name: string, phone: string, email?: string | null | undefined }, products: Array<{ __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined }> };

export type EmexProductFragment = { __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined };

export type GetEmexOrderQueryVariables = Exact<{
  where?: InputMaybe<EmexOrderFilterInput>;
}>;


export type GetEmexOrderQuery = { __typename?: 'Query', emexOrder?: { __typename?: 'EmexOrder', id: string, status: EmexOrderStatus, globalId: any, externalId: string, creationTime?: any | null | undefined, isLocked: boolean, customer: { __typename?: 'EmexCustomer', externalId: string, name: string, phone: string, email?: string | null | undefined }, products: Array<{ __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined }> } | null | undefined };

export type GetEmexOrdersQueryVariables = Exact<{
  where?: InputMaybe<EmexOrderFilterInput>;
  order?: InputMaybe<Array<EmexOrderSortInput> | EmexOrderSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetEmexOrdersQuery = { __typename?: 'Query', emexOrders?: { __typename?: 'EmexOrderCollectionSegment', totalCount: number, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean }, items?: Array<{ __typename?: 'EmexOrder', id: string, status: EmexOrderStatus, globalId: any, externalId: string, creationTime?: any | null | undefined, isLocked: boolean, customer: { __typename?: 'EmexCustomer', externalId: string, name: string, phone: string, email?: string | null | undefined }, products: Array<{ __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined }> }> | null | undefined } | null | undefined };

export type GetEmexProductQueryVariables = Exact<{
  where?: InputMaybe<EmexProductFilterInput>;
}>;


export type GetEmexProductQuery = { __typename?: 'Query', emexProduct?: { __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, order: { __typename?: 'EmexOrder', id: string, contractorId: string, globalId: any, externalId: string, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string }, customer: { __typename?: 'EmexCustomer', externalId: string, name: string, phone: string, email?: string | null | undefined } }, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined } | null | undefined };

export type GetEmexProductsQueryVariables = Exact<{
  where?: InputMaybe<EmexProductFilterInput>;
  order?: InputMaybe<Array<EmexProductSortInput> | EmexProductSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetEmexProductsQuery = { __typename?: 'Query', emexProducts?: { __typename?: 'EmexProductCollectionSegment', totalCount: number, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean }, items?: Array<{ __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, order: { __typename?: 'EmexOrder', id: string, contractorId: string, globalId: any, externalId: string, contractor: { __typename?: 'Company', id: string, name: string } | { __typename?: 'IndividualEntrepreneur', id: string, name: string }, customer: { __typename?: 'EmexCustomer', externalId: string, name: string, phone: string, email?: string | null | undefined } }, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined }> | null | undefined } | null | undefined };

export type EmexOrderIsExternalIdUniqueQueryVariables = Exact<{
  externalId: Scalars['String'];
}>;


export type EmexOrderIsExternalIdUniqueQuery = { __typename?: 'Query', emexOrdersAny: boolean };

export type UpdateEmexOrderMutationVariables = Exact<{
  input: UpdateEmexOrderInput;
}>;


export type UpdateEmexOrderMutation = { __typename?: 'Mutation', updateEmexOrder: { __typename?: 'UpdateEmexOrderPayload', emexOrder?: { __typename?: 'EmexOrder', id: string, status: EmexOrderStatus, globalId: any, externalId: string, creationTime?: any | null | undefined, isLocked: boolean, customer: { __typename?: 'EmexCustomer', externalId: string, name: string, phone: string, email?: string | null | undefined }, products: Array<{ __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined }> } | null | undefined, errors?: Array<{ __typename?: 'EmexOrderCustomerIdIsNotEqualError', code?: string | null | undefined, message: string, details?: string | null | undefined, packingPlace: { __typename?: 'PackingPlace', id: string, barcode: string } } | { __typename?: 'EmexOrderExternalIdAlreadyExistsError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'EmexOrderLockedError', code?: string | null | undefined, message: string, details?: string | null | undefined } | { __typename?: 'EmexProductLockedError', code?: string | null | undefined, message: string, details?: string | null | undefined, product: { __typename?: 'EmexProduct', id: string, barcode?: string | null | undefined, name: string } } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceLockedError', code?: string | null | undefined, message: string, details?: string | null | undefined, packingPlace: { __typename?: 'PackingPlace', id: string, barcode: string } } | { __typename?: 'TypeOrderIsNotCorrectError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type UpdateEmexProductMutationVariables = Exact<{
  input: UpdateEmexProductInput;
}>;


export type UpdateEmexProductMutation = { __typename?: 'Mutation', updateEmexProduct: { __typename?: 'UpdateEmexProductPayload', emexProduct?: { __typename?: 'EmexProduct', id: string, status: EmexProductStatus, typeBalance: EmexTypeBalance, typePayment: EmexTypePayment, barcode?: string | null | undefined, name: string, vendorCode: string, price: any, sum: any, quantity: any, vat: any, manufacturer: string, manufacturerCountry?: string | null | undefined, manufacturerCountryCode?: string | null | undefined, marking?: string | null | undefined, gtd?: string | null | undefined, packingPlace?: { __typename?: 'PackingPlace', id: string, status: PackingPlaceStatus, barcode: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'EmexOrderCustomerIdIsNotEqualError', message: string } | { __typename?: 'EmexOrderLockedError', message: string } | { __typename?: 'EmexProductLockedError', message: string } | { __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'PackingPlaceLockedError', message: string } | { __typename?: 'TypeOrderIsNotCorrectError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const EmexProductFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmexProduct"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexProduct"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"typeBalance"}},{"kind":"Field","name":{"kind":"Name","value":"typePayment"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"vendorCode"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sum"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"vat"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturerCountry"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturerCountryCode"}},{"kind":"Field","name":{"kind":"Name","value":"marking"}},{"kind":"Field","name":{"kind":"Name","value":"gtd"}},{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}}]}}]}}]} as unknown as DocumentNode<EmexProductFragment, unknown>;
export const EmexOrderFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmexOrder"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexOrder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"globalId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creationTime"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexProduct"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}}]}},...EmexProductFragmentDoc.definitions]} as unknown as DocumentNode<EmexOrderFragment, unknown>;
export const CreateEmexOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmexOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEmexOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmexOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexOrderExternalIdAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexOrderCustomerIdIsNotEqualError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlaceLockedError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...EmexOrderFragmentDoc.definitions]} as unknown as DocumentNode<CreateEmexOrderMutation, CreateEmexOrderMutationVariables>;
export const CreateEmexProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmexProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEmexProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmexProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexProduct"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...EmexProductFragmentDoc.definitions]} as unknown as DocumentNode<CreateEmexProductMutation, CreateEmexProductMutationVariables>;
export const DeleteEmexOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEmexOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteEmexOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEmexOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...EmexOrderFragmentDoc.definitions]} as unknown as DocumentNode<DeleteEmexOrderMutation, DeleteEmexOrderMutationVariables>;
export const DeleteEmexProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEmexProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteEmexProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEmexProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexProduct"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...EmexProductFragmentDoc.definitions]} as unknown as DocumentNode<DeleteEmexProductMutation, DeleteEmexProductMutationVariables>;
export const GetEmexOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmexOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EmexOrderFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexOrder"}}]}}]}},...EmexOrderFragmentDoc.definitions]} as unknown as DocumentNode<GetEmexOrderQuery, GetEmexOrderQueryVariables>;
export const GetEmexOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmexOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EmexOrderFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmexOrderSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexOrders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...EmexOrderFragmentDoc.definitions]} as unknown as DocumentNode<GetEmexOrdersQuery, GetEmexOrdersQueryVariables>;
export const GetEmexProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmexProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EmexProductFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexProduct"}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractorId"}},{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"globalId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}},...EmexProductFragmentDoc.definitions]} as unknown as DocumentNode<GetEmexProductQuery, GetEmexProductQueryVariables>;
export const GetEmexProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmexProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EmexProductFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmexProductSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexProduct"}},{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contractorId"}},{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"globalId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...EmexProductFragmentDoc.definitions]} as unknown as DocumentNode<GetEmexProductsQuery, GetEmexProductsQueryVariables>;
export const EmexOrderIsExternalIdUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmexOrderIsExternalIdUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexOrdersAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"externalId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}}]}}]}}]}]}}]} as unknown as DocumentNode<EmexOrderIsExternalIdUniqueQuery, EmexOrderIsExternalIdUniqueQueryVariables>;
export const UpdateEmexOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEmexOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEmexOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEmexOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexOrder"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexOrderExternalIdAlreadyExistsError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexOrderLockedError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PackingPlaceLockedError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexProductLockedError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmexOrderCustomerIdIsNotEqualError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"packingPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"barcode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...EmexOrderFragmentDoc.definitions]} as unknown as DocumentNode<UpdateEmexOrderMutation, UpdateEmexOrderMutationVariables>;
export const UpdateEmexProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEmexProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEmexProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEmexProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emexProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmexProduct"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...EmexProductFragmentDoc.definitions]} as unknown as DocumentNode<UpdateEmexProductMutation, UpdateEmexProductMutationVariables>;