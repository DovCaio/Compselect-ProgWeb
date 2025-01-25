import { Component ,Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-sucess-request',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,

  ],
  templateUrl: './sucess-request.component.html',
  styleUrl: './sucess-request.component.css'
})
export class SucessRequestComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: {sucessMessage: string}) {}



}
