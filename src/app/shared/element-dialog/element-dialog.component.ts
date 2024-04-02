import { Component, Inject } from '@angular/core';
import { PeriodicElement } from '../../models/PeriodicElement';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrl: './element-dialog.component.scss'
})

export class ElementDialogComponent {
element!: PeriodicElement;
IsChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: PeriodicElement,
    public dialogRef: MatDialogRef<ElementDialogComponent>,

  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

}



