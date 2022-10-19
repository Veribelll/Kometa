export interface ApiConfig {
  [key: string]: string;
  url: string;
  rootNamespace: string;
}

export interface Apis {
  [key: string]: Partial<ApiConfig>;
  default: ApiConfig;
}

export interface ApplicationInfo {
  name: string;
  baseUrl?: string;
  logoUrl?: string;
}

export type Environment = {
  apis: Apis;
  application: ApplicationInfo;
  localization?: { defaultResourceName?: string };
  auth: {
    issuer: string;
    client_id: string;
    client_secret: string;
    scope: string;
  };
  production: boolean;
} & Record<string, unknown>;
