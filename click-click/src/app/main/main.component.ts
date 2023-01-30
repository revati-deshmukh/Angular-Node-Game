import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  name: string;
  constructor(public dialog: MatDialog, public router: Router) { }
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '50%',
      height: '55%',
      data: { name: this.name },
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`User name is: ${result}`);
      this.name = result;
      if (this.name != undefined) {
        this.router.navigate(['/random-clicks/1']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
