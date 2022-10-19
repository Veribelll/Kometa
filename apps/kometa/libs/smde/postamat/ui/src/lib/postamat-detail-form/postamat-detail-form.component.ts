import { Component, Input } from '@angular/core';
import { PostamatFragment } from '@kometa/smde/postamat/types';

@Component({
  selector: 'kometa-postamat-detail-form',
  templateUrl: './postamat-detail-form.component.html',
  styleUrls: ['./postamat-detail-form.component.scss'],
})
export class PostamatDetailFormComponent {
  @Input()
  postamat?: PostamatFragment;
}
