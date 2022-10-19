import { Component, ViewChild } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';
import { TabMenu } from 'primeng/tabmenu';

@Component({
  selector: 'kometa-postamat-printers-update-dialog',
  templateUrl: './postamat-printers-update-dialog.component.html',
  styleUrls: ['./postamat-printers-update-dialog.component.scss'],
})
export class PostamatPrintersUpdateDialogComponent {
  readonly postamatId: string;
  readonly menuItems: MenuItem[] = [
    {
      id: 'File',
      label: 'Файловый',
    },
    {
      id: 'Network',
      label: 'Интернет',
    },
    {
      id: 'SerialPort',
      label: 'Serial port',
    },
  ];

  activeItem = this.menuItems[0];

  @ViewChild('tabMenu') menu!: TabMenu;

  get showFile() {
    return this.activeItem.id === 'File';
  }

  get showNetwork() {
    return this.activeItem.id === 'Network';
  }

  get showSerialPort() {
    return this.activeItem.id === 'SerialPort';
  }

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { postamatId } = this.config.data;

    this.postamatId = postamatId;
  }

  activateMenu() {
    this.activeItem = this.menu.activeItem;
  }

  onCancel(): void {
    this.ref.close();
  }
}
