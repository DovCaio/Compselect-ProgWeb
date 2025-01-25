import { Component ,Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-error-request',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './error-request.component.html',
  styleUrl: './error-request.component.css'
})
export class ErrorRequestComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {errorMessage: string}) {}
}
