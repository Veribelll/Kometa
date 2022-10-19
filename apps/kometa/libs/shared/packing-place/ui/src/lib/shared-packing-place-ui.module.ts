import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { SharedPrimengUiDetailModule } from '@kometa/shared/primeng/ui-detail';
import { TimelineModule } from 'primeng/timeline';
import { PackingPlaceDetailFormComponent } from './packing-place-detail-form/packing-place-detail-form.component';
import { PackingPlaceTimelineFormComponent } from './packing-place-timeline-form/packing-place-timeline-form.component';
import { PackingPlaceTimelineSkeletonComponent } from './packing-place-timeline-skeleton/packing-place-timeline-skeleton.component';
import { TranslocoModule } from '@ngneat/transloco';
import { PanelModule } from 'primeng/panel';
import { PackingPlaceDetailSkeletonComponent } from './packing-place-detail-skeleton/packing-place-detail-skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    SharedPrimengUiDetailModule,
    TimelineModule,
    SkeletonModule,
    TranslocoModule,
    PanelModule,
  ],
  declarations: [
    PackingPlaceDetailFormComponent,
    PackingPlaceTimelineFormComponent,
    PackingPlaceTimelineSkeletonComponent,
    PackingPlaceDetailSkeletonComponent,
  ],
  exports: [
    PackingPlaceDetailFormComponent,
    PackingPlaceTimelineFormComponent,
    PackingPlaceTimelineSkeletonComponent,
    PackingPlaceDetailSkeletonComponent,
  ],
})
export class SharedPackingPlaceUiModule {}
