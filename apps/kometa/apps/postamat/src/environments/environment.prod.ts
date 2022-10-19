import { Environment } from '@kometa/shared/abp';

export const environment: Environment = {
  production: true,
  apis: {
    default: {
      url: 'https://ws.smde.pro',
      rootNamespace: 'Smde',
    },
  },
  application: {
    name: 'Smde',
    logoUrl: '',
  },
  auth: {
    issuer: 'https://ws.smde.pro',
    client_id: 'Postamat',
    client_secret: '095a2019-b609-4d97-a47f-a41aeb9af305',
    scope: 'address email offline_access openid phone profile role Smde',
  },
};
