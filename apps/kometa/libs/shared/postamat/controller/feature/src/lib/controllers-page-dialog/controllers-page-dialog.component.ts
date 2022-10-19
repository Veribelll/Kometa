import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-controllers-page-dialog',
  templateUrl: './controllers-page-dialog.component.html',
  styleUrls: ['./controllers-page-dialog.component.scss'],
})
export class ControllersPageDialogComponent {
  readonly postamatId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { postamatId } = this.config.data;

    this.postamatId = postamatId;
  }
}
