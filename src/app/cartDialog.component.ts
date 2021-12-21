import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cart-dialog',
  template: `
  <div mat-dialog-content>
    <p>What's your favorite animal?</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onClose()">Close</button>
  </div>
  `,
})
export class CartDialogComponent {
  constructor(public dialogRef: MatDialogRef<CartDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
