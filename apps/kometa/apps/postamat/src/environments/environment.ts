import { Environment } from '@kometa/shared/abp';

export const environment: Environment = {
  production: false,
  apis: {
    default: {
      url: 'https://localhost:11000',
      rootNamespace: 'Smde',
    },
  },
  application: {
    name: 'Smde',
    logoUrl: '',
  },
  auth: {
    issuer: 'https://localhost:11000',
    client_id: 'Postamat',
    client_secret: '12345',
    scope: 'address email offline_access openid phone profile role Smde',
  },
};
