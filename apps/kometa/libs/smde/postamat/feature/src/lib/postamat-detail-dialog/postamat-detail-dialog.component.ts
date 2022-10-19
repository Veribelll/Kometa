import { Component } from '@angular/core';
import { PostamatFragment } from '@kometa/smde/postamat/types';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'kometa-postamat-detail-dialog',
  templateUrl: './postamat-detail-dialog.component.html',
  styleUrls: ['./postamat-detail-dialog.component.scss'],
})
export class PostamatDetailDialogComponent {
  readonly postamat: PostamatFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { postamat } = this.config.data;

    this.postamat = postamat;
  }
}
