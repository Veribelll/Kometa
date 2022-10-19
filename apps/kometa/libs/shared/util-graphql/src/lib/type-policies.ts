import { TypedTypePolicies } from './apollo-helpers';

const merge = (existing: any, incoming: any) => {
  return incoming;
};

export const typePolicies: TypedTypePolicies = {
  Query: {
    queryType: true,
    fields: {
      tenants: { merge },
      contractors: { merge },
      companies: { merge },
      individualEntrepreneurs: { merge },
      employees: { merge },
      identityRoles: { merge },
      emexAccounts: { merge },
      smsAccounts: { merge },
      emexOrders: { merge },
      emexProductsByOrderId: { merge },
      packingPlaceById: { merge },
      packingPlaces: { merge },
      packingPlaceByLastMileId: { merge },
      postamatById: { merge },
      lastMiles: { merge },
      postamats: { merge },
      controllers: { merge },
      cells: { merge },
      cellDisplays: { merge },
      basePrinters: { merge },
      templatesCell: { merge },
      templatesSection: { merge },
      templatesPostamat: { merge },
      accessKeys: { merge },
    },
  },
  EmexOrder: {
    fields: {
      products: { merge },
    },
  },
  PackingPlace: {
    fields: {
      reservationData: { merge },
      statusChangesHistory: { merge },
    },
  },
  ShipmentRequest: {
    fields: {
      packingPlaces: { merge },
    },
  },
  IdentityUser: {
    fields: {
      contractors: { merge },
      roles: { merge },
    },
  },
  LastMile: {
    fields: {
      smsTemplates: { merge },
      storagePeriods: { merge },
    },
  },
  Postamat: {
    fields: {
      smsTemplates: { merge },
      storagePeriods: { merge },
      cells: { merge },
      controllers: { merge },
      displays: { merge },
    },
  },
};
