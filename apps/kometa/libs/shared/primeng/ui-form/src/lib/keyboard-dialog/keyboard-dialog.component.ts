import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'p-keyboard-dialog',
  templateUrl: './keyboard-dialog.component.html',
  styleUrls: ['./keyboard-dialog.component.scss'],
})
export class KeyboardDialogComponent {
  constructor(private readonly ref: DynamicDialogRef) {}

  onEnter(text: string) {
    this.ref.close(text);
  }
}
