import { Inject, Injectable } from '@angular/core';
import { GetControllersForDriverQuery } from '@kometa/shared/driver/types';
import { ControllerDriver } from './controller.driver';
import { ControllerDrivers, ControllerDriversToken } from './controller-drivers.token';

type Controller = GetControllersForDriverQuery['controllers'][0];

@Injectable({
  providedIn: 'root',
})
export class ControllerDriverFactory {
  private readonly drivers = new Map<string, ControllerDriver>();

  constructor(
    @Inject(ControllerDriversToken)
    private readonly driversFactory: ControllerDrivers
  ) {}

  async getDriver(controller: Controller): Promise<ControllerDriver> {
    if (this.drivers.has(controller.id)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.drivers.get(controller.id)!;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const func = this.driversFactory[controller.__typename!];
    const driver = func();
    await driver.init(controller);

    this.drivers.set(controller.id, driver);
    return driver;
  }
}
