import { Environment } from '@kometa/shared/abp';

const baseUrl = 'http://localhost:4200';

export const environment: Environment = {
  production: false,
  apis: {
    default: {
      url: 'https://localhost:11000',
      rootNamespace: 'Smde',
    },
  },
  application: {
    baseUrl,
    name: 'Smde',
    logoUrl: '',
  },
  auth: {
    issuer: 'https://localhost:11000',
    client_id: 'Smde_Angular',
    client_secret: '12345',
    scope: 'address email offline_access openid phone profile role Smde',
  },
};
