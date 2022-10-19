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

export type GetApplicationConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApplicationConfigurationQuery = { __typename?: 'Query', applicationConfiguration: { __typename?: 'ApplicationConfiguration', auth: { __typename?: 'ApplicationAuthConfiguration', grantedPolicies: Array<{ __typename?: 'GrantedPolicy', key: string, value: boolean }>, policies: Array<{ __typename?: 'Policy', key: string, value: boolean }> }, currentTenant: { __typename?: 'CurrentTenant', id?: string | null | undefined, name?: string | null | undefined, isAvailable: boolean }, currentContractor: { __typename?: 'CurrentContractor', id?: string | null | undefined, name?: string | null | undefined }, currentUser: { __typename?: 'CurrentUser', id?: string | null | undefined, userName?: string | null | undefined, surName?: string | null | undefined, name?: string | null | undefined, email?: string | null | undefined, emailVerified: boolean, phoneNumber?: string | null | undefined, phoneNumberVerified: boolean, roles: Array<string> }, selectableContractors: Array<{ __typename?: 'SelectableContractor', id: string, name: string }>, localization: { __typename?: 'ApplicationLocalizationConfiguration', defaultResourceName: string, languages: Array<{ __typename?: 'LanguageInfo', cultureName: string, displayName: string, flagIcon?: string | null | undefined, uiCultureName: string }>, texts?: Array<{ __typename?: 'KeyValuePairOfStringAndDictionaryOfStringAndString', key: string, value: Array<{ __typename?: 'KeyValuePairOfStringAndString', key: string, value: string }> }> | null | undefined }, features: { __typename?: 'ApplicationFeatureConfiguration', values: Array<{ __typename?: 'ApplicationFeature', key: string, value: string }> }, setting: { __typename?: 'ApplicationSettingConfiguration', values: Array<{ __typename?: 'ApplicationSetting', key: string, value: string }> } } };


export const GetApplicationConfigurationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetApplicationConfiguration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applicationConfiguration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grantedPolicies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"policies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentTenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isAvailable"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentContractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"surName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumberVerified"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}},{"kind":"Field","name":{"kind":"Name","value":"selectableContractors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"localization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cultureName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"flagIcon"}},{"kind":"Field","name":{"kind":"Name","value":"uiCultureName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"defaultResourceName"}},{"kind":"Field","name":{"kind":"Name","value":"texts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"features"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"setting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetApplicationConfigurationQuery, GetApplicationConfigurationQueryVariables>;