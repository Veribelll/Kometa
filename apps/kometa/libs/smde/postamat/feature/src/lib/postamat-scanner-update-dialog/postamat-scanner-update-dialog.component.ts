import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PostamatScannerFragment } from '@kometa/shared/postamat/types';

@Component({
  selector: 'kometa-postamat-scanner-update-dialog',
  templateUrl: './postamat-scanner-update-dialog.component.html',
  styleUrls: ['./postamat-scanner-update-dialog.component.scss'],
})
export class PostamatScannerUpdateDialogComponent {
  readonly postamatId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { postamatId } = this.config.data;
    this.postamatId = postamatId;
  }

  async onSaved(result: PostamatScannerFragment): Promise<void> {
    this.ref.close(result);
  }

  onCancel(): void {
    this.ref.close();
  }
}
