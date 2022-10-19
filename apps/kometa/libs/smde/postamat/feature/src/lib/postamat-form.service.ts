import { Injectable } from '@angular/core';
import { AsyncValidatorFn, Validators } from '@angular/forms';
import { TypedFormBuilder } from '@kometa/shared/typed-form';
import { CreatePostamatFormModel, UpdatePostamatFormModel } from '@kometa/smde/postamat/ui';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { asyncFormValidIsUnique } from '@kometa/shared/utils';
import {
  PostamatIsExternalIdUniqueGQL,
  PostamatIsFactoryNumberUniqueGQL,
  PostamatIsNameUniqueGQL,
} from '@kometa/smde/postamat/data-access';
import { PostamatFragment } from '@kometa/smde/postamat/types';

@Injectable({
  providedIn: 'any',
})
export class PostamatFormService {
  constructor(
    private readonly fb: TypedFormBuilder,
    private readonly isNameUniqueGQL: PostamatIsNameUniqueGQL,
    private readonly isFactoryNumberUniqueGQL: PostamatIsFactoryNumberUniqueGQL,
    private readonly isExternalIdUniqueGQL: PostamatIsExternalIdUniqueGQL
  ) {}

  buildFormCreate() {
    return this.fb.group<CreatePostamatFormModel>({
      defaultCourierId: this.fb.control(null, [Validators.required]),
      name: this.fb.control('', [Validators.required], [this.isNameUnique()]),
      factoryNumber: this.fb.control('', [Validators.required], [this.isFactoryNumberUnique()]),
      externalId: this.fb.control('', [Validators.required], [this.isExternalIdUnique()]),
      address: this.fb.control('', [Validators.required]),
    });
  }

  buildFormUpdate({ defaultCourierId, name, factoryNumber, externalId, address }: PostamatFragment) {
    return this.fb.group<UpdatePostamatFormModel>({
      defaultCourierId: this.fb.control(defaultCourierId, [Validators.required]),
      name: this.fb.control(name, [Validators.required], [this.isNameUnique(name)]),
      factoryNumber: this.fb.control(
        factoryNumber,
        [Validators.required],
        [this.isFactoryNumberUnique(factoryNumber)]
      ),
      externalId: this.fb.control(
        externalId,
        [Validators.required],
        [this.isExternalIdUnique(externalId)]
      ),
      address: this.fb.control(address, [Validators.required]),
    });
  }

  private isNameUnique(name?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === name) {
        return of(null);
      }

      const sub = this.isNameUniqueGQL
        .fetch({ name: control.value })
        .pipe(map(({ data }) => data.postamatsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }

  private isFactoryNumberUnique(factoryNumber?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === factoryNumber) {
        return of(null);
      }

      const sub = this.isFactoryNumberUniqueGQL
        .fetch({ factoryNumber: control.value })
        .pipe(map(({ data }) => data.postamatsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }

  private isExternalIdUnique(externalId?: string): AsyncValidatorFn {
    return (control) => {
      if (control.value === externalId) {
        return of(null);
      }

      const sub = this.isExternalIdUniqueGQL
        .fetch({ externalId: control.value })
        .pipe(map(({ data }) => data.postamatsAny));
      return asyncFormValidIsUnique(control, sub);
    };
  }
}
