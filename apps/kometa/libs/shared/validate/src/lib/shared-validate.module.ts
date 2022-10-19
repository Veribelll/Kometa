import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { ErrorValidateComponent } from './error-validate/error-validate.component';

@NgModule({
  imports: [
    CommonModule,
    NgxValidateCoreModule.forRoot({
      blueprints: {
        email: 'Пожалуйста, введите действительный адрес электронной почты',
        max: 'Максимум. Значение должно быть {{max}}. (введено {{actual}}',
        maxlength: 'Максимум. Допускается {{requiredLength}} символов. (введено {{actualLength}})',
        min: 'Минимум. Значение должно быть {{min}}. (введено {{actual}})',
        minlength: 'Минимум. Требуется {{requiredLength}} символов. (имеет {{actualLength}})',
        pattern: 'Неверный шаблон',
        required: 'Это поле обязательно к заполнению',
        passwordMismatch: 'Пароли не соответствуют',
        invalidPassword: 'Пароль должен включать {{ description }}',
        mustMatch: 'Пароли не соответствуют',
        zipCodeEmpty: 'Введите более точный адрес',
        isUnique: 'Введите уникально значение',
      },
      errorTemplate: ErrorValidateComponent,
      targetSelector: '.form-group',
    }),
  ],
  declarations: [ErrorValidateComponent],
  entryComponents: [ErrorValidateComponent],
  exports: [NgxValidateCoreModule, ErrorValidateComponent],
})
export class SharedValidateModule {}
