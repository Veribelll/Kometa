import { Environment } from '@kometa/shared/abp';

const baseUrl = 'https://smde.pro';

export const environment: Environment = {
  production: true,
  apis: {
    default: {
      url: 'https://ws.smde.pro',
      rootNamespace: 'Smde',
    },
  },
  application: {
    baseUrl,
    name: 'Smde',
    logoUrl: '',
  },
  auth: {
    issuer: 'https://ws.smde.pro',
    client_id: 'Smde_Angular',
    client_secret: '92e0603e-1af4-437c-8254-be179988e164',
    scope: 'address email offline_access openid phone profile role Smde',
  },
};
