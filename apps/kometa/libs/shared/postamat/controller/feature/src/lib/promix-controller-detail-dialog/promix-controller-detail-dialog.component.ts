import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PromixControllerFragment } from '@kometa/shared/postamat/controller/types';

@Component({
  selector: 'kometa-promix-controller-detail-dialog',
  templateUrl: './promix-controller-detail-dialog.component.html',
  styleUrls: ['./promix-controller-detail-dialog.component.scss'],
})
export class PromixControllerDetailDialogComponent {
  readonly controller: PromixControllerFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { controller } = this.config.data;
    this.controller = controller;
  }
}
