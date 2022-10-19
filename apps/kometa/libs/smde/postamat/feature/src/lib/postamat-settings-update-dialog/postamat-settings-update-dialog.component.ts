import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UntilDestroy } from '@ngneat/until-destroy';
import { PostamatSettingsFragment } from '@kometa/shared/postamat/types';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-settings-update-dialog',
  templateUrl: './postamat-settings-update-dialog.component.html',
  styleUrls: ['./postamat-settings-update-dialog.component.scss'],
})
export class PostamatSettingsUpdateDialogComponent {
  readonly postamatId: string;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { postamatId } = this.config.data;
    this.postamatId = postamatId;
  }

  async onSaved(result: PostamatSettingsFragment): Promise<void> {
    this.ref.close(result);
  }

  onCancel(): void {
    this.ref.close();
  }
}
