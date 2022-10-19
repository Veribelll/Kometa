import { ControllerDriver } from './controller.driver';
import { InjectionToken, Type } from '@angular/core';
import { GetControllersForDriverQuery } from '@kometa/shared/driver/types';

type Controller = GetControllersForDriverQuery['controllers'][0];

export type ControllerDrivers = Record<
  NonNullable<Controller['__typename']>,
  () => ControllerDriver
>;

export const ControllerDriversToken = new InjectionToken<ControllerDrivers>(
  'ControllerDriversToken'
);
