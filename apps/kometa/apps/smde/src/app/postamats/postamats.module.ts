import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmdePostamatFeatureModule } from '@kometa/smde/postamat/feature';
import { PostamatsRoutingModule } from './postamats-routing.module';
import { PostamatsComponent } from './postamats.component';

@NgModule({
  imports: [CommonModule, PostamatsRoutingModule, SmdePostamatFeatureModule],
  declarations: [PostamatsComponent],
})
export class PostamatsModule {}
