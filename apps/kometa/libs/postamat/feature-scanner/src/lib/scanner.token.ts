import { Scanner } from './scanner.interface';
import { InjectionToken } from '@angular/core';

export const ScannerToken = new InjectionToken<Scanner>('Scanner');
