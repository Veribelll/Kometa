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

export enum AddressFamily {
  AppleTalk = 'APPLE_TALK',
  Atm = 'ATM',
  Banyan = 'BANYAN',
  Ccitt = 'CCITT',
  Chaos = 'CHAOS',
  Cluster = 'CLUSTER',
  ControllerAreaNetwork = 'CONTROLLER_AREA_NETWORK',
  DataKit = 'DATA_KIT',
  DataLink = 'DATA_LINK',
  DecNet = 'DEC_NET',
  Ecma = 'ECMA',
  FireFox = 'FIRE_FOX',
  HyperChannel = 'HYPER_CHANNEL',
  Ieee12844 = 'IEEE12844',
  ImpLink = 'IMP_LINK',
  InterNetwork = 'INTER_NETWORK',
  InterNetworkV6 = 'INTER_NETWORK_V6',
  Ipx = 'IPX',
  Irda = 'IRDA',
  Iso = 'ISO',
  Lat = 'LAT',
  Max = 'MAX',
  NetworkDesigners = 'NETWORK_DESIGNERS',
  NetBios = 'NET_BIOS',
  Packet = 'PACKET',
  Pup = 'PUP',
  Sna = 'SNA',
  Unix = 'UNIX',
  Unknown = 'UNKNOWN',
  Unspecified = 'UNSPECIFIED',
  VoiceView = 'VOICE_VIEW'
}

