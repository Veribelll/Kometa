import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ActivatePostamatDialogComponent } from '@kometa/postamat/activate/feature';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { CurrentContractorService } from '@kometa/shared/abp';
import { isEmpty } from 'lodash';
import { CurrentPostamatService } from '@kometa/postamat/core';

@UntilDestroy()
@Component({
  selector: 'kometa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private readonly dialogService: DialogService,
    private readonly currentContractorService: CurrentContractorService,
    private readonly currentPostamatService: CurrentPostamatService
  ) {}

  ngOnInit() {
    if (isEmpty(this.currentPostamatService.currentId)) {
      const dialog = this.dialogService.open(ActivatePostamatDialogComponent, {
        header: 'Активация',
        width: '700px',
        closable: false,
      });

      dialog.onClose
        .pipe(
          tap(async ({ contractorId, postamatId, postamatIdRelay }) => {
            localStorage.setItem('postamatId', postamatId);
            this.currentPostamatService.change(postamatIdRelay);
            await this.currentContractorService.setId(contractorId);
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }
}
