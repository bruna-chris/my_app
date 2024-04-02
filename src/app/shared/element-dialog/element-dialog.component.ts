import { Component, Inject } from '@angular/core';
import { PeriodicElement } from '../../views/home/home.component';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrl: './element-dialog.component.scss'
})

export class ElementDialogComponent {
  element!: PeriodicElement;

  constructor(
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

}