export type AddressFamilyOperationFilterInput = {
  eq?: InputMaybe<AddressFamily>;
  in?: InputMaybe<Array<AddressFamily>>;
  neq?: InputMaybe<AddressFamily>;
  nin?: InputMaybe<Array<AddressFamily>>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Отображение */
export type CellDisplayFilterInput = {
  and?: InputMaybe<Array<CellDisplayFilterInput>>;
  cellId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  or?: InputMaybe<Array<CellDisplayFilterInput>>;
  templateCellId?: InputMaybe<IdOperationFilterInput>;
  tenantId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Позиция по координате X */
  x?: InputMaybe<ComparableInt32OperationFilterInput>;
  /** Позиция по координате Y */
  y?: InputMaybe<ComparableInt32OperationFilterInput>;
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

export type CreatePostamatInput = {
  /**
   * Адрес
   * Required
   * Max Length: 200
   */
  address: Scalars['String'];
  defaultCourierId: Scalars['ID'];
  /**
   * Внешний ID
   * Required
   * Max Length: 200
   */
  externalId: Scalars['String'];
  /**
   * Заводской номер
   * Required
   * Max Length: 100
   */
  factoryNumber: Scalars['String'];
  /**
   * Наименование
   * Required
   * Max Length: 255
   */
  name: Scalars['String'];
};

export type DeletePostamatInput = {
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

/** Файловый принтер */
export type FilePrinterFilterInput = {
  and?: InputMaybe<Array<FilePrinterFilterInput>>;
  /** Путь к файлу */
  filePath?: InputMaybe<StringOperationFilterInput>;
  /** Включен */
  isEnabled?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<FilePrinterFilterInput>>;
};

/** Файловый принтер */
export type FilePrinterSortInput = {
  /** Путь к файлу */
  filePath?: InputMaybe<SortEnumType>;
  /** Включен */
  isEnabled?: InputMaybe<SortEnumType>;
};

export type IEqualityComparerOfStringFilterInput = {
  and?: InputMaybe<Array<IEqualityComparerOfStringFilterInput>>;
  or?: InputMaybe<Array<IEqualityComparerOfStringFilterInput>>;
};

export type IpAddressFilterInput = {
  address?: InputMaybe<ComparableInt64OperationFilterInput>;
  addressFamily?: InputMaybe<AddressFamilyOperationFilterInput>;
  and?: InputMaybe<Array<IpAddressFilterInput>>;
  isIPv4MappedToIPv6?: InputMaybe<BooleanOperationFilterInput>;
  isIPv6LinkLocal?: InputMaybe<BooleanOperationFilterInput>;
  isIPv6Multicast?: InputMaybe<BooleanOperationFilterInput>;
  isIPv6SiteLocal?: InputMaybe<BooleanOperationFilterInput>;
  isIPv6Teredo?: InputMaybe<BooleanOperationFilterInput>;
  isIPv6UniqueLocal?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<IpAddressFilterInput>>;
  scopeId?: InputMaybe<ComparableInt64OperationFilterInput>;
};

export type IpAddressSortInput = {
  address?: InputMaybe<SortEnumType>;
  addressFamily?: InputMaybe<SortEnumType>;
  isIPv4MappedToIPv6?: InputMaybe<SortEnumType>;
  isIPv6LinkLocal?: InputMaybe<SortEnumType>;
  isIPv6Multicast?: InputMaybe<SortEnumType>;
  isIPv6SiteLocal?: InputMaybe<SortEnumType>;
  isIPv6Teredo?: InputMaybe<SortEnumType>;
  isIPv6UniqueLocal?: InputMaybe<SortEnumType>;
  scopeId?: InputMaybe<SortEnumType>;
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

export type ListFilterInputTypeOfCellDisplayFilterInput = {
  all?: InputMaybe<CellDisplayFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<CellDisplayFilterInput>;
  some?: InputMaybe<CellDisplayFilterInput>;
};

export type ListFilterInputTypeOfCellFilterInput = {
  all?: InputMaybe<CellFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<CellFilterInput>;
  some?: InputMaybe<CellFilterInput>;
};

export type ListFilterInputTypeOfControllerBaseFilterInput = {
  all?: InputMaybe<ControllerBaseFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ControllerBaseFilterInput>;
  some?: InputMaybe<ControllerBaseFilterInput>;
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

export type ListFilterInputTypeOfLockFilterInput = {
  all?: InputMaybe<LockFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<LockFilterInput>;
  some?: InputMaybe<LockFilterInput>;
};

export type ListFilterInputTypeOfObjectFilterInput = {
  all?: InputMaybe<ObjectFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ObjectFilterInput>;
  some?: InputMaybe<ObjectFilterInput>;
};

export type ListFilterInputTypeOfPlaceInCellFilterInput = {
  all?: InputMaybe<PlaceInCellFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<PlaceInCellFilterInput>;
  some?: InputMaybe<PlaceInCellFilterInput>;
};

export type ListStringOperationFilterInput = {
  all?: InputMaybe<StringOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<StringOperationFilterInput>;
  some?: InputMaybe<StringOperationFilterInput>;
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

/** Сетевой принтер */
export type NetworkPrinterFilterInput = {
  and?: InputMaybe<Array<NetworkPrinterFilterInput>>;
  /** IP адрес */
  ipAddress?: InputMaybe<IpAddressFilterInput>;
  /** Включен */
  isEnabled?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<NetworkPrinterFilterInput>>;
  /** Порт */
  port?: InputMaybe<ComparableInt32OperationFilterInput>;
  /** Циклическое подключение */
  reconnectOnTimeout?: InputMaybe<BooleanOperationFilterInput>;
};

/** Сетевой принтер */
export type NetworkPrinterSortInput = {
  /** IP адрес */
  ipAddress?: InputMaybe<IpAddressSortInput>;
  /** Включен */
  isEnabled?: InputMaybe<SortEnumType>;
  /** Порт */
  port?: InputMaybe<SortEnumType>;
  /** Циклическое подключение */
  reconnectOnTimeout?: InputMaybe<SortEnumType>;
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

/** Постамат */
export type PostamatFilterInput = {
  /** Ключи доступа */
  accessKeys?: InputMaybe<ListFilterInputTypeOfAccessKeyFilterInput>;
  /** Ид аккаунтов */
  accountIds?: InputMaybe<LastMileAccountIdsFilterInput>;
  /** Адрес */
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<PostamatFilterInput>>;
  /** Ячейки */
  cells?: InputMaybe<ListFilterInputTypeOfCellFilterInput>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  contractorId?: InputMaybe<IdOperationFilterInput>;
  /** Контроллеры */
  controllers?: InputMaybe<ListFilterInputTypeOfControllerBaseFilterInput>;
  creationTime?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  creatorId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  defaultCourierId?: InputMaybe<IdOperationFilterInput>;
  deleterId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  deletionTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  /** Отображение */
  displays?: InputMaybe<ListFilterInputTypeOfCellDisplayFilterInput>;
  /** Внешний ID */
  externalId?: InputMaybe<StringOperationFilterInput>;
  extraProperties?: InputMaybe<ExtraPropertyDictionaryFilterInput>;
  /** Заводской номер */
  factoryNumber?: InputMaybe<StringOperationFilterInput>;
  /** Файловый принтер */
  filePrinter?: InputMaybe<FilePrinterFilterInput>;
  id?: InputMaybe<IdOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastModificationTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  lastModifierId?: InputMaybe<ComparableNullableOfGuidOperationFilterInput>;
  /** Наименование */
  name?: InputMaybe<StringOperationFilterInput>;
  /** Сетевой принтер */
  networkPrinter?: InputMaybe<NetworkPrinterFilterInput>;
  or?: InputMaybe<Array<PostamatFilterInput>>;
  /** Сроки возврата заказов */
  returnPeriods?: InputMaybe<ListFilterInputTypeOfLastMileReturnPeriodFilterInput>;
  /** Настройки сканера */
  scanner?: InputMaybe<PostamatScannerFilterInput>;
  /** COM принтер */
  serialPrinter?: InputMaybe<SerialPrinterFilterInput>;
  /** Настройки */
  settings?: InputMaybe<PostamatSettingsFilterInput>;
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

export type PostamatScannerFilterInput = {
  and?: InputMaybe<Array<PostamatScannerFilterInput>>;
  /** Скорость передачи для последовательного порта (в бодах). */
  baudRate?: InputMaybe<ComparableInt32OperationFilterInput>;
  /** Стандартное число битов данных в байте. */
  dataBits?: InputMaybe<ComparableInt32OperationFilterInput>;
  or?: InputMaybe<Array<PostamatScannerFilterInput>>;
  /** Протокол контроля четности. */
  parity?: InputMaybe<ParityOperationFilterInput>;
  /** Последовательный порт, в частности, любой из доступных портов COM. */
  portName?: InputMaybe<StringOperationFilterInput>;
  /** Стандартное число стоповых битов в байте. */
  stopBits?: InputMaybe<StopBitsOperationFilterInput>;
};

export type PostamatScannerSortInput = {
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

export type PostamatSettingsFilterInput = {
  /** Телефон администратора */
  adminPhone?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<PostamatSettingsFilterInput>>;
  /** Авто обновление */
  isAutoUpdate?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<PostamatSettingsFilterInput>>;
  /** Прием только по списку ожидания. */
  receptionWaitingListOnly?: InputMaybe<BooleanOperationFilterInput>;
};

export type PostamatSettingsSortInput = {
  /** Телефон администратора */
  adminPhone?: InputMaybe<SortEnumType>;
  /** Авто обновление */
  isAutoUpdate?: InputMaybe<SortEnumType>;
  /** Прием только по списку ожидания. */
  receptionWaitingListOnly?: InputMaybe<SortEnumType>;
};

/** Постамат */
export type PostamatSortInput = {
  /** Ид аккаунтов */
  accountIds?: InputMaybe<LastMileAccountIdsSortInput>;
  /** Адрес */
  address?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  contractorId?: InputMaybe<SortEnumType>;
  creationTime?: InputMaybe<SortEnumType>;
  creatorId?: InputMaybe<SortEnumType>;
  defaultCourierId?: InputMaybe<SortEnumType>;
  deleterId?: InputMaybe<SortEnumType>;
  deletionTime?: InputMaybe<SortEnumType>;
  /** Внешний ID */
  externalId?: InputMaybe<SortEnumType>;
  /** Заводской номер */
  factoryNumber?: InputMaybe<SortEnumType>;
  /** Файловый принтер */
  filePrinter?: InputMaybe<FilePrinterSortInput>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  lastModificationTime?: InputMaybe<SortEnumType>;
  lastModifierId?: InputMaybe<SortEnumType>;
  /** Наименование */
  name?: InputMaybe<SortEnumType>;
  /** Сетевой принтер */
  networkPrinter?: InputMaybe<NetworkPrinterSortInput>;
  /** Настройки сканера */
  scanner?: InputMaybe<PostamatScannerSortInput>;
  /** COM принтер */
  serialPrinter?: InputMaybe<SerialPrinterSortInput>;
  /** Настройки */
  settings?: InputMaybe<PostamatSettingsSortInput>;
  /** Статус */
  status?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
  /** Код доступа */
  token?: InputMaybe<SortEnumType>;
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

/** COM принтер */
export type SerialPrinterFilterInput = {
  and?: InputMaybe<Array<SerialPrinterFilterInput>>;
  /** Включен */
  isEnabled?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<SerialPrinterFilterInput>>;
  settings?: InputMaybe<SerialPortSettingsFilterInput>;
};

/** COM принтер */
export type SerialPrinterSortInput = {
  /** Включен */
  isEnabled?: InputMaybe<SortEnumType>;
  settings?: InputMaybe<SerialPortSettingsSortInput>;
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

export type TypeOrderFilterInput = {
  and?: InputMaybe<Array<TypeOrderFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TypeOrderFilterInput>>;
  value?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type UpdatePostamatInput = {
  /**
   * Адрес
   * Required
   * Max Length: 200
   */
  address: Scalars['String'];
  defaultCourierId: Scalars['ID'];
  /**
   * Внешний ID
   * Required
   * Max Length: 200
   */
  externalId: Scalars['String'];
  /**
   * Заводской номер
   * Required
   * Max Length: 100
   */
  factoryNumber: Scalars['String'];
  /** Required */
  id: Scalars['ID'];
  /**
   * Наименование
   * Required
   * Max Length: 255
   */
  name: Scalars['String'];
};

export type CreatePostamatMutationVariables = Exact<{
  input: CreatePostamatInput;
}>;


export type CreatePostamatMutation = { __typename?: 'Mutation', createPostamat: { __typename?: 'CreatePostamatPayload', postamat?: { __typename?: 'Postamat', id: string, defaultCourierId: string, status: LastMileStatus, name: string, factoryNumber: string, externalId: string, token: string, address: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'LastMileExternalIdAlreadyExistsError', message: string } | { __typename?: 'LastMileFactoryNumberAlreadyExistsError', message: string } | { __typename?: 'LastMileNameAlreadyExistsError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type DeletePostamatMutationVariables = Exact<{
  input: DeletePostamatInput;
}>;


export type DeletePostamatMutation = { __typename?: 'Mutation', deletePostamat: { __typename?: 'DeletePostamatPayload', postamat?: { __typename?: 'Postamat', id: string, defaultCourierId: string, status: LastMileStatus, name: string, factoryNumber: string, externalId: string, token: string, address: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export type GetPostamatByIdQueryVariables = Exact<{
  postamatId: Scalars['ID'];
}>;


export type GetPostamatByIdQuery = { __typename?: 'Query', postamatById: { __typename?: 'Postamat', id: string, defaultCourierId: string, status: LastMileStatus, name: string, factoryNumber: string, externalId: string, token: string, address: string } };

export type GetPostamatQueryVariables = Exact<{
  where?: InputMaybe<PostamatFilterInput>;
}>;


export type GetPostamatQuery = { __typename?: 'Query', postamat?: { __typename?: 'Postamat', id: string, defaultCourierId: string, status: LastMileStatus, name: string, factoryNumber: string, externalId: string, token: string, address: string } | null | undefined };

export type GetPostamatsQueryVariables = Exact<{
  where?: InputMaybe<PostamatFilterInput>;
  order?: InputMaybe<Array<PostamatSortInput> | PostamatSortInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetPostamatsQuery = { __typename?: 'Query', postamats?: { __typename?: 'PostamatCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'Postamat', id: string, defaultCourierId: string, status: LastMileStatus, name: string, factoryNumber: string, externalId: string, token: string, address: string }> | null | undefined, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null | undefined };

export type PostamatIsExternalIdUniqueQueryVariables = Exact<{
  externalId: Scalars['String'];
}>;


export type PostamatIsExternalIdUniqueQuery = { __typename?: 'Query', postamatsAny: boolean };

export type PostamatIsFactoryNumberUniqueQueryVariables = Exact<{
  factoryNumber: Scalars['String'];
}>;


export type PostamatIsFactoryNumberUniqueQuery = { __typename?: 'Query', postamatsAny: boolean };

export type PostamatIsNameUniqueQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type PostamatIsNameUniqueQuery = { __typename?: 'Query', postamatsAny: boolean };

export type PostamatFragment = { __typename?: 'Postamat', id: string, defaultCourierId: string, status: LastMileStatus, name: string, factoryNumber: string, externalId: string, token: string, address: string };

export type UpdatePostamatMutationVariables = Exact<{
  input: UpdatePostamatInput;
}>;


export type UpdatePostamatMutation = { __typename?: 'Mutation', updatePostamat: { __typename?: 'UpdatePostamatPayload', postamat?: { __typename?: 'Postamat', id: string, defaultCourierId: string, status: LastMileStatus, name: string, factoryNumber: string, externalId: string, token: string, address: string } | null | undefined, errors?: Array<{ __typename?: 'EntityNotFoundError', message: string } | { __typename?: 'LastMileExternalIdAlreadyExistsError', message: string } | { __typename?: 'LastMileFactoryNumberAlreadyExistsError', message: string } | { __typename?: 'LastMileNameAlreadyExistsError', message: string } | { __typename?: 'ValidationError', message: string }> | null | undefined } };

export const PostamatFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Postamat"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Postamat"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"defaultCourierId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"factoryNumber"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode<PostamatFragment, unknown>;
export const CreatePostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostamatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPostamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Postamat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PostamatFragmentDoc.definitions]} as unknown as DocumentNode<CreatePostamatMutation, CreatePostamatMutationVariables>;
export const DeletePostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeletePostamatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePostamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Postamat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PostamatFragmentDoc.definitions]} as unknown as DocumentNode<DeletePostamatMutation, DeletePostamatMutationVariables>;
export const GetPostamatByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostamatById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postamatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Postamat"}}]}}]}},...PostamatFragmentDoc.definitions]} as unknown as DocumentNode<GetPostamatByIdQuery, GetPostamatByIdQueryVariables>;
export const GetPostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostamatFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Postamat"}}]}}]}},...PostamatFragmentDoc.definitions]} as unknown as DocumentNode<GetPostamatQuery, GetPostamatQueryVariables>;
export const GetPostamatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostamats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostamatFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostamatSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Postamat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},...PostamatFragmentDoc.definitions]} as unknown as DocumentNode<GetPostamatsQuery, GetPostamatsQueryVariables>;
export const PostamatIsExternalIdUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostamatIsExternalIdUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"externalId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}}]}}]}}]}]}}]} as unknown as DocumentNode<PostamatIsExternalIdUniqueQuery, PostamatIsExternalIdUniqueQueryVariables>;
export const PostamatIsFactoryNumberUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostamatIsFactoryNumberUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"factoryNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"factoryNumber"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"factoryNumber"}}}]}}]}}]}]}}]} as unknown as DocumentNode<PostamatIsFactoryNumberUniqueQuery, PostamatIsFactoryNumberUniqueQueryVariables>;
export const PostamatIsNameUniqueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostamatIsNameUnique"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamatsAny"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}]}]}}]} as unknown as DocumentNode<PostamatIsNameUniqueQuery, PostamatIsNameUniqueQueryVariables>;
export const UpdatePostamatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostamat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostamatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostamat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postamat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Postamat"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}},...PostamatFragmentDoc.definitions]} as unknown as DocumentNode<UpdatePostamatMutation, UpdatePostamatMutationVariables>;