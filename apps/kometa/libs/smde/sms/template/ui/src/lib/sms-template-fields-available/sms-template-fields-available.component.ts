import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificationEventType } from '@kometa/smde/sms/template/types';

type Filed = {
  exclude: NotificationEventType[];
  label: string;
  template: string;
};

@Component({
  selector: 'kometa-sms-template-fields-available',
  templateUrl: './sms-template-fields-available.component.html',
  styleUrls: ['./sms-template-fields-available.component.css'],
})
export class SmsTemplateFieldsAvailableComponent {
  readonly fields: Filed[] = [
    {
      exclude: [],
      label: 'Адрес последней миле',
      template: '%LastMile.Address%',
    },
    {
      exclude: [],
      label: 'ШК Упаковочного места',
      template: '%PackingPlace.Barcode%',
    },
    {
      exclude: [],
      label: 'Ids заказов',
      template: '%Order.Ids%',
    },
    {
      exclude: [],
      label: 'ФИО клиента',
      template: '%Customer.Name%',
    },
    {
      exclude: [],
      label: 'ID клиента',
      template: '%Customer.Id%',
    },
    {
      exclude: [
        NotificationEventType.PackingPlaceSending,
        NotificationEventType.PackingPlaceIssuing,
        NotificationEventType.PackingPlaceReturning,
        NotificationEventType.PackingPlaceCanceled,
      ],
      label: 'Пин-код',
      template: '%PinCode%',
    },
  ];

  @Input()
  eventType?: NotificationEventType | null;

  @Output()
  readonly selectField = new EventEmitter<string>();

  isShow({ exclude }: Filed) {
    return !exclude.some((x) => x === this.eventType);
  }

  onSelect(template: string) {
    this.selectField.emit(template);
  }
}
