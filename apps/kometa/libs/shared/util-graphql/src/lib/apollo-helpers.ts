import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AccessKeyKeySpecifier = ('barcode' | 'contractor' | 'contractorId' | 'expiresDt' | 'id' | 'identityUser' | 'identityUserId' | 'isDisposable' | 'lastEntrance' | 'lastMile' | 'lastMileId' | 'tenant' | 'tenantId' | AccessKeyKeySpecifier)[];
export type AccessKeyFieldPolicy = {
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresDt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUser?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	isDisposable?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEntrance?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMile?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileId?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountBankKeySpecifier = ('bankName' | 'bic' | 'correspondentAccount' | 'paymentAccount' | AccountBankKeySpecifier)[];
export type AccountBankFieldPolicy = {
	bankName?: FieldPolicy<any> | FieldReadFunction<any>,
	bic?: FieldPolicy<any> | FieldReadFunction<any>,
	correspondentAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivateCellPayloadKeySpecifier = ('cell' | 'errors' | ActivateCellPayloadKeySpecifier)[];
export type ActivateCellPayloadFieldPolicy = {
	cell?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivatePostamatPayloadKeySpecifier = ('activatedPostamat' | 'errors' | ActivatePostamatPayloadKeySpecifier)[];
export type ActivatePostamatPayloadFieldPolicy = {
	activatedPostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivatedPostamatKeySpecifier = ('contractorId' | 'postamatId' | 'postamatIdRelay' | ActivatedPostamatKeySpecifier)[];
export type ActivatedPostamatFieldPolicy = {
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatId?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatIdRelay?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationAuthConfigurationKeySpecifier = ('grantedPolicies' | 'policies' | ApplicationAuthConfigurationKeySpecifier)[];
export type ApplicationAuthConfigurationFieldPolicy = {
	grantedPolicies?: FieldPolicy<any> | FieldReadFunction<any>,
	policies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationConfigurationKeySpecifier = ('auth' | 'clock' | 'currentContractor' | 'currentTenant' | 'currentUser' | 'features' | 'localization' | 'multiTenancy' | 'selectableContractors' | 'setting' | 'timing' | ApplicationConfigurationKeySpecifier)[];
export type ApplicationConfigurationFieldPolicy = {
	auth?: FieldPolicy<any> | FieldReadFunction<any>,
	clock?: FieldPolicy<any> | FieldReadFunction<any>,
	currentContractor?: FieldPolicy<any> | FieldReadFunction<any>,
	currentTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	currentUser?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	localization?: FieldPolicy<any> | FieldReadFunction<any>,
	multiTenancy?: FieldPolicy<any> | FieldReadFunction<any>,
	selectableContractors?: FieldPolicy<any> | FieldReadFunction<any>,
	setting?: FieldPolicy<any> | FieldReadFunction<any>,
	timing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationFeatureKeySpecifier = ('key' | 'value' | ApplicationFeatureKeySpecifier)[];
export type ApplicationFeatureFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationFeatureConfigurationKeySpecifier = ('values' | ApplicationFeatureConfigurationKeySpecifier)[];
export type ApplicationFeatureConfigurationFieldPolicy = {
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationLocalizationConfigurationKeySpecifier = ('currentCulture' | 'defaultResourceName' | 'languageFilesMap' | 'languages' | 'languagesMap' | 'texts' | ApplicationLocalizationConfigurationKeySpecifier)[];
export type ApplicationLocalizationConfigurationFieldPolicy = {
	currentCulture?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultResourceName?: FieldPolicy<any> | FieldReadFunction<any>,
	languageFilesMap?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	languagesMap?: FieldPolicy<any> | FieldReadFunction<any>,
	texts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationSettingKeySpecifier = ('key' | 'value' | ApplicationSettingKeySpecifier)[];
export type ApplicationSettingFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicationSettingConfigurationKeySpecifier = ('values' | ApplicationSettingConfigurationKeySpecifier)[];
export type ApplicationSettingConfigurationFieldPolicy = {
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthorizeDirectiveKeySpecifier = ('apply' | 'policy' | 'roles' | AuthorizeDirectiveKeySpecifier)[];
export type AuthorizeDirectiveFieldPolicy = {
	apply?: FieldPolicy<any> | FieldReadFunction<any>,
	policy?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BusinessErrorKeySpecifier = ('code' | 'details' | 'message' | BusinessErrorKeySpecifier)[];
export type BusinessErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CancelReturnRequestPayloadKeySpecifier = ('errors' | 'returnRequest' | CancelReturnRequestPayloadKeySpecifier)[];
export type CancelReturnRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CancelShipmentRequestPayloadKeySpecifier = ('errors' | 'shipmentRequest' | CancelShipmentRequestPayloadKeySpecifier)[];
export type CancelShipmentRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CellKeySpecifier = ('barcode' | 'contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'isEnable' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'lock' | 'lockId' | 'name' | 'pinCode' | 'places' | 'postamatId' | 'priority' | 'servicePinCode' | 'size' | 'sizeId' | 'status' | 'tenant' | 'tenantId' | 'type' | CellKeySpecifier)[];
export type CellFieldPolicy = {
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnable?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	lock?: FieldPolicy<any> | FieldReadFunction<any>,
	lockId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pinCode?: FieldPolicy<any> | FieldReadFunction<any>,
	places?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatId?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	servicePinCode?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sizeId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CellBarcodeAlreadyExistsErrorKeySpecifier = ('barcode' | 'code' | 'details' | 'message' | CellBarcodeAlreadyExistsErrorKeySpecifier)[];
export type CellBarcodeAlreadyExistsErrorFieldPolicy = {
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CellDeleteWhenNotEmptyErrorKeySpecifier = ('code' | 'details' | 'message' | CellDeleteWhenNotEmptyErrorKeySpecifier)[];
export type CellDeleteWhenNotEmptyErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CellDisplayKeySpecifier = ('cell' | 'cellId' | 'contractor' | 'contractorId' | 'postamatId' | 'templateCell' | 'templateCellId' | 'tenant' | 'tenantId' | 'x' | 'y' | CellDisplayKeySpecifier)[];
export type CellDisplayFieldPolicy = {
	cell?: FieldPolicy<any> | FieldReadFunction<any>,
	cellId?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatId?: FieldPolicy<any> | FieldReadFunction<any>,
	templateCell?: FieldPolicy<any> | FieldReadFunction<any>,
	templateCellId?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	x?: FieldPolicy<any> | FieldReadFunction<any>,
	y?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CellNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | CellNameAlreadyExistsErrorKeySpecifier)[];
export type CellNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CellPinCodeAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'pinCode' | CellPinCodeAlreadyExistsErrorKeySpecifier)[];
export type CellPinCodeAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	pinCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CellServicePinCodeAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'servicePinCode' | CellServicePinCodeAlreadyExistsErrorKeySpecifier)[];
export type CellServicePinCodeAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	servicePinCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClockKeySpecifier = ('kind' | ClockKeySpecifier)[];
export type ClockFieldPolicy = {
	kind?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionSegmentInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | CollectionSegmentInfoKeySpecifier)[];
export type CollectionSegmentInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyKeySpecifier = ('accountBank' | 'actualAddress' | 'address' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'inn' | 'isDeleted' | 'isHost' | 'kpp' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'mailingAddress' | 'name' | 'ogrn' | 'okpo' | 'tenant' | 'tenantId' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	accountBank?: FieldPolicy<any> | FieldReadFunction<any>,
	actualAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inn?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	isHost?: FieldPolicy<any> | FieldReadFunction<any>,
	kpp?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	mailingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ogrn?: FieldPolicy<any> | FieldReadFunction<any>,
	okpo?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | CompanyCollectionSegmentKeySpecifier)[];
export type CompanyCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractorKeySpecifier = ('accountBank' | 'actualAddress' | 'address' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'inn' | 'isDeleted' | 'isHost' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'mailingAddress' | 'name' | 'okpo' | 'tenant' | 'tenantId' | ContractorKeySpecifier)[];
export type ContractorFieldPolicy = {
	accountBank?: FieldPolicy<any> | FieldReadFunction<any>,
	actualAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inn?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	isHost?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	mailingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	okpo?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractorCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | ContractorCollectionSegmentKeySpecifier)[];
export type ContractorCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractorHostDeletionErrorKeySpecifier = ('code' | 'details' | 'message' | ContractorHostDeletionErrorKeySpecifier)[];
export type ContractorHostDeletionErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractorInnAlreadyExistsErrorKeySpecifier = ('code' | 'contractor' | 'details' | 'inn' | 'message' | ContractorInnAlreadyExistsErrorKeySpecifier)[];
export type ContractorInnAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	inn?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractorNameAlreadyExistsErrorKeySpecifier = ('code' | 'contractor' | 'details' | 'message' | 'name' | ContractorNameAlreadyExistsErrorKeySpecifier)[];
export type ContractorNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ControllerBaseKeySpecifier = ('contractor' | 'contractorId' | 'id' | 'locks' | 'name' | 'postamatId' | 'settings' | 'tenant' | 'tenantId' | ControllerBaseKeySpecifier)[];
export type ControllerBaseFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locks?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatId?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ControllerNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | ControllerNameAlreadyExistsErrorKeySpecifier)[];
export type ControllerNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateAccessKeyPayloadKeySpecifier = ('accessKey' | 'errors' | CreateAccessKeyPayloadKeySpecifier)[];
export type CreateAccessKeyPayloadFieldPolicy = {
	accessKey?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCellPayloadKeySpecifier = ('cell' | 'errors' | CreateCellPayloadKeySpecifier)[];
export type CreateCellPayloadFieldPolicy = {
	cell?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCompanyPayloadKeySpecifier = ('company' | 'errors' | CreateCompanyPayloadKeySpecifier)[];
export type CreateCompanyPayloadFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateEmexAccountPayloadKeySpecifier = ('emexAccount' | 'errors' | CreateEmexAccountPayloadKeySpecifier)[];
export type CreateEmexAccountPayloadFieldPolicy = {
	emexAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateEmexOrderPayloadKeySpecifier = ('emexOrder' | 'errors' | CreateEmexOrderPayloadKeySpecifier)[];
export type CreateEmexOrderPayloadFieldPolicy = {
	emexOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateEmexProductPayloadKeySpecifier = ('emexProduct' | 'errors' | CreateEmexProductPayloadKeySpecifier)[];
export type CreateEmexProductPayloadFieldPolicy = {
	emexProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateEmployeePayloadKeySpecifier = ('errors' | 'identityUser' | CreateEmployeePayloadKeySpecifier)[];
export type CreateEmployeePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateIdentityRolePayloadKeySpecifier = ('errors' | 'identityRole' | CreateIdentityRolePayloadKeySpecifier)[];
export type CreateIdentityRolePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	identityRole?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateIndividualEntrepreneurPayloadKeySpecifier = ('errors' | 'individualEntrepreneur' | CreateIndividualEntrepreneurPayloadKeySpecifier)[];
export type CreateIndividualEntrepreneurPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	individualEntrepreneur?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePackingPlacePayloadKeySpecifier = ('errors' | 'packingPlace' | CreatePackingPlacePayloadKeySpecifier)[];
export type CreatePackingPlacePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePostamatPayloadKeySpecifier = ('errors' | 'postamat' | CreatePostamatPayloadKeySpecifier)[];
export type CreatePostamatPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePromixControllerPayloadKeySpecifier = ('errors' | 'promixController' | CreatePromixControllerPayloadKeySpecifier)[];
export type CreatePromixControllerPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	promixController?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateReturnRequestPayloadKeySpecifier = ('errors' | 'returnRequest' | CreateReturnRequestPayloadKeySpecifier)[];
export type CreateReturnRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateShipmentRequestPayloadKeySpecifier = ('errors' | 'shipmentRequest' | CreateShipmentRequestPayloadKeySpecifier)[];
export type CreateShipmentRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSizePayloadKeySpecifier = ('errors' | 'size' | CreateSizePayloadKeySpecifier)[];
export type CreateSizePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSmsCenterAccountPayloadKeySpecifier = ('errors' | 'smsCenterAccount' | CreateSmsCenterAccountPayloadKeySpecifier)[];
export type CreateSmsCenterAccountPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	smsCenterAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSmsTemplatePayloadKeySpecifier = ('errors' | 'smsTemplate' | CreateSmsTemplatePayloadKeySpecifier)[];
export type CreateSmsTemplatePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTemplateCellPayloadKeySpecifier = ('errors' | 'templateCell' | CreateTemplateCellPayloadKeySpecifier)[];
export type CreateTemplateCellPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	templateCell?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTemplatePostamatPayloadKeySpecifier = ('errors' | 'templatePostamat' | CreateTemplatePostamatPayloadKeySpecifier)[];
export type CreateTemplatePostamatPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	templatePostamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTemplateSectionPayloadKeySpecifier = ('errors' | 'templateSection' | CreateTemplateSectionPayloadKeySpecifier)[];
export type CreateTemplateSectionPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	templateSection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTenantPayloadKeySpecifier = ('errors' | 'tenant' | CreateTenantPayloadKeySpecifier)[];
export type CreateTenantPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreationAuditedObjectKeySpecifier = ('creationTime' | 'creator' | 'creatorId' | CreationAuditedObjectKeySpecifier)[];
export type CreationAuditedObjectFieldPolicy = {
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrentContractorKeySpecifier = ('id' | 'name' | CurrentContractorKeySpecifier)[];
export type CurrentContractorFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrentCultureKeySpecifier = ('cultureName' | 'dateTimeFormat' | 'displayName' | 'englishName' | 'isRightToLeft' | 'name' | 'nativeName' | 'threeLetterIsoLanguageName' | 'twoLetterIsoLanguageName' | CurrentCultureKeySpecifier)[];
export type CurrentCultureFieldPolicy = {
	cultureName?: FieldPolicy<any> | FieldReadFunction<any>,
	dateTimeFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	englishName?: FieldPolicy<any> | FieldReadFunction<any>,
	isRightToLeft?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nativeName?: FieldPolicy<any> | FieldReadFunction<any>,
	threeLetterIsoLanguageName?: FieldPolicy<any> | FieldReadFunction<any>,
	twoLetterIsoLanguageName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrentTenantKeySpecifier = ('id' | 'isAvailable' | 'name' | CurrentTenantKeySpecifier)[];
export type CurrentTenantFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrentUserKeySpecifier = ('email' | 'emailVerified' | 'id' | 'impersonatorTenantId' | 'impersonatorUserId' | 'isAuthenticated' | 'name' | 'phoneNumber' | 'phoneNumberVerified' | 'roles' | 'surName' | 'tenantId' | 'userName' | CurrentUserKeySpecifier)[];
export type CurrentUserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	impersonatorTenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	impersonatorUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	isAuthenticated?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumberVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	surName?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	userName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerKeySpecifier = ('contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'email' | 'externalId' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'phone' | 'tenant' | 'tenantId' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DateTimeFormatKeySpecifier = ('calendarAlgorithmType' | 'dateSeparator' | 'dateTimeFormatLong' | 'fullDateTimePattern' | 'longTimePattern' | 'shortDatePattern' | 'shortTimePattern' | DateTimeFormatKeySpecifier)[];
export type DateTimeFormatFieldPolicy = {
	calendarAlgorithmType?: FieldPolicy<any> | FieldReadFunction<any>,
	dateSeparator?: FieldPolicy<any> | FieldReadFunction<any>,
	dateTimeFormatLong?: FieldPolicy<any> | FieldReadFunction<any>,
	fullDateTimePattern?: FieldPolicy<any> | FieldReadFunction<any>,
	longTimePattern?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDatePattern?: FieldPolicy<any> | FieldReadFunction<any>,
	shortTimePattern?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeactivateCellPayloadKeySpecifier = ('cell' | 'errors' | DeactivateCellPayloadKeySpecifier)[];
export type DeactivateCellPayloadFieldPolicy = {
	cell?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteAccessKeyPayloadKeySpecifier = ('accessKey' | 'errors' | DeleteAccessKeyPayloadKeySpecifier)[];
export type DeleteAccessKeyPayloadFieldPolicy = {
	accessKey?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCellPayloadKeySpecifier = ('cell' | 'errors' | DeleteCellPayloadKeySpecifier)[];
export type DeleteCellPayloadFieldPolicy = {
	cell?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCompanyPayloadKeySpecifier = ('company' | 'errors' | DeleteCompanyPayloadKeySpecifier)[];
export type DeleteCompanyPayloadFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteEmexAccountPayloadKeySpecifier = ('emexAccount' | 'errors' | DeleteEmexAccountPayloadKeySpecifier)[];
export type DeleteEmexAccountPayloadFieldPolicy = {
	emexAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteEmexOrderPayloadKeySpecifier = ('emexOrder' | 'errors' | DeleteEmexOrderPayloadKeySpecifier)[];
export type DeleteEmexOrderPayloadFieldPolicy = {
	emexOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteEmexProductPayloadKeySpecifier = ('emexProduct' | 'errors' | DeleteEmexProductPayloadKeySpecifier)[];
export type DeleteEmexProductPayloadFieldPolicy = {
	emexProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteEmployeePayloadKeySpecifier = ('errors' | 'identityUser' | DeleteEmployeePayloadKeySpecifier)[];
export type DeleteEmployeePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteIdentityRolePayloadKeySpecifier = ('errors' | 'identityRole' | DeleteIdentityRolePayloadKeySpecifier)[];
export type DeleteIdentityRolePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	identityRole?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteIndividualEntrepreneurPayloadKeySpecifier = ('errors' | 'individualEntrepreneur' | DeleteIndividualEntrepreneurPayloadKeySpecifier)[];
export type DeleteIndividualEntrepreneurPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	individualEntrepreneur?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteLastMileSmsTemplatePayloadKeySpecifier = ('errors' | 'lastMileSmsTemplate' | DeleteLastMileSmsTemplatePayloadKeySpecifier)[];
export type DeleteLastMileSmsTemplatePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileSmsTemplate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePackingPlacePayloadKeySpecifier = ('errors' | 'packingPlace' | DeletePackingPlacePayloadKeySpecifier)[];
export type DeletePackingPlacePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePostamatPayloadKeySpecifier = ('errors' | 'postamat' | DeletePostamatPayloadKeySpecifier)[];
export type DeletePostamatPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePromixControllerPayloadKeySpecifier = ('errors' | 'promixController' | DeletePromixControllerPayloadKeySpecifier)[];
export type DeletePromixControllerPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	promixController?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteReturnRequestPayloadKeySpecifier = ('errors' | 'returnRequest' | DeleteReturnRequestPayloadKeySpecifier)[];
export type DeleteReturnRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteShipmentRequestPayloadKeySpecifier = ('errors' | 'shipmentRequest' | DeleteShipmentRequestPayloadKeySpecifier)[];
export type DeleteShipmentRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteSizePayloadKeySpecifier = ('errors' | 'size' | DeleteSizePayloadKeySpecifier)[];
export type DeleteSizePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteSmsCenterAccountPayloadKeySpecifier = ('errors' | 'smsCenterAccount' | DeleteSmsCenterAccountPayloadKeySpecifier)[];
export type DeleteSmsCenterAccountPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	smsCenterAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteSmsTemplatePayloadKeySpecifier = ('errors' | 'smsTemplate' | DeleteSmsTemplatePayloadKeySpecifier)[];
export type DeleteSmsTemplatePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteTemplateCellPayloadKeySpecifier = ('errors' | 'templateCell' | DeleteTemplateCellPayloadKeySpecifier)[];
export type DeleteTemplateCellPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	templateCell?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteTemplatePostamatPayloadKeySpecifier = ('errors' | 'templatePostamat' | DeleteTemplatePostamatPayloadKeySpecifier)[];
export type DeleteTemplatePostamatPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	templatePostamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteTemplateSectionPayloadKeySpecifier = ('errors' | 'templateSection' | DeleteTemplateSectionPayloadKeySpecifier)[];
export type DeleteTemplateSectionPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	templateSection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteTenantPayloadKeySpecifier = ('errors' | 'tenant' | DeleteTenantPayloadKeySpecifier)[];
export type DeleteTenantPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletionAuditedObjectKeySpecifier = ('deleter' | 'deleterId' | 'deletionTime' | 'isDeleted' | DeletionAuditedObjectKeySpecifier)[];
export type DeletionAuditedObjectFieldPolicy = {
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexAccountKeySpecifier = ('contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'tenant' | 'tenantId' | 'userId' | EmexAccountKeySpecifier)[];
export type EmexAccountFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexAccountCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | EmexAccountCollectionSegmentKeySpecifier)[];
export type EmexAccountCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexAccountNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | EmexAccountNameAlreadyExistsErrorKeySpecifier)[];
export type EmexAccountNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexAccountUserIdAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'userId' | EmexAccountUserIdAlreadyExistsErrorKeySpecifier)[];
export type EmexAccountUserIdAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexCustomerKeySpecifier = ('contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'email' | 'externalId' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'phone' | 'tenant' | 'tenantId' | EmexCustomerKeySpecifier)[];
export type EmexCustomerFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexCustomerCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | EmexCustomerCollectionSegmentKeySpecifier)[];
export type EmexCustomerCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexOrderKeySpecifier = ('contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'customer' | 'customerId' | 'deleter' | 'deleterId' | 'deletionTime' | 'externalId' | 'globalId' | 'id' | 'isDeleted' | 'isLocked' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'products' | 'status' | 'tenant' | 'tenantId' | EmexOrderKeySpecifier)[];
export type EmexOrderFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	globalId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexOrderCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | EmexOrderCollectionSegmentKeySpecifier)[];
export type EmexOrderCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexOrderCustomerIdIsNotEqualErrorKeySpecifier = ('code' | 'current' | 'customerCurrent' | 'customerVerifiable' | 'details' | 'message' | 'packingPlace' | 'packingPlaceId' | 'verifiable' | EmexOrderCustomerIdIsNotEqualErrorKeySpecifier)[];
export type EmexOrderCustomerIdIsNotEqualErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	customerCurrent?: FieldPolicy<any> | FieldReadFunction<any>,
	customerVerifiable?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlaceId?: FieldPolicy<any> | FieldReadFunction<any>,
	verifiable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexOrderExternalIdAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'externalId' | 'message' | EmexOrderExternalIdAlreadyExistsErrorKeySpecifier)[];
export type EmexOrderExternalIdAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexOrderLockedErrorKeySpecifier = ('code' | 'details' | 'id' | 'message' | 'order' | EmexOrderLockedErrorKeySpecifier)[];
export type EmexOrderLockedErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexProductKeySpecifier = ('barcode' | 'contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'gtd' | 'id' | 'isDeleted' | 'isLocked' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'manufacturer' | 'manufacturerCountry' | 'manufacturerCountryCode' | 'marking' | 'name' | 'order' | 'orderId' | 'packingPlace' | 'packingPlaceId' | 'price' | 'quantity' | 'status' | 'sum' | 'tenant' | 'tenantId' | 'typeBalance' | 'typePayment' | 'vat' | 'vendorCode' | EmexProductKeySpecifier)[];
export type EmexProductFieldPolicy = {
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	gtd?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturerCountry?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturerCountryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	marking?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orderId?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlaceId?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	typePayment?: FieldPolicy<any> | FieldReadFunction<any>,
	vat?: FieldPolicy<any> | FieldReadFunction<any>,
	vendorCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexProductAssignToPackingPlacePayloadKeySpecifier = ('emexProduct' | 'errors' | EmexProductAssignToPackingPlacePayloadKeySpecifier)[];
export type EmexProductAssignToPackingPlacePayloadFieldPolicy = {
	emexProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexProductCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | EmexProductCollectionSegmentKeySpecifier)[];
export type EmexProductCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmexProductLockedErrorKeySpecifier = ('code' | 'details' | 'id' | 'message' | 'product' | EmexProductLockedErrorKeySpecifier)[];
export type EmexProductLockedErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityKeySpecifier = ('id' | EntityKeySpecifier)[];
export type EntityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityNotFoundErrorKeySpecifier = ('id' | 'message' | 'type' | EntityNotFoundErrorKeySpecifier)[];
export type EntityNotFoundErrorFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorKeySpecifier = ('message' | ErrorKeySpecifier)[];
export type ErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilePrinterKeySpecifier = ('filePath' | 'isEnabled' | FilePrinterKeySpecifier)[];
export type FilePrinterFieldPolicy = {
	filePath?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FormatErrorKeySpecifier = ('message' | FormatErrorKeySpecifier)[];
export type FormatErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GrantedPolicyKeySpecifier = ('key' | 'value' | GrantedPolicyKeySpecifier)[];
export type GrantedPolicyFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HasCreationTimeKeySpecifier = ('creationTime' | HasCreationTimeKeySpecifier)[];
export type HasCreationTimeFieldPolicy = {
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HasDeletionTimeKeySpecifier = ('deletionTime' | 'isDeleted' | HasDeletionTimeKeySpecifier)[];
export type HasDeletionTimeFieldPolicy = {
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HasModificationTimeKeySpecifier = ('lastModificationTime' | HasModificationTimeKeySpecifier)[];
export type HasModificationTimeFieldPolicy = {
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IanaTimeZoneKeySpecifier = ('timeZoneName' | IanaTimeZoneKeySpecifier)[];
export type IanaTimeZoneFieldPolicy = {
	timeZoneName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IdentityRoleKeySpecifier = ('id' | 'isDefault' | 'isPublic' | 'isStatic' | 'name' | 'normalizedName' | 'tenant' | 'tenantId' | IdentityRoleKeySpecifier)[];
export type IdentityRoleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	isStatic?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	normalizedName?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IdentityRoleCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | IdentityRoleCollectionSegmentKeySpecifier)[];
export type IdentityRoleCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IdentityUserKeySpecifier = ('contractors' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'email' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'middleName' | 'name' | 'phoneNumber' | 'roleIds' | 'roles' | 'surname' | 'tenant' | 'tenantId' | IdentityUserKeySpecifier)[];
export type IdentityUserFieldPolicy = {
	contractors?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	middleName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	roleIds?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	surname?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IdentityUserCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | IdentityUserCollectionSegmentKeySpecifier)[];
export type IdentityUserCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IdentityUserEmailAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'email' | 'message' | IdentityUserEmailAlreadyExistsErrorKeySpecifier)[];
export type IdentityUserEmailAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndividualEntrepreneurKeySpecifier = ('accountBank' | 'actualAddress' | 'address' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'inn' | 'isDeleted' | 'isHost' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'mailingAddress' | 'name' | 'ogrnip' | 'okpo' | 'tenant' | 'tenantId' | IndividualEntrepreneurKeySpecifier)[];
export type IndividualEntrepreneurFieldPolicy = {
	accountBank?: FieldPolicy<any> | FieldReadFunction<any>,
	actualAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inn?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	isHost?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	mailingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ogrnip?: FieldPolicy<any> | FieldReadFunction<any>,
	okpo?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndividualEntrepreneurCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | IndividualEntrepreneurCollectionSegmentKeySpecifier)[];
export type IndividualEntrepreneurCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IssuePackingPlaceInPostamatPayloadKeySpecifier = ('errors' | 'postamat' | IssuePackingPlaceInPostamatPayloadKeySpecifier)[];
export type IssuePackingPlaceInPostamatPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeyValuePairOfStringAndDictionaryOfStringAndStringKeySpecifier = ('key' | 'value' | KeyValuePairOfStringAndDictionaryOfStringAndStringKeySpecifier)[];
export type KeyValuePairOfStringAndDictionaryOfStringAndStringFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeyValuePairOfStringAndListOfNameValueKeySpecifier = ('key' | 'value' | KeyValuePairOfStringAndListOfNameValueKeySpecifier)[];
export type KeyValuePairOfStringAndListOfNameValueFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeyValuePairOfStringAndStringKeySpecifier = ('key' | 'value' | KeyValuePairOfStringAndStringKeySpecifier)[];
export type KeyValuePairOfStringAndStringFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguageInfoKeySpecifier = ('cultureName' | 'displayName' | 'flagIcon' | 'uiCultureName' | LanguageInfoKeySpecifier)[];
export type LanguageInfoFieldPolicy = {
	cultureName?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	flagIcon?: FieldPolicy<any> | FieldReadFunction<any>,
	uiCultureName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastMileKeySpecifier = ('accessKeys' | 'accountIds' | 'address' | 'contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'externalId' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'returnPeriods' | 'smsTemplates' | 'status' | 'storagePeriods' | 'tenant' | 'tenantId' | 'token' | LastMileKeySpecifier)[];
export type LastMileFieldPolicy = {
	accessKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	accountIds?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	returnPeriods?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	storagePeriods?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastMileAccountIdsKeySpecifier = ('emexAccountId' | 'smsAccountId' | LastMileAccountIdsKeySpecifier)[];
export type LastMileAccountIdsFieldPolicy = {
	emexAccountId?: FieldPolicy<any> | FieldReadFunction<any>,
	smsAccountId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastMileCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | LastMileCollectionSegmentKeySpecifier)[];
export type LastMileCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastMileExternalIdAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'externalId' | 'message' | LastMileExternalIdAlreadyExistsErrorKeySpecifier)[];
export type LastMileExternalIdAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastMileFactoryNumberAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'factoryNumber' | 'message' | LastMileFactoryNumberAlreadyExistsErrorKeySpecifier)[];
export type LastMileFactoryNumberAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	factoryNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastMileNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | LastMileNameAlreadyExistsErrorKeySpecifier)[];
export type LastMileNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastMileReturnPeriodKeySpecifier = ('contractor' | 'contractorId' | 'lastMileId' | 'period' | 'tenant' | 'tenantId' | 'typeOrder' | LastMileReturnPeriodKeySpecifier)[];
export type LastMileReturnPeriodFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileId?: FieldPolicy<any> | FieldReadFunction<any>,
	period?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastMileSmsTemplateKeySpecifier = ('contractor' | 'contractorId' | 'eventType' | 'lastMileId' | 'smsTemplate' | 'smsTemplateId' | 'tenant' | 'tenantId' | 'typeOrder' | LastMileSmsTemplateKeySpecifier)[];
export type LastMileSmsTemplateFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileId?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplateId?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastMileStoragePeriodKeySpecifier = ('contractor' | 'contractorId' | 'lastMileId' | 'period' | 'tenant' | 'tenantId' | 'typeOrder' | LastMileStoragePeriodKeySpecifier)[];
export type LastMileStoragePeriodFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileId?: FieldPolicy<any> | FieldReadFunction<any>,
	period?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LockKeySpecifier = ('address' | 'cell' | 'contractor' | 'contractorId' | 'id' | 'tenant' | 'tenantId' | LockKeySpecifier)[];
export type LockFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	cell?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MayHaveCreatorKeySpecifier = ('creator' | 'creatorId' | MayHaveCreatorKeySpecifier)[];
export type MayHaveCreatorFieldPolicy = {
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModificationAuditedObjectKeySpecifier = ('lastModificationTime' | 'lastModifier' | 'lastModifierId' | ModificationAuditedObjectKeySpecifier)[];
export type ModificationAuditedObjectFieldPolicy = {
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MultiContractorKeySpecifier = ('contractor' | 'contractorId' | MultiContractorKeySpecifier)[];
export type MultiContractorFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MultiTenancyInfoKeySpecifier = ('isEnabled' | MultiTenancyInfoKeySpecifier)[];
export type MultiTenancyInfoFieldPolicy = {
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MultiTenantKeySpecifier = ('tenant' | 'tenantId' | MultiTenantKeySpecifier)[];
export type MultiTenantFieldPolicy = {
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('activateCell' | 'activatePostamat' | 'cancelReturnRequest' | 'cancelShipmentRequest' | 'createAccessKey' | 'createCell' | 'createCompany' | 'createEmexAccount' | 'createEmexOrder' | 'createEmexProduct' | 'createEmployee' | 'createIdentityRole' | 'createIndividualEntrepreneur' | 'createPackingPlace' | 'createPostamat' | 'createPromixController' | 'createReturnRequest' | 'createShipmentRequest' | 'createSize' | 'createSmsCenterAccount' | 'createSmsTemplate' | 'createTemplateCell' | 'createTemplatePostamat' | 'createTemplateSection' | 'createTenant' | 'deactivateCell' | 'deleteAccessKey' | 'deleteCell' | 'deleteCompany' | 'deleteEmexAccount' | 'deleteEmexOrder' | 'deleteEmexProduct' | 'deleteEmployee' | 'deleteIdentityRole' | 'deleteIndividualEntrepreneur' | 'deleteLastMileSmsTemplate' | 'deletePackingPlace' | 'deletePostamat' | 'deletePromixController' | 'deleteReturnRequest' | 'deleteShipmentRequest' | 'deleteSize' | 'deleteSmsCenterAccount' | 'deleteSmsTemplate' | 'deleteTemplateCell' | 'deleteTemplatePostamat' | 'deleteTemplateSection' | 'deleteTenant' | 'emexProductAssignToPackingPlace' | 'issuePackingPlaceInPostamat' | 'postamatAssignLockToCell' | 'postamatSendNewPinCode' | 'putPackingPlaceInPostamat' | 'returnReturnRequest' | 'sendPackingPlace' | 'sendShipmentRequest' | 'updateAccessKey' | 'updateCell' | 'updateCompany' | 'updateEmexAccount' | 'updateEmexOrder' | 'updateEmexProduct' | 'updateEmployee' | 'updateIdentityRole' | 'updateIndividualEntrepreneur' | 'updateLastMileAccounts' | 'updateLastMileReturnPeriod' | 'updateLastMileSmsTemplate' | 'updateLastMileStoragePeriod' | 'updatePackingPlace' | 'updatePermissions' | 'updatePostamat' | 'updatePostamatDisplay' | 'updatePostamatFilePrinter' | 'updatePostamatNetworkPrinter' | 'updatePostamatScanner' | 'updatePostamatSerialPrinter' | 'updatePostamatSettings' | 'updatePromixController' | 'updateReturnRequest' | 'updateShipmentRequest' | 'updateSize' | 'updateSmsCenterAccount' | 'updateSmsTemplate' | 'updateTemplateCell' | 'updateTemplatePostamat' | 'updateTemplateSection' | 'updateTenant' | 'updateTopology' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	activateCell?: FieldPolicy<any> | FieldReadFunction<any>,
	activatePostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelReturnRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelShipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	createAccessKey?: FieldPolicy<any> | FieldReadFunction<any>,
	createCell?: FieldPolicy<any> | FieldReadFunction<any>,
	createCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmexAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmexOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmexProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmployee?: FieldPolicy<any> | FieldReadFunction<any>,
	createIdentityRole?: FieldPolicy<any> | FieldReadFunction<any>,
	createIndividualEntrepreneur?: FieldPolicy<any> | FieldReadFunction<any>,
	createPackingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	createPostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	createPromixController?: FieldPolicy<any> | FieldReadFunction<any>,
	createReturnRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	createShipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	createSize?: FieldPolicy<any> | FieldReadFunction<any>,
	createSmsCenterAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	createSmsTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	createTemplateCell?: FieldPolicy<any> | FieldReadFunction<any>,
	createTemplatePostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	createTemplateSection?: FieldPolicy<any> | FieldReadFunction<any>,
	createTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	deactivateCell?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAccessKey?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCell?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEmexAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEmexOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEmexProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEmployee?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIdentityRole?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIndividualEntrepreneur?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteLastMileSmsTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePackingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePromixController?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteReturnRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteShipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSize?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSmsCenterAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSmsTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTemplateCell?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTemplatePostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTemplateSection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	emexProductAssignToPackingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	issuePackingPlaceInPostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatAssignLockToCell?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatSendNewPinCode?: FieldPolicy<any> | FieldReadFunction<any>,
	putPackingPlaceInPostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	returnReturnRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	sendPackingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	sendShipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAccessKey?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCell?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEmexAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEmexOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEmexProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEmployee?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIdentityRole?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIndividualEntrepreneur?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLastMileAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLastMileReturnPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLastMileSmsTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLastMileStoragePeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePackingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePermissions?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostamatDisplay?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostamatFilePrinter?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostamatNetworkPrinter?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostamatScanner?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostamatSerialPrinter?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostamatSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePromixController?: FieldPolicy<any> | FieldReadFunction<any>,
	updateReturnRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	updateShipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSize?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSmsCenterAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSmsTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTemplateCell?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTemplatePostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTemplateSection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTenant?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTopology?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NameValueKeySpecifier = ('name' | 'value' | NameValueKeySpecifier)[];
export type NameValueFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NetworkPrinterKeySpecifier = ('ipAddress' | 'isEnabled' | 'port' | 'reconnectOnTimeout' | NetworkPrinterKeySpecifier)[];
export type NetworkPrinterFieldPolicy = {
	ipAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	port?: FieldPolicy<any> | FieldReadFunction<any>,
	reconnectOnTimeout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackingPlaceKeySpecifier = ('barcode' | 'changesHistory' | 'contractor' | 'contractorId' | 'courier' | 'courierId' | 'creationTime' | 'creator' | 'creatorId' | 'customer' | 'customerId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'isLocked' | 'lastMile' | 'lastMileId' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'size' | 'sizeId' | 'status' | 'tenant' | 'tenantId' | 'typeOrder' | PackingPlaceKeySpecifier)[];
export type PackingPlaceFieldPolicy = {
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	changesHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	courier?: FieldPolicy<any> | FieldReadFunction<any>,
	courierId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMile?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileId?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sizeId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackingPlaceBarcodeAlreadyExistsErrorKeySpecifier = ('barcode' | 'code' | 'details' | 'message' | PackingPlaceBarcodeAlreadyExistsErrorKeySpecifier)[];
export type PackingPlaceBarcodeAlreadyExistsErrorFieldPolicy = {
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackingPlaceCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | PackingPlaceCollectionSegmentKeySpecifier)[];
export type PackingPlaceCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackingPlaceEmployeeIsNotCourierErrorKeySpecifier = ('code' | 'details' | 'employee' | 'identityUserId' | 'message' | PackingPlaceEmployeeIsNotCourierErrorKeySpecifier)[];
export type PackingPlaceEmployeeIsNotCourierErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	employee?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackingPlaceIncorrectStatusErrorKeySpecifier = ('code' | 'current' | 'details' | 'message' | 'next' | PackingPlaceIncorrectStatusErrorKeySpecifier)[];
export type PackingPlaceIncorrectStatusErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	next?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackingPlaceLockedErrorKeySpecifier = ('code' | 'details' | 'id' | 'message' | 'packingPlace' | PackingPlaceLockedErrorKeySpecifier)[];
export type PackingPlaceLockedErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackingPlaceShipmentRequestAssignedErrorKeySpecifier = ('code' | 'details' | 'message' | 'shipmentId' | PackingPlaceShipmentRequestAssignedErrorKeySpecifier)[];
export type PackingPlaceShipmentRequestAssignedErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackingPlaceStatusChangeHistoryKeySpecifier = ('contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'packingPlaceId' | 'status' | 'tenant' | 'tenantId' | PackingPlaceStatusChangeHistoryKeySpecifier)[];
export type PackingPlaceStatusChangeHistoryFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlaceId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGrantInfoKeySpecifier = ('allowedProviders' | 'displayName' | 'grantedProviders' | 'isGranted' | 'name' | 'parentName' | PermissionGrantInfoKeySpecifier)[];
export type PermissionGrantInfoFieldPolicy = {
	allowedProviders?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	grantedProviders?: FieldPolicy<any> | FieldReadFunction<any>,
	isGranted?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parentName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionGroupKeySpecifier = ('displayName' | 'name' | 'permissions' | PermissionGroupKeySpecifier)[];
export type PermissionGroupFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionListKeySpecifier = ('entityDisplayName' | 'groups' | PermissionListKeySpecifier)[];
export type PermissionListFieldPolicy = {
	entityDisplayName?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceInCellKeySpecifier = ('cellId' | 'contractor' | 'contractorId' | 'packingPlace' | 'packingPlaceId' | 'reserved' | 'storeUntil' | 'tenant' | 'tenantId' | PlaceInCellKeySpecifier)[];
export type PlaceInCellFieldPolicy = {
	cellId?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlaceId?: FieldPolicy<any> | FieldReadFunction<any>,
	reserved?: FieldPolicy<any> | FieldReadFunction<any>,
	storeUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PolicyKeySpecifier = ('key' | 'value' | PolicyKeySpecifier)[];
export type PolicyFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostamatKeySpecifier = ('accessKeys' | 'accountIds' | 'address' | 'cells' | 'contractor' | 'contractorId' | 'controllers' | 'creationTime' | 'creator' | 'creatorId' | 'defaultCourier' | 'defaultCourierId' | 'deleter' | 'deleterId' | 'deletionTime' | 'displays' | 'externalId' | 'factoryNumber' | 'filePrinter' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'networkPrinter' | 'returnPeriods' | 'scanner' | 'serialPrinter' | 'settings' | 'smsTemplates' | 'status' | 'storagePeriods' | 'tenant' | 'tenantId' | 'token' | PostamatKeySpecifier)[];
export type PostamatFieldPolicy = {
	accessKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	accountIds?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	cells?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	controllers?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultCourier?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultCourierId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	displays?: FieldPolicy<any> | FieldReadFunction<any>,
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	factoryNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	filePrinter?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	networkPrinter?: FieldPolicy<any> | FieldReadFunction<any>,
	returnPeriods?: FieldPolicy<any> | FieldReadFunction<any>,
	scanner?: FieldPolicy<any> | FieldReadFunction<any>,
	serialPrinter?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	storagePeriods?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostamatAssignLockToCellPayloadKeySpecifier = ('errors' | 'postamat' | PostamatAssignLockToCellPayloadKeySpecifier)[];
export type PostamatAssignLockToCellPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostamatCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | PostamatCollectionSegmentKeySpecifier)[];
export type PostamatCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostamatScannerKeySpecifier = ('baudRate' | 'dataBits' | 'parity' | 'portName' | 'stopBits' | PostamatScannerKeySpecifier)[];
export type PostamatScannerFieldPolicy = {
	baudRate?: FieldPolicy<any> | FieldReadFunction<any>,
	dataBits?: FieldPolicy<any> | FieldReadFunction<any>,
	parity?: FieldPolicy<any> | FieldReadFunction<any>,
	portName?: FieldPolicy<any> | FieldReadFunction<any>,
	stopBits?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostamatSendNewPinCodePayloadKeySpecifier = ('errors' | 'result' | PostamatSendNewPinCodePayloadKeySpecifier)[];
export type PostamatSendNewPinCodePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	result?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostamatSettingsKeySpecifier = ('adminPhone' | 'isAutoUpdate' | 'receptionWaitingListOnly' | PostamatSettingsKeySpecifier)[];
export type PostamatSettingsFieldPolicy = {
	adminPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	isAutoUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	receptionWaitingListOnly?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PromixControllerKeySpecifier = ('contractor' | 'contractorId' | 'id' | 'locks' | 'name' | 'postamatId' | 'settings' | 'tenant' | 'tenantId' | PromixControllerKeySpecifier)[];
export type PromixControllerFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locks?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatId?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProviderInfoKeySpecifier = ('providerKey' | 'providerName' | ProviderInfoKeySpecifier)[];
export type ProviderInfoFieldPolicy = {
	providerKey?: FieldPolicy<any> | FieldReadFunction<any>,
	providerName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PutPackingPlaceInPostamatPayloadKeySpecifier = ('errors' | 'postamat' | PutPackingPlaceInPostamatPayloadKeySpecifier)[];
export type PutPackingPlaceInPostamatPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('accessKey' | 'accessKeys' | 'accessKeysAny' | 'accessKeysCount' | 'applicationConfiguration' | 'cell' | 'cellById' | 'cells' | 'cellsAny' | 'cellsByPin' | 'companies' | 'companiesAny' | 'companiesCount' | 'company' | 'companyById' | 'contractor' | 'contractorById' | 'contractors' | 'contractorsAny' | 'contractorsCount' | 'controller' | 'controllers' | 'controllersAny' | 'controllersCount' | 'courier' | 'courierById' | 'couriers' | 'couriersAny' | 'couriersCount' | 'emexAccount' | 'emexAccountById' | 'emexAccounts' | 'emexAccountsAny' | 'emexAccountsCount' | 'emexCustomer' | 'emexCustomerById' | 'emexCustomers' | 'emexCustomersAny' | 'emexCustomersCount' | 'emexOrder' | 'emexOrderById' | 'emexOrders' | 'emexOrdersAny' | 'emexOrdersCount' | 'emexProduct' | 'emexProductById' | 'emexProducts' | 'emexProductsAny' | 'emexProductsCount' | 'employee' | 'employeeById' | 'employees' | 'employeesAny' | 'employeesCount' | 'identityRole' | 'identityRoleById' | 'identityRoles' | 'identityRolesAny' | 'identityRolesCount' | 'identityUser' | 'identityUserById' | 'identityUsers' | 'identityUsersAny' | 'identityUsersCount' | 'individualEntrepreneur' | 'individualEntrepreneurById' | 'individualEntrepreneurs' | 'individualEntrepreneursAny' | 'individualEntrepreneursCount' | 'isEmailUnique' | 'lastMile' | 'lastMileById' | 'lastMiles' | 'lastMilesAny' | 'lastMilesCount' | 'node' | 'nodes' | 'packingPlace' | 'packingPlaceById' | 'packingPlaceByLastMileId' | 'packingPlaces' | 'packingPlacesAny' | 'packingPlacesCount' | 'permissions' | 'postamat' | 'postamatById' | 'postamats' | 'postamatsAny' | 'postamatsCount' | 'returnRequest' | 'returnRequestById' | 'returnRequests' | 'returnRequestsAny' | 'returnRequestsCount' | 'shipmentRequest' | 'shipmentRequestById' | 'shipmentRequests' | 'shipmentRequestsAny' | 'shipmentRequestsCount' | 'size' | 'sizeById' | 'sizes' | 'sizesAny' | 'sizesCount' | 'smsAccount' | 'smsAccountById' | 'smsAccounts' | 'smsAccountsAny' | 'smsAccountsCount' | 'smsCenterAccount' | 'smsCenterAccountById' | 'smsCenterAccounts' | 'smsCenterAccountsAny' | 'smsCenterAccountsCount' | 'smsMessage' | 'smsMessageById' | 'smsMessages' | 'smsMessagesAny' | 'smsMessagesCount' | 'smsTemplate' | 'smsTemplateById' | 'smsTemplates' | 'smsTemplatesAny' | 'smsTemplatesCount' | 'templateCell' | 'templateCellById' | 'templatePostamat' | 'templatePostamatById' | 'templateSection' | 'templateSectionById' | 'templatesCell' | 'templatesCellAny' | 'templatesCellCount' | 'templatesPostamat' | 'templatesPostamatAny' | 'templatesPostamatCount' | 'templatesSection' | 'templatesSectionAny' | 'templatesSectionCount' | 'tenant' | 'tenants' | 'tenantsAny' | 'tenantsCount' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	accessKey?: FieldPolicy<any> | FieldReadFunction<any>,
	accessKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	accessKeysAny?: FieldPolicy<any> | FieldReadFunction<any>,
	accessKeysCount?: FieldPolicy<any> | FieldReadFunction<any>,
	applicationConfiguration?: FieldPolicy<any> | FieldReadFunction<any>,
	cell?: FieldPolicy<any> | FieldReadFunction<any>,
	cellById?: FieldPolicy<any> | FieldReadFunction<any>,
	cells?: FieldPolicy<any> | FieldReadFunction<any>,
	cellsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	cellsByPin?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	companiesAny?: FieldPolicy<any> | FieldReadFunction<any>,
	companiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyById?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorById?: FieldPolicy<any> | FieldReadFunction<any>,
	contractors?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	controller?: FieldPolicy<any> | FieldReadFunction<any>,
	controllers?: FieldPolicy<any> | FieldReadFunction<any>,
	controllersAny?: FieldPolicy<any> | FieldReadFunction<any>,
	controllersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	courier?: FieldPolicy<any> | FieldReadFunction<any>,
	courierById?: FieldPolicy<any> | FieldReadFunction<any>,
	couriers?: FieldPolicy<any> | FieldReadFunction<any>,
	couriersAny?: FieldPolicy<any> | FieldReadFunction<any>,
	couriersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	emexAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	emexAccountById?: FieldPolicy<any> | FieldReadFunction<any>,
	emexAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	emexAccountsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	emexAccountsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	emexCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	emexCustomerById?: FieldPolicy<any> | FieldReadFunction<any>,
	emexCustomers?: FieldPolicy<any> | FieldReadFunction<any>,
	emexCustomersAny?: FieldPolicy<any> | FieldReadFunction<any>,
	emexCustomersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	emexOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	emexOrderById?: FieldPolicy<any> | FieldReadFunction<any>,
	emexOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	emexOrdersAny?: FieldPolicy<any> | FieldReadFunction<any>,
	emexOrdersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	emexProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	emexProductById?: FieldPolicy<any> | FieldReadFunction<any>,
	emexProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	emexProductsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	emexProductsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	employee?: FieldPolicy<any> | FieldReadFunction<any>,
	employeeById?: FieldPolicy<any> | FieldReadFunction<any>,
	employees?: FieldPolicy<any> | FieldReadFunction<any>,
	employeesAny?: FieldPolicy<any> | FieldReadFunction<any>,
	employeesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	identityRole?: FieldPolicy<any> | FieldReadFunction<any>,
	identityRoleById?: FieldPolicy<any> | FieldReadFunction<any>,
	identityRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	identityRolesAny?: FieldPolicy<any> | FieldReadFunction<any>,
	identityRolesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUser?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUserById?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUsersAny?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUsersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	individualEntrepreneur?: FieldPolicy<any> | FieldReadFunction<any>,
	individualEntrepreneurById?: FieldPolicy<any> | FieldReadFunction<any>,
	individualEntrepreneurs?: FieldPolicy<any> | FieldReadFunction<any>,
	individualEntrepreneursAny?: FieldPolicy<any> | FieldReadFunction<any>,
	individualEntrepreneursCount?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailUnique?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMile?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileById?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMiles?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMilesAny?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMilesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlaceById?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlaceByLastMileId?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlaces?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlacesAny?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlacesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatById?: FieldPolicy<any> | FieldReadFunction<any>,
	postamats?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	postamatsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequestById?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequestsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequestsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequestById?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequestsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequestsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sizeById?: FieldPolicy<any> | FieldReadFunction<any>,
	sizes?: FieldPolicy<any> | FieldReadFunction<any>,
	sizesAny?: FieldPolicy<any> | FieldReadFunction<any>,
	sizesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	smsAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	smsAccountById?: FieldPolicy<any> | FieldReadFunction<any>,
	smsAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	smsAccountsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	smsAccountsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	smsCenterAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	smsCenterAccountById?: FieldPolicy<any> | FieldReadFunction<any>,
	smsCenterAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	smsCenterAccountsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	smsCenterAccountsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	smsMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	smsMessageById?: FieldPolicy<any> | FieldReadFunction<any>,
	smsMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	smsMessagesAny?: FieldPolicy<any> | FieldReadFunction<any>,
	smsMessagesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplateById?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplatesAny?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplatesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	templateCell?: FieldPolicy<any> | FieldReadFunction<any>,
	templateCellById?: FieldPolicy<any> | FieldReadFunction<any>,
	templatePostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	templatePostamatById?: FieldPolicy<any> | FieldReadFunction<any>,
	templateSection?: FieldPolicy<any> | FieldReadFunction<any>,
	templateSectionById?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesCell?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesCellAny?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesCellCount?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesPostamat?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesPostamatAny?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesPostamatCount?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesSection?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesSectionAny?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesSectionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenants?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantsAny?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantsCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReturnRequestKeySpecifier = ('atCourier' | 'atCourierId' | 'atLastMile' | 'atLastMileId' | 'cause' | 'changesHistory' | 'code' | 'comment' | 'contractor' | 'contractorId' | 'courier' | 'courierId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'packingPlace' | 'status' | 'tenant' | 'tenantId' | ReturnRequestKeySpecifier)[];
export type ReturnRequestFieldPolicy = {
	atCourier?: FieldPolicy<any> | FieldReadFunction<any>,
	atCourierId?: FieldPolicy<any> | FieldReadFunction<any>,
	atLastMile?: FieldPolicy<any> | FieldReadFunction<any>,
	atLastMileId?: FieldPolicy<any> | FieldReadFunction<any>,
	cause?: FieldPolicy<any> | FieldReadFunction<any>,
	changesHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	courier?: FieldPolicy<any> | FieldReadFunction<any>,
	courierId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReturnRequestCodeAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'requestCode' | ReturnRequestCodeAlreadyExistsErrorKeySpecifier)[];
export type ReturnRequestCodeAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	requestCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReturnRequestCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | ReturnRequestCollectionSegmentKeySpecifier)[];
export type ReturnRequestCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReturnRequestIncorrectStatusErrorKeySpecifier = ('code' | 'current' | 'details' | 'message' | 'next' | ReturnRequestIncorrectStatusErrorKeySpecifier)[];
export type ReturnRequestIncorrectStatusErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	next?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReturnRequestLocationNotSpecifiedErrorKeySpecifier = ('code' | 'details' | 'message' | ReturnRequestLocationNotSpecifiedErrorKeySpecifier)[];
export type ReturnRequestLocationNotSpecifiedErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReturnRequestLockedErrorKeySpecifier = ('code' | 'details' | 'id' | 'message' | 'returnRequest' | ReturnRequestLockedErrorKeySpecifier)[];
export type ReturnRequestLockedErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReturnRequestStatusChangeHistoryKeySpecifier = ('contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'returnRequestId' | 'status' | 'tenant' | 'tenantId' | ReturnRequestStatusChangeHistoryKeySpecifier)[];
export type ReturnRequestStatusChangeHistoryFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequestId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReturnReturnRequestPayloadKeySpecifier = ('errors' | 'returnRequest' | ReturnReturnRequestPayloadKeySpecifier)[];
export type ReturnReturnRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectableContractorKeySpecifier = ('id' | 'name' | SelectableContractorKeySpecifier)[];
export type SelectableContractorFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendPackingPlacePayloadKeySpecifier = ('errors' | 'packingPlace' | SendPackingPlacePayloadKeySpecifier)[];
export type SendPackingPlacePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendShipmentRequestPayloadKeySpecifier = ('errors' | 'shipmentRequest' | SendShipmentRequestPayloadKeySpecifier)[];
export type SendShipmentRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SerialPortSettingsKeySpecifier = ('baudRate' | 'dataBits' | 'parity' | 'portName' | 'stopBits' | SerialPortSettingsKeySpecifier)[];
export type SerialPortSettingsFieldPolicy = {
	baudRate?: FieldPolicy<any> | FieldReadFunction<any>,
	dataBits?: FieldPolicy<any> | FieldReadFunction<any>,
	parity?: FieldPolicy<any> | FieldReadFunction<any>,
	portName?: FieldPolicy<any> | FieldReadFunction<any>,
	stopBits?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SerialPrinterKeySpecifier = ('isEnabled' | 'settings' | SerialPrinterKeySpecifier)[];
export type SerialPrinterFieldPolicy = {
	isEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentRequestKeySpecifier = ('cause' | 'changesHistory' | 'code' | 'comment' | 'contractor' | 'contractorId' | 'courier' | 'courierId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'lastMile' | 'lastMileId' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'packingPlaces' | 'status' | 'tenant' | 'tenantId' | ShipmentRequestKeySpecifier)[];
export type ShipmentRequestFieldPolicy = {
	cause?: FieldPolicy<any> | FieldReadFunction<any>,
	changesHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	courier?: FieldPolicy<any> | FieldReadFunction<any>,
	courierId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMile?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileId?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlaces?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentRequestCodeAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'requestCode' | ShipmentRequestCodeAlreadyExistsErrorKeySpecifier)[];
export type ShipmentRequestCodeAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	requestCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentRequestCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | ShipmentRequestCollectionSegmentKeySpecifier)[];
export type ShipmentRequestCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentRequestIncorrectStatusErrorKeySpecifier = ('code' | 'current' | 'details' | 'message' | 'next' | ShipmentRequestIncorrectStatusErrorKeySpecifier)[];
export type ShipmentRequestIncorrectStatusErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	next?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentRequestLockedErrorKeySpecifier = ('code' | 'details' | 'id' | 'message' | 'shipmentRequest' | ShipmentRequestLockedErrorKeySpecifier)[];
export type ShipmentRequestLockedErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShipmentRequestStatusChangeHistoryKeySpecifier = ('contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'shipmentRequestId' | 'status' | 'tenant' | 'tenantId' | ShipmentRequestStatusChangeHistoryKeySpecifier)[];
export type ShipmentRequestStatusChangeHistoryFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequestId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SizeKeySpecifier = ('creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'tenant' | 'tenantId' | SizeKeySpecifier)[];
export type SizeFieldPolicy = {
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SizeCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | SizeCollectionSegmentKeySpecifier)[];
export type SizeCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SizeNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | SizeNameAlreadyExistsErrorKeySpecifier)[];
export type SizeNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsAccountKeySpecifier = ('contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'sender' | 'tenant' | 'tenantId' | SmsAccountKeySpecifier)[];
export type SmsAccountFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsAccountCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | SmsAccountCollectionSegmentKeySpecifier)[];
export type SmsAccountCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsAccountNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | SmsAccountNameAlreadyExistsErrorKeySpecifier)[];
export type SmsAccountNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsCenterAccountKeySpecifier = ('contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'login' | 'name' | 'sender' | 'tenant' | 'tenantId' | SmsCenterAccountKeySpecifier)[];
export type SmsCenterAccountFieldPolicy = {
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsCenterAccountCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | SmsCenterAccountCollectionSegmentKeySpecifier)[];
export type SmsCenterAccountCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageKeySpecifier = ('accountId' | 'contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'error' | 'id' | 'isDeleted' | 'isSuccess' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'phoneNumber' | 'tenant' | 'tenantId' | 'text' | 'timeDispatch' | SmsMessageKeySpecifier)[];
export type SmsMessageFieldPolicy = {
	accountId?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	isSuccess?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	timeDispatch?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | SmsMessageCollectionSegmentKeySpecifier)[];
export type SmsMessageCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsTemplateKeySpecifier = ('comment' | 'contractor' | 'contractorId' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'eventType' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'template' | 'tenant' | 'tenantId' | SmsTemplateKeySpecifier)[];
export type SmsTemplateFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	contractor?: FieldPolicy<any> | FieldReadFunction<any>,
	contractorId?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	eventType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsTemplateCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | SmsTemplateCollectionSegmentKeySpecifier)[];
export type SmsTemplateCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsTemplateNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | SmsTemplateNameAlreadyExistsErrorKeySpecifier)[];
export type SmsTemplateNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SoftDeleteKeySpecifier = ('isDeleted' | SoftDeleteKeySpecifier)[];
export type SoftDeleteFieldPolicy = {
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateCellKeySpecifier = ('creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'height' | 'id' | 'imageUrl' | 'isCell' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'size' | 'sizeId' | 'tenant' | 'tenantId' | 'width' | TemplateCellKeySpecifier)[];
export type TemplateCellFieldPolicy = {
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	isCell?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sizeId?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateCellCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | TemplateCellCollectionSegmentKeySpecifier)[];
export type TemplateCellCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateCellNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | TemplateCellNameAlreadyExistsErrorKeySpecifier)[];
export type TemplateCellNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateCellSizeIdEmptyErrorKeySpecifier = ('code' | 'details' | 'message' | TemplateCellSizeIdEmptyErrorKeySpecifier)[];
export type TemplateCellSizeIdEmptyErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplatePostamatKeySpecifier = ('creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'sections' | 'tenant' | 'tenantId' | TemplatePostamatKeySpecifier)[];
export type TemplatePostamatFieldPolicy = {
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sections?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplatePostamatCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | TemplatePostamatCollectionSegmentKeySpecifier)[];
export type TemplatePostamatCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplatePostamatNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | TemplatePostamatNameAlreadyExistsErrorKeySpecifier)[];
export type TemplatePostamatNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplatePostamatTemplateSectionKeySpecifier = ('position' | 'templatePostamatId' | 'templateSection' | 'templateSectionId' | 'tenant' | 'tenantId' | TemplatePostamatTemplateSectionKeySpecifier)[];
export type TemplatePostamatTemplateSectionFieldPolicy = {
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	templatePostamatId?: FieldPolicy<any> | FieldReadFunction<any>,
	templateSection?: FieldPolicy<any> | FieldReadFunction<any>,
	templateSectionId?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateSectionKeySpecifier = ('cells' | 'creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | 'tenant' | 'tenantId' | TemplateSectionKeySpecifier)[];
export type TemplateSectionFieldPolicy = {
	cells?: FieldPolicy<any> | FieldReadFunction<any>,
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateSectionCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | TemplateSectionCollectionSegmentKeySpecifier)[];
export type TemplateSectionCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateSectionNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | TemplateSectionNameAlreadyExistsErrorKeySpecifier)[];
export type TemplateSectionNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateSectionTemplateCellKeySpecifier = ('position' | 'templateCell' | 'templateCellId' | 'templateSectionId' | 'tenant' | 'tenantId' | TemplateSectionTemplateCellKeySpecifier)[];
export type TemplateSectionTemplateCellFieldPolicy = {
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	templateCell?: FieldPolicy<any> | FieldReadFunction<any>,
	templateCellId?: FieldPolicy<any> | FieldReadFunction<any>,
	templateSectionId?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>,
	tenantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TenantKeySpecifier = ('creationTime' | 'creator' | 'creatorId' | 'deleter' | 'deleterId' | 'deletionTime' | 'emailForDocuments' | 'id' | 'isDeleted' | 'lastModificationTime' | 'lastModifier' | 'lastModifierId' | 'name' | TenantKeySpecifier)[];
export type TenantFieldPolicy = {
	creationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	deleter?: FieldPolicy<any> | FieldReadFunction<any>,
	deleterId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletionTime?: FieldPolicy<any> | FieldReadFunction<any>,
	emailForDocuments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModificationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifier?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifierId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TenantCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | TenantCollectionSegmentKeySpecifier)[];
export type TenantCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TenantNameAlreadyExistsErrorKeySpecifier = ('code' | 'details' | 'message' | 'name' | 'tenant' | TenantNameAlreadyExistsErrorKeySpecifier)[];
export type TenantNameAlreadyExistsErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimeZoneKeySpecifier = ('iana' | 'windows' | TimeZoneKeySpecifier)[];
export type TimeZoneFieldPolicy = {
	iana?: FieldPolicy<any> | FieldReadFunction<any>,
	windows?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimingKeySpecifier = ('timeZone' | TimingKeySpecifier)[];
export type TimingFieldPolicy = {
	timeZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypeOrderIsNotCorrectErrorKeySpecifier = ('code' | 'current' | 'details' | 'message' | 'verifiable' | TypeOrderIsNotCorrectErrorKeySpecifier)[];
export type TypeOrderIsNotCorrectErrorFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	current?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	verifiable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateAccessKeyPayloadKeySpecifier = ('accessKey' | 'errors' | UpdateAccessKeyPayloadKeySpecifier)[];
export type UpdateAccessKeyPayloadFieldPolicy = {
	accessKey?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCellPayloadKeySpecifier = ('cell' | 'errors' | UpdateCellPayloadKeySpecifier)[];
export type UpdateCellPayloadFieldPolicy = {
	cell?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCompanyPayloadKeySpecifier = ('company' | 'errors' | UpdateCompanyPayloadKeySpecifier)[];
export type UpdateCompanyPayloadFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEmexAccountPayloadKeySpecifier = ('emexAccount' | 'errors' | UpdateEmexAccountPayloadKeySpecifier)[];
export type UpdateEmexAccountPayloadFieldPolicy = {
	emexAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEmexOrderPayloadKeySpecifier = ('emexOrder' | 'errors' | UpdateEmexOrderPayloadKeySpecifier)[];
export type UpdateEmexOrderPayloadFieldPolicy = {
	emexOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEmexProductPayloadKeySpecifier = ('emexProduct' | 'errors' | UpdateEmexProductPayloadKeySpecifier)[];
export type UpdateEmexProductPayloadFieldPolicy = {
	emexProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEmployeePayloadKeySpecifier = ('errors' | 'identityUser' | UpdateEmployeePayloadKeySpecifier)[];
export type UpdateEmployeePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	identityUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateIdentityRolePayloadKeySpecifier = ('errors' | 'identityRole' | UpdateIdentityRolePayloadKeySpecifier)[];
export type UpdateIdentityRolePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	identityRole?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateIndividualEntrepreneurPayloadKeySpecifier = ('errors' | 'individualEntrepreneur' | UpdateIndividualEntrepreneurPayloadKeySpecifier)[];
export type UpdateIndividualEntrepreneurPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	individualEntrepreneur?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateLastMileAccountsPayloadKeySpecifier = ('errors' | 'lastMile' | UpdateLastMileAccountsPayloadKeySpecifier)[];
export type UpdateLastMileAccountsPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateLastMileReturnPeriodPayloadKeySpecifier = ('errors' | 'lastMileReturnPeriod' | UpdateLastMileReturnPeriodPayloadKeySpecifier)[];
export type UpdateLastMileReturnPeriodPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileReturnPeriod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateLastMileSmsTemplatePayloadKeySpecifier = ('errors' | 'lastMileSmsTemplate' | UpdateLastMileSmsTemplatePayloadKeySpecifier)[];
export type UpdateLastMileSmsTemplatePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileSmsTemplate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateLastMileStoragePeriodPayloadKeySpecifier = ('errors' | 'lastMileStoragePeriod' | UpdateLastMileStoragePeriodPayloadKeySpecifier)[];
export type UpdateLastMileStoragePeriodPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMileStoragePeriod?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePackingPlacePayloadKeySpecifier = ('errors' | 'packingPlace' | UpdatePackingPlacePayloadKeySpecifier)[];
export type UpdatePackingPlacePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	packingPlace?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePermissionsPayloadKeySpecifier = ('boolean' | 'errors' | UpdatePermissionsPayloadKeySpecifier)[];
export type UpdatePermissionsPayloadFieldPolicy = {
	boolean?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostamatDisplayPayloadKeySpecifier = ('errors' | 'postamat' | UpdatePostamatDisplayPayloadKeySpecifier)[];
export type UpdatePostamatDisplayPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostamatFilePrinterPayloadKeySpecifier = ('errors' | 'postamat' | UpdatePostamatFilePrinterPayloadKeySpecifier)[];
export type UpdatePostamatFilePrinterPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostamatNetworkPrinterPayloadKeySpecifier = ('errors' | 'postamat' | UpdatePostamatNetworkPrinterPayloadKeySpecifier)[];
export type UpdatePostamatNetworkPrinterPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostamatPayloadKeySpecifier = ('errors' | 'postamat' | UpdatePostamatPayloadKeySpecifier)[];
export type UpdatePostamatPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostamatScannerPayloadKeySpecifier = ('errors' | 'postamat' | UpdatePostamatScannerPayloadKeySpecifier)[];
export type UpdatePostamatScannerPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostamatSerialPrinterPayloadKeySpecifier = ('errors' | 'postamat' | UpdatePostamatSerialPrinterPayloadKeySpecifier)[];
export type UpdatePostamatSerialPrinterPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostamatSettingsPayloadKeySpecifier = ('errors' | 'postamat' | UpdatePostamatSettingsPayloadKeySpecifier)[];
export type UpdatePostamatSettingsPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePromixControllerPayloadKeySpecifier = ('errors' | 'promixController' | UpdatePromixControllerPayloadKeySpecifier)[];
export type UpdatePromixControllerPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	promixController?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateReturnRequestPayloadKeySpecifier = ('errors' | 'returnRequest' | UpdateReturnRequestPayloadKeySpecifier)[];
export type UpdateReturnRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	returnRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateShipmentRequestPayloadKeySpecifier = ('errors' | 'shipmentRequest' | UpdateShipmentRequestPayloadKeySpecifier)[];
export type UpdateShipmentRequestPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentRequest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSizePayloadKeySpecifier = ('errors' | 'size' | UpdateSizePayloadKeySpecifier)[];
export type UpdateSizePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSmsCenterAccountPayloadKeySpecifier = ('errors' | 'smsCenterAccount' | UpdateSmsCenterAccountPayloadKeySpecifier)[];
export type UpdateSmsCenterAccountPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	smsCenterAccount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSmsTemplatePayloadKeySpecifier = ('errors' | 'smsTemplate' | UpdateSmsTemplatePayloadKeySpecifier)[];
export type UpdateSmsTemplatePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	smsTemplate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTemplateCellPayloadKeySpecifier = ('errors' | 'templateCell' | UpdateTemplateCellPayloadKeySpecifier)[];
export type UpdateTemplateCellPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	templateCell?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTemplatePostamatPayloadKeySpecifier = ('errors' | 'templatePostamat' | UpdateTemplatePostamatPayloadKeySpecifier)[];
export type UpdateTemplatePostamatPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	templatePostamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTemplateSectionPayloadKeySpecifier = ('errors' | 'templateSection' | UpdateTemplateSectionPayloadKeySpecifier)[];
export type UpdateTemplateSectionPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	templateSection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTenantPayloadKeySpecifier = ('errors' | 'tenant' | UpdateTenantPayloadKeySpecifier)[];
export type UpdateTenantPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	tenant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTopologyPayloadKeySpecifier = ('errors' | 'postamat' | UpdateTopologyPayloadKeySpecifier)[];
export type UpdateTopologyPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postamat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidationErrorKeySpecifier = ('message' | ValidationErrorKeySpecifier)[];
export type ValidationErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WindowsTimeZoneKeySpecifier = ('timeZoneId' | WindowsTimeZoneKeySpecifier)[];
export type WindowsTimeZoneFieldPolicy = {
	timeZoneId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _SchemaDefinitionKeySpecifier = ('document' | 'extensionDocuments' | 'name' | _SchemaDefinitionKeySpecifier)[];
export type _SchemaDefinitionFieldPolicy = {
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	extensionDocuments?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AccessKey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessKeyKeySpecifier | (() => undefined | AccessKeyKeySpecifier),
		fields?: AccessKeyFieldPolicy,
	},
	AccountBank?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountBankKeySpecifier | (() => undefined | AccountBankKeySpecifier),
		fields?: AccountBankFieldPolicy,
	},
	ActivateCellPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivateCellPayloadKeySpecifier | (() => undefined | ActivateCellPayloadKeySpecifier),
		fields?: ActivateCellPayloadFieldPolicy,
	},
	ActivatePostamatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivatePostamatPayloadKeySpecifier | (() => undefined | ActivatePostamatPayloadKeySpecifier),
		fields?: ActivatePostamatPayloadFieldPolicy,
	},
	ActivatedPostamat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivatedPostamatKeySpecifier | (() => undefined | ActivatedPostamatKeySpecifier),
		fields?: ActivatedPostamatFieldPolicy,
	},
	ApplicationAuthConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationAuthConfigurationKeySpecifier | (() => undefined | ApplicationAuthConfigurationKeySpecifier),
		fields?: ApplicationAuthConfigurationFieldPolicy,
	},
	ApplicationConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationConfigurationKeySpecifier | (() => undefined | ApplicationConfigurationKeySpecifier),
		fields?: ApplicationConfigurationFieldPolicy,
	},
	ApplicationFeature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationFeatureKeySpecifier | (() => undefined | ApplicationFeatureKeySpecifier),
		fields?: ApplicationFeatureFieldPolicy,
	},
	ApplicationFeatureConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationFeatureConfigurationKeySpecifier | (() => undefined | ApplicationFeatureConfigurationKeySpecifier),
		fields?: ApplicationFeatureConfigurationFieldPolicy,
	},
	ApplicationLocalizationConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationLocalizationConfigurationKeySpecifier | (() => undefined | ApplicationLocalizationConfigurationKeySpecifier),
		fields?: ApplicationLocalizationConfigurationFieldPolicy,
	},
	ApplicationSetting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationSettingKeySpecifier | (() => undefined | ApplicationSettingKeySpecifier),
		fields?: ApplicationSettingFieldPolicy,
	},
	ApplicationSettingConfiguration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicationSettingConfigurationKeySpecifier | (() => undefined | ApplicationSettingConfigurationKeySpecifier),
		fields?: ApplicationSettingConfigurationFieldPolicy,
	},
	AuthorizeDirective?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthorizeDirectiveKeySpecifier | (() => undefined | AuthorizeDirectiveKeySpecifier),
		fields?: AuthorizeDirectiveFieldPolicy,
	},
	BusinessError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BusinessErrorKeySpecifier | (() => undefined | BusinessErrorKeySpecifier),
		fields?: BusinessErrorFieldPolicy,
	},
	CancelReturnRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CancelReturnRequestPayloadKeySpecifier | (() => undefined | CancelReturnRequestPayloadKeySpecifier),
		fields?: CancelReturnRequestPayloadFieldPolicy,
	},
	CancelShipmentRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CancelShipmentRequestPayloadKeySpecifier | (() => undefined | CancelShipmentRequestPayloadKeySpecifier),
		fields?: CancelShipmentRequestPayloadFieldPolicy,
	},
	Cell?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CellKeySpecifier | (() => undefined | CellKeySpecifier),
		fields?: CellFieldPolicy,
	},
	CellBarcodeAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CellBarcodeAlreadyExistsErrorKeySpecifier | (() => undefined | CellBarcodeAlreadyExistsErrorKeySpecifier),
		fields?: CellBarcodeAlreadyExistsErrorFieldPolicy,
	},
	CellDeleteWhenNotEmptyError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CellDeleteWhenNotEmptyErrorKeySpecifier | (() => undefined | CellDeleteWhenNotEmptyErrorKeySpecifier),
		fields?: CellDeleteWhenNotEmptyErrorFieldPolicy,
	},
	CellDisplay?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CellDisplayKeySpecifier | (() => undefined | CellDisplayKeySpecifier),
		fields?: CellDisplayFieldPolicy,
	},
	CellNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CellNameAlreadyExistsErrorKeySpecifier | (() => undefined | CellNameAlreadyExistsErrorKeySpecifier),
		fields?: CellNameAlreadyExistsErrorFieldPolicy,
	},
	CellPinCodeAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CellPinCodeAlreadyExistsErrorKeySpecifier | (() => undefined | CellPinCodeAlreadyExistsErrorKeySpecifier),
		fields?: CellPinCodeAlreadyExistsErrorFieldPolicy,
	},
	CellServicePinCodeAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CellServicePinCodeAlreadyExistsErrorKeySpecifier | (() => undefined | CellServicePinCodeAlreadyExistsErrorKeySpecifier),
		fields?: CellServicePinCodeAlreadyExistsErrorFieldPolicy,
	},
	Clock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClockKeySpecifier | (() => undefined | ClockKeySpecifier),
		fields?: ClockFieldPolicy,
	},
	CollectionSegmentInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionSegmentInfoKeySpecifier | (() => undefined | CollectionSegmentInfoKeySpecifier),
		fields?: CollectionSegmentInfoFieldPolicy,
	},
	Company?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyKeySpecifier | (() => undefined | CompanyKeySpecifier),
		fields?: CompanyFieldPolicy,
	},
	CompanyCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyCollectionSegmentKeySpecifier | (() => undefined | CompanyCollectionSegmentKeySpecifier),
		fields?: CompanyCollectionSegmentFieldPolicy,
	},
	Contractor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractorKeySpecifier | (() => undefined | ContractorKeySpecifier),
		fields?: ContractorFieldPolicy,
	},
	ContractorCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractorCollectionSegmentKeySpecifier | (() => undefined | ContractorCollectionSegmentKeySpecifier),
		fields?: ContractorCollectionSegmentFieldPolicy,
	},
	ContractorHostDeletionError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractorHostDeletionErrorKeySpecifier | (() => undefined | ContractorHostDeletionErrorKeySpecifier),
		fields?: ContractorHostDeletionErrorFieldPolicy,
	},
	ContractorInnAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractorInnAlreadyExistsErrorKeySpecifier | (() => undefined | ContractorInnAlreadyExistsErrorKeySpecifier),
		fields?: ContractorInnAlreadyExistsErrorFieldPolicy,
	},
	ContractorNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractorNameAlreadyExistsErrorKeySpecifier | (() => undefined | ContractorNameAlreadyExistsErrorKeySpecifier),
		fields?: ContractorNameAlreadyExistsErrorFieldPolicy,
	},
	ControllerBase?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ControllerBaseKeySpecifier | (() => undefined | ControllerBaseKeySpecifier),
		fields?: ControllerBaseFieldPolicy,
	},
	ControllerNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ControllerNameAlreadyExistsErrorKeySpecifier | (() => undefined | ControllerNameAlreadyExistsErrorKeySpecifier),
		fields?: ControllerNameAlreadyExistsErrorFieldPolicy,
	},
	CreateAccessKeyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateAccessKeyPayloadKeySpecifier | (() => undefined | CreateAccessKeyPayloadKeySpecifier),
		fields?: CreateAccessKeyPayloadFieldPolicy,
	},
	CreateCellPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCellPayloadKeySpecifier | (() => undefined | CreateCellPayloadKeySpecifier),
		fields?: CreateCellPayloadFieldPolicy,
	},
	CreateCompanyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCompanyPayloadKeySpecifier | (() => undefined | CreateCompanyPayloadKeySpecifier),
		fields?: CreateCompanyPayloadFieldPolicy,
	},
	CreateEmexAccountPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateEmexAccountPayloadKeySpecifier | (() => undefined | CreateEmexAccountPayloadKeySpecifier),
		fields?: CreateEmexAccountPayloadFieldPolicy,
	},
	CreateEmexOrderPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateEmexOrderPayloadKeySpecifier | (() => undefined | CreateEmexOrderPayloadKeySpecifier),
		fields?: CreateEmexOrderPayloadFieldPolicy,
	},
	CreateEmexProductPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateEmexProductPayloadKeySpecifier | (() => undefined | CreateEmexProductPayloadKeySpecifier),
		fields?: CreateEmexProductPayloadFieldPolicy,
	},
	CreateEmployeePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateEmployeePayloadKeySpecifier | (() => undefined | CreateEmployeePayloadKeySpecifier),
		fields?: CreateEmployeePayloadFieldPolicy,
	},
	CreateIdentityRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateIdentityRolePayloadKeySpecifier | (() => undefined | CreateIdentityRolePayloadKeySpecifier),
		fields?: CreateIdentityRolePayloadFieldPolicy,
	},
	CreateIndividualEntrepreneurPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateIndividualEntrepreneurPayloadKeySpecifier | (() => undefined | CreateIndividualEntrepreneurPayloadKeySpecifier),
		fields?: CreateIndividualEntrepreneurPayloadFieldPolicy,
	},
	CreatePackingPlacePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePackingPlacePayloadKeySpecifier | (() => undefined | CreatePackingPlacePayloadKeySpecifier),
		fields?: CreatePackingPlacePayloadFieldPolicy,
	},
	CreatePostamatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePostamatPayloadKeySpecifier | (() => undefined | CreatePostamatPayloadKeySpecifier),
		fields?: CreatePostamatPayloadFieldPolicy,
	},
	CreatePromixControllerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePromixControllerPayloadKeySpecifier | (() => undefined | CreatePromixControllerPayloadKeySpecifier),
		fields?: CreatePromixControllerPayloadFieldPolicy,
	},
	CreateReturnRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateReturnRequestPayloadKeySpecifier | (() => undefined | CreateReturnRequestPayloadKeySpecifier),
		fields?: CreateReturnRequestPayloadFieldPolicy,
	},
	CreateShipmentRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateShipmentRequestPayloadKeySpecifier | (() => undefined | CreateShipmentRequestPayloadKeySpecifier),
		fields?: CreateShipmentRequestPayloadFieldPolicy,
	},
	CreateSizePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSizePayloadKeySpecifier | (() => undefined | CreateSizePayloadKeySpecifier),
		fields?: CreateSizePayloadFieldPolicy,
	},
	CreateSmsCenterAccountPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSmsCenterAccountPayloadKeySpecifier | (() => undefined | CreateSmsCenterAccountPayloadKeySpecifier),
		fields?: CreateSmsCenterAccountPayloadFieldPolicy,
	},
	CreateSmsTemplatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSmsTemplatePayloadKeySpecifier | (() => undefined | CreateSmsTemplatePayloadKeySpecifier),
		fields?: CreateSmsTemplatePayloadFieldPolicy,
	},
	CreateTemplateCellPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTemplateCellPayloadKeySpecifier | (() => undefined | CreateTemplateCellPayloadKeySpecifier),
		fields?: CreateTemplateCellPayloadFieldPolicy,
	},
	CreateTemplatePostamatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTemplatePostamatPayloadKeySpecifier | (() => undefined | CreateTemplatePostamatPayloadKeySpecifier),
		fields?: CreateTemplatePostamatPayloadFieldPolicy,
	},
	CreateTemplateSectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTemplateSectionPayloadKeySpecifier | (() => undefined | CreateTemplateSectionPayloadKeySpecifier),
		fields?: CreateTemplateSectionPayloadFieldPolicy,
	},
	CreateTenantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTenantPayloadKeySpecifier | (() => undefined | CreateTenantPayloadKeySpecifier),
		fields?: CreateTenantPayloadFieldPolicy,
	},
	CreationAuditedObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreationAuditedObjectKeySpecifier | (() => undefined | CreationAuditedObjectKeySpecifier),
		fields?: CreationAuditedObjectFieldPolicy,
	},
	CurrentContractor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrentContractorKeySpecifier | (() => undefined | CurrentContractorKeySpecifier),
		fields?: CurrentContractorFieldPolicy,
	},
	CurrentCulture?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrentCultureKeySpecifier | (() => undefined | CurrentCultureKeySpecifier),
		fields?: CurrentCultureFieldPolicy,
	},
	CurrentTenant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrentTenantKeySpecifier | (() => undefined | CurrentTenantKeySpecifier),
		fields?: CurrentTenantFieldPolicy,
	},
	CurrentUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrentUserKeySpecifier | (() => undefined | CurrentUserKeySpecifier),
		fields?: CurrentUserFieldPolicy,
	},
	Customer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerKeySpecifier | (() => undefined | CustomerKeySpecifier),
		fields?: CustomerFieldPolicy,
	},
	DateTimeFormat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DateTimeFormatKeySpecifier | (() => undefined | DateTimeFormatKeySpecifier),
		fields?: DateTimeFormatFieldPolicy,
	},
	DeactivateCellPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeactivateCellPayloadKeySpecifier | (() => undefined | DeactivateCellPayloadKeySpecifier),
		fields?: DeactivateCellPayloadFieldPolicy,
	},
	DeleteAccessKeyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteAccessKeyPayloadKeySpecifier | (() => undefined | DeleteAccessKeyPayloadKeySpecifier),
		fields?: DeleteAccessKeyPayloadFieldPolicy,
	},
	DeleteCellPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCellPayloadKeySpecifier | (() => undefined | DeleteCellPayloadKeySpecifier),
		fields?: DeleteCellPayloadFieldPolicy,
	},
	DeleteCompanyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCompanyPayloadKeySpecifier | (() => undefined | DeleteCompanyPayloadKeySpecifier),
		fields?: DeleteCompanyPayloadFieldPolicy,
	},
	DeleteEmexAccountPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteEmexAccountPayloadKeySpecifier | (() => undefined | DeleteEmexAccountPayloadKeySpecifier),
		fields?: DeleteEmexAccountPayloadFieldPolicy,
	},
	DeleteEmexOrderPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteEmexOrderPayloadKeySpecifier | (() => undefined | DeleteEmexOrderPayloadKeySpecifier),
		fields?: DeleteEmexOrderPayloadFieldPolicy,
	},
	DeleteEmexProductPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteEmexProductPayloadKeySpecifier | (() => undefined | DeleteEmexProductPayloadKeySpecifier),
		fields?: DeleteEmexProductPayloadFieldPolicy,
	},
	DeleteEmployeePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteEmployeePayloadKeySpecifier | (() => undefined | DeleteEmployeePayloadKeySpecifier),
		fields?: DeleteEmployeePayloadFieldPolicy,
	},
	DeleteIdentityRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteIdentityRolePayloadKeySpecifier | (() => undefined | DeleteIdentityRolePayloadKeySpecifier),
		fields?: DeleteIdentityRolePayloadFieldPolicy,
	},
	DeleteIndividualEntrepreneurPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteIndividualEntrepreneurPayloadKeySpecifier | (() => undefined | DeleteIndividualEntrepreneurPayloadKeySpecifier),
		fields?: DeleteIndividualEntrepreneurPayloadFieldPolicy,
	},
	DeleteLastMileSmsTemplatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteLastMileSmsTemplatePayloadKeySpecifier | (() => undefined | DeleteLastMileSmsTemplatePayloadKeySpecifier),
		fields?: DeleteLastMileSmsTemplatePayloadFieldPolicy,
	},
	DeletePackingPlacePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePackingPlacePayloadKeySpecifier | (() => undefined | DeletePackingPlacePayloadKeySpecifier),
		fields?: DeletePackingPlacePayloadFieldPolicy,
	},
	DeletePostamatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePostamatPayloadKeySpecifier | (() => undefined | DeletePostamatPayloadKeySpecifier),
		fields?: DeletePostamatPayloadFieldPolicy,
	},
	DeletePromixControllerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePromixControllerPayloadKeySpecifier | (() => undefined | DeletePromixControllerPayloadKeySpecifier),
		fields?: DeletePromixControllerPayloadFieldPolicy,
	},
	DeleteReturnRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteReturnRequestPayloadKeySpecifier | (() => undefined | DeleteReturnRequestPayloadKeySpecifier),
		fields?: DeleteReturnRequestPayloadFieldPolicy,
	},
	DeleteShipmentRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteShipmentRequestPayloadKeySpecifier | (() => undefined | DeleteShipmentRequestPayloadKeySpecifier),
		fields?: DeleteShipmentRequestPayloadFieldPolicy,
	},
	DeleteSizePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteSizePayloadKeySpecifier | (() => undefined | DeleteSizePayloadKeySpecifier),
		fields?: DeleteSizePayloadFieldPolicy,
	},
	DeleteSmsCenterAccountPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteSmsCenterAccountPayloadKeySpecifier | (() => undefined | DeleteSmsCenterAccountPayloadKeySpecifier),
		fields?: DeleteSmsCenterAccountPayloadFieldPolicy,
	},
	DeleteSmsTemplatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteSmsTemplatePayloadKeySpecifier | (() => undefined | DeleteSmsTemplatePayloadKeySpecifier),
		fields?: DeleteSmsTemplatePayloadFieldPolicy,
	},
	DeleteTemplateCellPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteTemplateCellPayloadKeySpecifier | (() => undefined | DeleteTemplateCellPayloadKeySpecifier),
		fields?: DeleteTemplateCellPayloadFieldPolicy,
	},
	DeleteTemplatePostamatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteTemplatePostamatPayloadKeySpecifier | (() => undefined | DeleteTemplatePostamatPayloadKeySpecifier),
		fields?: DeleteTemplatePostamatPayloadFieldPolicy,
	},
	DeleteTemplateSectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteTemplateSectionPayloadKeySpecifier | (() => undefined | DeleteTemplateSectionPayloadKeySpecifier),
		fields?: DeleteTemplateSectionPayloadFieldPolicy,
	},
	DeleteTenantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteTenantPayloadKeySpecifier | (() => undefined | DeleteTenantPayloadKeySpecifier),
		fields?: DeleteTenantPayloadFieldPolicy,
	},
	DeletionAuditedObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletionAuditedObjectKeySpecifier | (() => undefined | DeletionAuditedObjectKeySpecifier),
		fields?: DeletionAuditedObjectFieldPolicy,
	},
	EmexAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexAccountKeySpecifier | (() => undefined | EmexAccountKeySpecifier),
		fields?: EmexAccountFieldPolicy,
	},
	EmexAccountCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexAccountCollectionSegmentKeySpecifier | (() => undefined | EmexAccountCollectionSegmentKeySpecifier),
		fields?: EmexAccountCollectionSegmentFieldPolicy,
	},
	EmexAccountNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexAccountNameAlreadyExistsErrorKeySpecifier | (() => undefined | EmexAccountNameAlreadyExistsErrorKeySpecifier),
		fields?: EmexAccountNameAlreadyExistsErrorFieldPolicy,
	},
	EmexAccountUserIdAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexAccountUserIdAlreadyExistsErrorKeySpecifier | (() => undefined | EmexAccountUserIdAlreadyExistsErrorKeySpecifier),
		fields?: EmexAccountUserIdAlreadyExistsErrorFieldPolicy,
	},
	EmexCustomer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexCustomerKeySpecifier | (() => undefined | EmexCustomerKeySpecifier),
		fields?: EmexCustomerFieldPolicy,
	},
	EmexCustomerCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexCustomerCollectionSegmentKeySpecifier | (() => undefined | EmexCustomerCollectionSegmentKeySpecifier),
		fields?: EmexCustomerCollectionSegmentFieldPolicy,
	},
	EmexOrder?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexOrderKeySpecifier | (() => undefined | EmexOrderKeySpecifier),
		fields?: EmexOrderFieldPolicy,
	},
	EmexOrderCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexOrderCollectionSegmentKeySpecifier | (() => undefined | EmexOrderCollectionSegmentKeySpecifier),
		fields?: EmexOrderCollectionSegmentFieldPolicy,
	},
	EmexOrderCustomerIdIsNotEqualError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexOrderCustomerIdIsNotEqualErrorKeySpecifier | (() => undefined | EmexOrderCustomerIdIsNotEqualErrorKeySpecifier),
		fields?: EmexOrderCustomerIdIsNotEqualErrorFieldPolicy,
	},
	EmexOrderExternalIdAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexOrderExternalIdAlreadyExistsErrorKeySpecifier | (() => undefined | EmexOrderExternalIdAlreadyExistsErrorKeySpecifier),
		fields?: EmexOrderExternalIdAlreadyExistsErrorFieldPolicy,
	},
	EmexOrderLockedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexOrderLockedErrorKeySpecifier | (() => undefined | EmexOrderLockedErrorKeySpecifier),
		fields?: EmexOrderLockedErrorFieldPolicy,
	},
	EmexProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexProductKeySpecifier | (() => undefined | EmexProductKeySpecifier),
		fields?: EmexProductFieldPolicy,
	},
	EmexProductAssignToPackingPlacePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexProductAssignToPackingPlacePayloadKeySpecifier | (() => undefined | EmexProductAssignToPackingPlacePayloadKeySpecifier),
		fields?: EmexProductAssignToPackingPlacePayloadFieldPolicy,
	},
	EmexProductCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexProductCollectionSegmentKeySpecifier | (() => undefined | EmexProductCollectionSegmentKeySpecifier),
		fields?: EmexProductCollectionSegmentFieldPolicy,
	},
	EmexProductLockedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmexProductLockedErrorKeySpecifier | (() => undefined | EmexProductLockedErrorKeySpecifier),
		fields?: EmexProductLockedErrorFieldPolicy,
	},
	Entity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityKeySpecifier | (() => undefined | EntityKeySpecifier),
		fields?: EntityFieldPolicy,
	},
	EntityNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityNotFoundErrorKeySpecifier | (() => undefined | EntityNotFoundErrorKeySpecifier),
		fields?: EntityNotFoundErrorFieldPolicy,
	},
	Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		fields?: ErrorFieldPolicy,
	},
	FilePrinter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilePrinterKeySpecifier | (() => undefined | FilePrinterKeySpecifier),
		fields?: FilePrinterFieldPolicy,
	},
	FormatError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FormatErrorKeySpecifier | (() => undefined | FormatErrorKeySpecifier),
		fields?: FormatErrorFieldPolicy,
	},
	GrantedPolicy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GrantedPolicyKeySpecifier | (() => undefined | GrantedPolicyKeySpecifier),
		fields?: GrantedPolicyFieldPolicy,
	},
	HasCreationTime?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HasCreationTimeKeySpecifier | (() => undefined | HasCreationTimeKeySpecifier),
		fields?: HasCreationTimeFieldPolicy,
	},
	HasDeletionTime?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HasDeletionTimeKeySpecifier | (() => undefined | HasDeletionTimeKeySpecifier),
		fields?: HasDeletionTimeFieldPolicy,
	},
	HasModificationTime?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HasModificationTimeKeySpecifier | (() => undefined | HasModificationTimeKeySpecifier),
		fields?: HasModificationTimeFieldPolicy,
	},
	IanaTimeZone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IanaTimeZoneKeySpecifier | (() => undefined | IanaTimeZoneKeySpecifier),
		fields?: IanaTimeZoneFieldPolicy,
	},
	IdentityRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IdentityRoleKeySpecifier | (() => undefined | IdentityRoleKeySpecifier),
		fields?: IdentityRoleFieldPolicy,
	},
	IdentityRoleCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IdentityRoleCollectionSegmentKeySpecifier | (() => undefined | IdentityRoleCollectionSegmentKeySpecifier),
		fields?: IdentityRoleCollectionSegmentFieldPolicy,
	},
	IdentityUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IdentityUserKeySpecifier | (() => undefined | IdentityUserKeySpecifier),
		fields?: IdentityUserFieldPolicy,
	},
	IdentityUserCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IdentityUserCollectionSegmentKeySpecifier | (() => undefined | IdentityUserCollectionSegmentKeySpecifier),
		fields?: IdentityUserCollectionSegmentFieldPolicy,
	},
	IdentityUserEmailAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IdentityUserEmailAlreadyExistsErrorKeySpecifier | (() => undefined | IdentityUserEmailAlreadyExistsErrorKeySpecifier),
		fields?: IdentityUserEmailAlreadyExistsErrorFieldPolicy,
	},
	IndividualEntrepreneur?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndividualEntrepreneurKeySpecifier | (() => undefined | IndividualEntrepreneurKeySpecifier),
		fields?: IndividualEntrepreneurFieldPolicy,
	},
	IndividualEntrepreneurCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndividualEntrepreneurCollectionSegmentKeySpecifier | (() => undefined | IndividualEntrepreneurCollectionSegmentKeySpecifier),
		fields?: IndividualEntrepreneurCollectionSegmentFieldPolicy,
	},
	IssuePackingPlaceInPostamatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IssuePackingPlaceInPostamatPayloadKeySpecifier | (() => undefined | IssuePackingPlaceInPostamatPayloadKeySpecifier),
		fields?: IssuePackingPlaceInPostamatPayloadFieldPolicy,
	},
	KeyValuePairOfStringAndDictionaryOfStringAndString?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeyValuePairOfStringAndDictionaryOfStringAndStringKeySpecifier | (() => undefined | KeyValuePairOfStringAndDictionaryOfStringAndStringKeySpecifier),
		fields?: KeyValuePairOfStringAndDictionaryOfStringAndStringFieldPolicy,
	},
	KeyValuePairOfStringAndListOfNameValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeyValuePairOfStringAndListOfNameValueKeySpecifier | (() => undefined | KeyValuePairOfStringAndListOfNameValueKeySpecifier),
		fields?: KeyValuePairOfStringAndListOfNameValueFieldPolicy,
	},
	KeyValuePairOfStringAndString?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeyValuePairOfStringAndStringKeySpecifier | (() => undefined | KeyValuePairOfStringAndStringKeySpecifier),
		fields?: KeyValuePairOfStringAndStringFieldPolicy,
	},
	LanguageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguageInfoKeySpecifier | (() => undefined | LanguageInfoKeySpecifier),
		fields?: LanguageInfoFieldPolicy,
	},
	LastMile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastMileKeySpecifier | (() => undefined | LastMileKeySpecifier),
		fields?: LastMileFieldPolicy,
	},
	LastMileAccountIds?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastMileAccountIdsKeySpecifier | (() => undefined | LastMileAccountIdsKeySpecifier),
		fields?: LastMileAccountIdsFieldPolicy,
	},
	LastMileCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastMileCollectionSegmentKeySpecifier | (() => undefined | LastMileCollectionSegmentKeySpecifier),
		fields?: LastMileCollectionSegmentFieldPolicy,
	},
	LastMileExternalIdAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastMileExternalIdAlreadyExistsErrorKeySpecifier | (() => undefined | LastMileExternalIdAlreadyExistsErrorKeySpecifier),
		fields?: LastMileExternalIdAlreadyExistsErrorFieldPolicy,
	},
	LastMileFactoryNumberAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastMileFactoryNumberAlreadyExistsErrorKeySpecifier | (() => undefined | LastMileFactoryNumberAlreadyExistsErrorKeySpecifier),
		fields?: LastMileFactoryNumberAlreadyExistsErrorFieldPolicy,
	},
	LastMileNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastMileNameAlreadyExistsErrorKeySpecifier | (() => undefined | LastMileNameAlreadyExistsErrorKeySpecifier),
		fields?: LastMileNameAlreadyExistsErrorFieldPolicy,
	},
	LastMileReturnPeriod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastMileReturnPeriodKeySpecifier | (() => undefined | LastMileReturnPeriodKeySpecifier),
		fields?: LastMileReturnPeriodFieldPolicy,
	},
	LastMileSmsTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastMileSmsTemplateKeySpecifier | (() => undefined | LastMileSmsTemplateKeySpecifier),
		fields?: LastMileSmsTemplateFieldPolicy,
	},
	LastMileStoragePeriod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastMileStoragePeriodKeySpecifier | (() => undefined | LastMileStoragePeriodKeySpecifier),
		fields?: LastMileStoragePeriodFieldPolicy,
	},
	Lock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LockKeySpecifier | (() => undefined | LockKeySpecifier),
		fields?: LockFieldPolicy,
	},
	MayHaveCreator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MayHaveCreatorKeySpecifier | (() => undefined | MayHaveCreatorKeySpecifier),
		fields?: MayHaveCreatorFieldPolicy,
	},
	ModificationAuditedObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModificationAuditedObjectKeySpecifier | (() => undefined | ModificationAuditedObjectKeySpecifier),
		fields?: ModificationAuditedObjectFieldPolicy,
	},
	MultiContractor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MultiContractorKeySpecifier | (() => undefined | MultiContractorKeySpecifier),
		fields?: MultiContractorFieldPolicy,
	},
	MultiTenancyInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MultiTenancyInfoKeySpecifier | (() => undefined | MultiTenancyInfoKeySpecifier),
		fields?: MultiTenancyInfoFieldPolicy,
	},
	MultiTenant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MultiTenantKeySpecifier | (() => undefined | MultiTenantKeySpecifier),
		fields?: MultiTenantFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NameValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NameValueKeySpecifier | (() => undefined | NameValueKeySpecifier),
		fields?: NameValueFieldPolicy,
	},
	NetworkPrinter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NetworkPrinterKeySpecifier | (() => undefined | NetworkPrinterKeySpecifier),
		fields?: NetworkPrinterFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	PackingPlace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackingPlaceKeySpecifier | (() => undefined | PackingPlaceKeySpecifier),
		fields?: PackingPlaceFieldPolicy,
	},
	PackingPlaceBarcodeAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackingPlaceBarcodeAlreadyExistsErrorKeySpecifier | (() => undefined | PackingPlaceBarcodeAlreadyExistsErrorKeySpecifier),
		fields?: PackingPlaceBarcodeAlreadyExistsErrorFieldPolicy,
	},
	PackingPlaceCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackingPlaceCollectionSegmentKeySpecifier | (() => undefined | PackingPlaceCollectionSegmentKeySpecifier),
		fields?: PackingPlaceCollectionSegmentFieldPolicy,
	},
	PackingPlaceEmployeeIsNotCourierError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackingPlaceEmployeeIsNotCourierErrorKeySpecifier | (() => undefined | PackingPlaceEmployeeIsNotCourierErrorKeySpecifier),
		fields?: PackingPlaceEmployeeIsNotCourierErrorFieldPolicy,
	},
	PackingPlaceIncorrectStatusError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackingPlaceIncorrectStatusErrorKeySpecifier | (() => undefined | PackingPlaceIncorrectStatusErrorKeySpecifier),
		fields?: PackingPlaceIncorrectStatusErrorFieldPolicy,
	},
	PackingPlaceLockedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackingPlaceLockedErrorKeySpecifier | (() => undefined | PackingPlaceLockedErrorKeySpecifier),
		fields?: PackingPlaceLockedErrorFieldPolicy,
	},
	PackingPlaceShipmentRequestAssignedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackingPlaceShipmentRequestAssignedErrorKeySpecifier | (() => undefined | PackingPlaceShipmentRequestAssignedErrorKeySpecifier),
		fields?: PackingPlaceShipmentRequestAssignedErrorFieldPolicy,
	},
	PackingPlaceStatusChangeHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackingPlaceStatusChangeHistoryKeySpecifier | (() => undefined | PackingPlaceStatusChangeHistoryKeySpecifier),
		fields?: PackingPlaceStatusChangeHistoryFieldPolicy,
	},
	PermissionGrantInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGrantInfoKeySpecifier | (() => undefined | PermissionGrantInfoKeySpecifier),
		fields?: PermissionGrantInfoFieldPolicy,
	},
	PermissionGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionGroupKeySpecifier | (() => undefined | PermissionGroupKeySpecifier),
		fields?: PermissionGroupFieldPolicy,
	},
	PermissionList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionListKeySpecifier | (() => undefined | PermissionListKeySpecifier),
		fields?: PermissionListFieldPolicy,
	},
	PlaceInCell?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceInCellKeySpecifier | (() => undefined | PlaceInCellKeySpecifier),
		fields?: PlaceInCellFieldPolicy,
	},
	Policy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PolicyKeySpecifier | (() => undefined | PolicyKeySpecifier),
		fields?: PolicyFieldPolicy,
	},
	Postamat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostamatKeySpecifier | (() => undefined | PostamatKeySpecifier),
		fields?: PostamatFieldPolicy,
	},
	PostamatAssignLockToCellPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostamatAssignLockToCellPayloadKeySpecifier | (() => undefined | PostamatAssignLockToCellPayloadKeySpecifier),
		fields?: PostamatAssignLockToCellPayloadFieldPolicy,
	},
	PostamatCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostamatCollectionSegmentKeySpecifier | (() => undefined | PostamatCollectionSegmentKeySpecifier),
		fields?: PostamatCollectionSegmentFieldPolicy,
	},
	PostamatScanner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostamatScannerKeySpecifier | (() => undefined | PostamatScannerKeySpecifier),
		fields?: PostamatScannerFieldPolicy,
	},
	PostamatSendNewPinCodePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostamatSendNewPinCodePayloadKeySpecifier | (() => undefined | PostamatSendNewPinCodePayloadKeySpecifier),
		fields?: PostamatSendNewPinCodePayloadFieldPolicy,
	},
	PostamatSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostamatSettingsKeySpecifier | (() => undefined | PostamatSettingsKeySpecifier),
		fields?: PostamatSettingsFieldPolicy,
	},
	PromixController?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PromixControllerKeySpecifier | (() => undefined | PromixControllerKeySpecifier),
		fields?: PromixControllerFieldPolicy,
	},
	ProviderInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProviderInfoKeySpecifier | (() => undefined | ProviderInfoKeySpecifier),
		fields?: ProviderInfoFieldPolicy,
	},
	PutPackingPlaceInPostamatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PutPackingPlaceInPostamatPayloadKeySpecifier | (() => undefined | PutPackingPlaceInPostamatPayloadKeySpecifier),
		fields?: PutPackingPlaceInPostamatPayloadFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ReturnRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReturnRequestKeySpecifier | (() => undefined | ReturnRequestKeySpecifier),
		fields?: ReturnRequestFieldPolicy,
	},
	ReturnRequestCodeAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReturnRequestCodeAlreadyExistsErrorKeySpecifier | (() => undefined | ReturnRequestCodeAlreadyExistsErrorKeySpecifier),
		fields?: ReturnRequestCodeAlreadyExistsErrorFieldPolicy,
	},
	ReturnRequestCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReturnRequestCollectionSegmentKeySpecifier | (() => undefined | ReturnRequestCollectionSegmentKeySpecifier),
		fields?: ReturnRequestCollectionSegmentFieldPolicy,
	},
	ReturnRequestIncorrectStatusError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReturnRequestIncorrectStatusErrorKeySpecifier | (() => undefined | ReturnRequestIncorrectStatusErrorKeySpecifier),
		fields?: ReturnRequestIncorrectStatusErrorFieldPolicy,
	},
	ReturnRequestLocationNotSpecifiedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReturnRequestLocationNotSpecifiedErrorKeySpecifier | (() => undefined | ReturnRequestLocationNotSpecifiedErrorKeySpecifier),
		fields?: ReturnRequestLocationNotSpecifiedErrorFieldPolicy,
	},
	ReturnRequestLockedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReturnRequestLockedErrorKeySpecifier | (() => undefined | ReturnRequestLockedErrorKeySpecifier),
		fields?: ReturnRequestLockedErrorFieldPolicy,
	},
	ReturnRequestStatusChangeHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReturnRequestStatusChangeHistoryKeySpecifier | (() => undefined | ReturnRequestStatusChangeHistoryKeySpecifier),
		fields?: ReturnRequestStatusChangeHistoryFieldPolicy,
	},
	ReturnReturnRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReturnReturnRequestPayloadKeySpecifier | (() => undefined | ReturnReturnRequestPayloadKeySpecifier),
		fields?: ReturnReturnRequestPayloadFieldPolicy,
	},
	SelectableContractor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectableContractorKeySpecifier | (() => undefined | SelectableContractorKeySpecifier),
		fields?: SelectableContractorFieldPolicy,
	},
	SendPackingPlacePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendPackingPlacePayloadKeySpecifier | (() => undefined | SendPackingPlacePayloadKeySpecifier),
		fields?: SendPackingPlacePayloadFieldPolicy,
	},
	SendShipmentRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendShipmentRequestPayloadKeySpecifier | (() => undefined | SendShipmentRequestPayloadKeySpecifier),
		fields?: SendShipmentRequestPayloadFieldPolicy,
	},
	SerialPortSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SerialPortSettingsKeySpecifier | (() => undefined | SerialPortSettingsKeySpecifier),
		fields?: SerialPortSettingsFieldPolicy,
	},
	SerialPrinter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SerialPrinterKeySpecifier | (() => undefined | SerialPrinterKeySpecifier),
		fields?: SerialPrinterFieldPolicy,
	},
	ShipmentRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentRequestKeySpecifier | (() => undefined | ShipmentRequestKeySpecifier),
		fields?: ShipmentRequestFieldPolicy,
	},
	ShipmentRequestCodeAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentRequestCodeAlreadyExistsErrorKeySpecifier | (() => undefined | ShipmentRequestCodeAlreadyExistsErrorKeySpecifier),
		fields?: ShipmentRequestCodeAlreadyExistsErrorFieldPolicy,
	},
	ShipmentRequestCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentRequestCollectionSegmentKeySpecifier | (() => undefined | ShipmentRequestCollectionSegmentKeySpecifier),
		fields?: ShipmentRequestCollectionSegmentFieldPolicy,
	},
	ShipmentRequestIncorrectStatusError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentRequestIncorrectStatusErrorKeySpecifier | (() => undefined | ShipmentRequestIncorrectStatusErrorKeySpecifier),
		fields?: ShipmentRequestIncorrectStatusErrorFieldPolicy,
	},
	ShipmentRequestLockedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentRequestLockedErrorKeySpecifier | (() => undefined | ShipmentRequestLockedErrorKeySpecifier),
		fields?: ShipmentRequestLockedErrorFieldPolicy,
	},
	ShipmentRequestStatusChangeHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShipmentRequestStatusChangeHistoryKeySpecifier | (() => undefined | ShipmentRequestStatusChangeHistoryKeySpecifier),
		fields?: ShipmentRequestStatusChangeHistoryFieldPolicy,
	},
	Size?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SizeKeySpecifier | (() => undefined | SizeKeySpecifier),
		fields?: SizeFieldPolicy,
	},
	SizeCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SizeCollectionSegmentKeySpecifier | (() => undefined | SizeCollectionSegmentKeySpecifier),
		fields?: SizeCollectionSegmentFieldPolicy,
	},
	SizeNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SizeNameAlreadyExistsErrorKeySpecifier | (() => undefined | SizeNameAlreadyExistsErrorKeySpecifier),
		fields?: SizeNameAlreadyExistsErrorFieldPolicy,
	},
	SmsAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsAccountKeySpecifier | (() => undefined | SmsAccountKeySpecifier),
		fields?: SmsAccountFieldPolicy,
	},
	SmsAccountCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsAccountCollectionSegmentKeySpecifier | (() => undefined | SmsAccountCollectionSegmentKeySpecifier),
		fields?: SmsAccountCollectionSegmentFieldPolicy,
	},
	SmsAccountNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsAccountNameAlreadyExistsErrorKeySpecifier | (() => undefined | SmsAccountNameAlreadyExistsErrorKeySpecifier),
		fields?: SmsAccountNameAlreadyExistsErrorFieldPolicy,
	},
	SmsCenterAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsCenterAccountKeySpecifier | (() => undefined | SmsCenterAccountKeySpecifier),
		fields?: SmsCenterAccountFieldPolicy,
	},
	SmsCenterAccountCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsCenterAccountCollectionSegmentKeySpecifier | (() => undefined | SmsCenterAccountCollectionSegmentKeySpecifier),
		fields?: SmsCenterAccountCollectionSegmentFieldPolicy,
	},
	SmsMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageKeySpecifier | (() => undefined | SmsMessageKeySpecifier),
		fields?: SmsMessageFieldPolicy,
	},
	SmsMessageCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageCollectionSegmentKeySpecifier | (() => undefined | SmsMessageCollectionSegmentKeySpecifier),
		fields?: SmsMessageCollectionSegmentFieldPolicy,
	},
	SmsTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsTemplateKeySpecifier | (() => undefined | SmsTemplateKeySpecifier),
		fields?: SmsTemplateFieldPolicy,
	},
	SmsTemplateCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsTemplateCollectionSegmentKeySpecifier | (() => undefined | SmsTemplateCollectionSegmentKeySpecifier),
		fields?: SmsTemplateCollectionSegmentFieldPolicy,
	},
	SmsTemplateNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsTemplateNameAlreadyExistsErrorKeySpecifier | (() => undefined | SmsTemplateNameAlreadyExistsErrorKeySpecifier),
		fields?: SmsTemplateNameAlreadyExistsErrorFieldPolicy,
	},
	SoftDelete?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SoftDeleteKeySpecifier | (() => undefined | SoftDeleteKeySpecifier),
		fields?: SoftDeleteFieldPolicy,
	},
	TemplateCell?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateCellKeySpecifier | (() => undefined | TemplateCellKeySpecifier),
		fields?: TemplateCellFieldPolicy,
	},
	TemplateCellCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateCellCollectionSegmentKeySpecifier | (() => undefined | TemplateCellCollectionSegmentKeySpecifier),
		fields?: TemplateCellCollectionSegmentFieldPolicy,
	},
	TemplateCellNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateCellNameAlreadyExistsErrorKeySpecifier | (() => undefined | TemplateCellNameAlreadyExistsErrorKeySpecifier),
		fields?: TemplateCellNameAlreadyExistsErrorFieldPolicy,
	},
	TemplateCellSizeIdEmptyError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateCellSizeIdEmptyErrorKeySpecifier | (() => undefined | TemplateCellSizeIdEmptyErrorKeySpecifier),
		fields?: TemplateCellSizeIdEmptyErrorFieldPolicy,
	},
	TemplatePostamat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplatePostamatKeySpecifier | (() => undefined | TemplatePostamatKeySpecifier),
		fields?: TemplatePostamatFieldPolicy,
	},
	TemplatePostamatCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplatePostamatCollectionSegmentKeySpecifier | (() => undefined | TemplatePostamatCollectionSegmentKeySpecifier),
		fields?: TemplatePostamatCollectionSegmentFieldPolicy,
	},
	TemplatePostamatNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplatePostamatNameAlreadyExistsErrorKeySpecifier | (() => undefined | TemplatePostamatNameAlreadyExistsErrorKeySpecifier),
		fields?: TemplatePostamatNameAlreadyExistsErrorFieldPolicy,
	},
	TemplatePostamatTemplateSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplatePostamatTemplateSectionKeySpecifier | (() => undefined | TemplatePostamatTemplateSectionKeySpecifier),
		fields?: TemplatePostamatTemplateSectionFieldPolicy,
	},
	TemplateSection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateSectionKeySpecifier | (() => undefined | TemplateSectionKeySpecifier),
		fields?: TemplateSectionFieldPolicy,
	},
	TemplateSectionCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateSectionCollectionSegmentKeySpecifier | (() => undefined | TemplateSectionCollectionSegmentKeySpecifier),
		fields?: TemplateSectionCollectionSegmentFieldPolicy,
	},
	TemplateSectionNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateSectionNameAlreadyExistsErrorKeySpecifier | (() => undefined | TemplateSectionNameAlreadyExistsErrorKeySpecifier),
		fields?: TemplateSectionNameAlreadyExistsErrorFieldPolicy,
	},
	TemplateSectionTemplateCell?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateSectionTemplateCellKeySpecifier | (() => undefined | TemplateSectionTemplateCellKeySpecifier),
		fields?: TemplateSectionTemplateCellFieldPolicy,
	},
	Tenant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TenantKeySpecifier | (() => undefined | TenantKeySpecifier),
		fields?: TenantFieldPolicy,
	},
	TenantCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TenantCollectionSegmentKeySpecifier | (() => undefined | TenantCollectionSegmentKeySpecifier),
		fields?: TenantCollectionSegmentFieldPolicy,
	},
	TenantNameAlreadyExistsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TenantNameAlreadyExistsErrorKeySpecifier | (() => undefined | TenantNameAlreadyExistsErrorKeySpecifier),
		fields?: TenantNameAlreadyExistsErrorFieldPolicy,
	},
	TimeZone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimeZoneKeySpecifier | (() => undefined | TimeZoneKeySpecifier),
		fields?: TimeZoneFieldPolicy,
	},
	Timing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimingKeySpecifier | (() => undefined | TimingKeySpecifier),
		fields?: TimingFieldPolicy,
	},
	TypeOrderIsNotCorrectError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TypeOrderIsNotCorrectErrorKeySpecifier | (() => undefined | TypeOrderIsNotCorrectErrorKeySpecifier),
		fields?: TypeOrderIsNotCorrectErrorFieldPolicy,
	},
	UpdateAccessKeyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateAccessKeyPayloadKeySpecifier | (() => undefined | UpdateAccessKeyPayloadKeySpecifier),
		fields?: UpdateAccessKeyPayloadFieldPolicy,
	},
	UpdateCellPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCellPayloadKeySpecifier | (() => undefined | UpdateCellPayloadKeySpecifier),
		fields?: UpdateCellPayloadFieldPolicy,
	},
	UpdateCompanyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCompanyPayloadKeySpecifier | (() => undefined | UpdateCompanyPayloadKeySpecifier),
		fields?: UpdateCompanyPayloadFieldPolicy,
	},
	UpdateEmexAccountPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEmexAccountPayloadKeySpecifier | (() => undefined | UpdateEmexAccountPayloadKeySpecifier),
		fields?: UpdateEmexAccountPayloadFieldPolicy,
	},
	UpdateEmexOrderPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEmexOrderPayloadKeySpecifier | (() => undefined | UpdateEmexOrderPayloadKeySpecifier),
		fields?: UpdateEmexOrderPayloadFieldPolicy,
	},
	UpdateEmexProductPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEmexProductPayloadKeySpecifier | (() => undefined | UpdateEmexProductPayloadKeySpecifier),
		fields?: UpdateEmexProductPayloadFieldPolicy,
	},
	UpdateEmployeePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEmployeePayloadKeySpecifier | (() => undefined | UpdateEmployeePayloadKeySpecifier),
		fields?: UpdateEmployeePayloadFieldPolicy,
	},
	UpdateIdentityRolePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateIdentityRolePayloadKeySpecifier | (() => undefined | UpdateIdentityRolePayloadKeySpecifier),
		fields?: UpdateIdentityRolePayloadFieldPolicy,
	},
	UpdateIndividualEntrepreneurPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateIndividualEntrepreneurPayloadKeySpecifier | (() => undefined | UpdateIndividualEntrepreneurPayloadKeySpecifier),
		fields?: UpdateIndividualEntrepreneurPayloadFieldPolicy,
	},
	UpdateLastMileAccountsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateLastMileAccountsPayloadKeySpecifier | (() => undefined | UpdateLastMileAccountsPayloadKeySpecifier),
		fields?: UpdateLastMileAccountsPayloadFieldPolicy,
	},
	UpdateLastMileReturnPeriodPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateLastMileReturnPeriodPayloadKeySpecifier | (() => undefined | UpdateLastMileReturnPeriodPayloadKeySpecifier),
		fields?: UpdateLastMileReturnPeriodPayloadFieldPolicy,
	},
	UpdateLastMileSmsTemplatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateLastMileSmsTemplatePayloadKeySpecifier | (() => undefined | UpdateLastMileSmsTemplatePayloadKeySpecifier),
		fields?: UpdateLastMileSmsTemplatePayloadFieldPolicy,
	},
	UpdateLastMileStoragePeriodPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateLastMileStoragePeriodPayloadKeySpecifier | (() => undefined | UpdateLastMileStoragePeriodPayloadKeySpecifier),
		fields?: UpdateLastMileStoragePeriodPayloadFieldPolicy,
	},
	UpdatePackingPlacePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePackingPlacePayloadKeySpecifier | (() => undefined | UpdatePackingPlacePayloadKeySpecifier),
		fields?: UpdatePackingPlacePayloadFieldPolicy,
	},
	UpdatePermissionsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePermissionsPayloadKeySpecifier | (() => undefined | UpdatePermissionsPayloadKeySpecifier),
		fields?: UpdatePermissionsPayloadFieldPolicy,
	},
	UpdatePostamatDisplayPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostamatDisplayPayloadKeySpecifier | (() => undefined | UpdatePostamatDisplayPayloadKeySpecifier),
		fields?: UpdatePostamatDisplayPayloadFieldPolicy,
	},
	UpdatePostamatFilePrinterPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostamatFilePrinterPayloadKeySpecifier | (() => undefined | UpdatePostamatFilePrinterPayloadKeySpecifier),
		fields?: UpdatePostamatFilePrinterPayloadFieldPolicy,
	},
	UpdatePostamatNetworkPrinterPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostamatNetworkPrinterPayloadKeySpecifier | (() => undefined | UpdatePostamatNetworkPrinterPayloadKeySpecifier),
		fields?: UpdatePostamatNetworkPrinterPayloadFieldPolicy,
	},
	UpdatePostamatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostamatPayloadKeySpecifier | (() => undefined | UpdatePostamatPayloadKeySpecifier),
		fields?: UpdatePostamatPayloadFieldPolicy,
	},
	UpdatePostamatScannerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostamatScannerPayloadKeySpecifier | (() => undefined | UpdatePostamatScannerPayloadKeySpecifier),
		fields?: UpdatePostamatScannerPayloadFieldPolicy,
	},
	UpdatePostamatSerialPrinterPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostamatSerialPrinterPayloadKeySpecifier | (() => undefined | UpdatePostamatSerialPrinterPayloadKeySpecifier),
		fields?: UpdatePostamatSerialPrinterPayloadFieldPolicy,
	},
	UpdatePostamatSettingsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostamatSettingsPayloadKeySpecifier | (() => undefined | UpdatePostamatSettingsPayloadKeySpecifier),
		fields?: UpdatePostamatSettingsPayloadFieldPolicy,
	},
	UpdatePromixControllerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePromixControllerPayloadKeySpecifier | (() => undefined | UpdatePromixControllerPayloadKeySpecifier),
		fields?: UpdatePromixControllerPayloadFieldPolicy,
	},
	UpdateReturnRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateReturnRequestPayloadKeySpecifier | (() => undefined | UpdateReturnRequestPayloadKeySpecifier),
		fields?: UpdateReturnRequestPayloadFieldPolicy,
	},
	UpdateShipmentRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateShipmentRequestPayloadKeySpecifier | (() => undefined | UpdateShipmentRequestPayloadKeySpecifier),
		fields?: UpdateShipmentRequestPayloadFieldPolicy,
	},
	UpdateSizePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSizePayloadKeySpecifier | (() => undefined | UpdateSizePayloadKeySpecifier),
		fields?: UpdateSizePayloadFieldPolicy,
	},
	UpdateSmsCenterAccountPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSmsCenterAccountPayloadKeySpecifier | (() => undefined | UpdateSmsCenterAccountPayloadKeySpecifier),
		fields?: UpdateSmsCenterAccountPayloadFieldPolicy,
	},
	UpdateSmsTemplatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSmsTemplatePayloadKeySpecifier | (() => undefined | UpdateSmsTemplatePayloadKeySpecifier),
		fields?: UpdateSmsTemplatePayloadFieldPolicy,
	},
	UpdateTemplateCellPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTemplateCellPayloadKeySpecifier | (() => undefined | UpdateTemplateCellPayloadKeySpecifier),
		fields?: UpdateTemplateCellPayloadFieldPolicy,
	},
	UpdateTemplatePostamatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTemplatePostamatPayloadKeySpecifier | (() => undefined | UpdateTemplatePostamatPayloadKeySpecifier),
		fields?: UpdateTemplatePostamatPayloadFieldPolicy,
	},
	UpdateTemplateSectionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTemplateSectionPayloadKeySpecifier | (() => undefined | UpdateTemplateSectionPayloadKeySpecifier),
		fields?: UpdateTemplateSectionPayloadFieldPolicy,
	},
	UpdateTenantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTenantPayloadKeySpecifier | (() => undefined | UpdateTenantPayloadKeySpecifier),
		fields?: UpdateTenantPayloadFieldPolicy,
	},
	UpdateTopologyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTopologyPayloadKeySpecifier | (() => undefined | UpdateTopologyPayloadKeySpecifier),
		fields?: UpdateTopologyPayloadFieldPolicy,
	},
	ValidationError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidationErrorKeySpecifier | (() => undefined | ValidationErrorKeySpecifier),
		fields?: ValidationErrorFieldPolicy,
	},
	WindowsTimeZone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WindowsTimeZoneKeySpecifier | (() => undefined | WindowsTimeZoneKeySpecifier),
		fields?: WindowsTimeZoneFieldPolicy,
	},
	_SchemaDefinition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _SchemaDefinitionKeySpecifier | (() => undefined | _SchemaDefinitionKeySpecifier),
		fields?: _SchemaDefinitionFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;