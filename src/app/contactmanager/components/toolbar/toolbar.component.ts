import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() toggleSideNav = new EventEmitter();
  @Output() toggleTheme = new EventEmitter();
  @Output() toggleDir = new EventEmitter();
  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('closed', result);

      if (result) {
        this.openSnackBar('Contact Added', 'Navigate')
          .onAction()
          .subscribe(() => {
            // then navigate to the new user

            this.router.navigate(['/contactmanager', result.id]);
          });
      }
    });
  }
  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, { duration: 5000 });
  }
}
