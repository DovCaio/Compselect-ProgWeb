import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import  Event  from './Event';

const EVENT_DATA: Event[] = [
  {id: 1, title: 'Hydrogen', date: "1.0079"},
  {id: 2, title: 'Helium', date: "4.0026" },
  {id: 3, title: 'Lithium', date: "6.941" },
  {id: 4, title: 'Beryllium', date: "9.0122"},
  {id: 5, title: 'Boron', date: "10.811"},
  {id: 6, title: 'Carbon', date: "12.0107"},
  {id: 7, title: 'Nitrogen', date: "14.0067"},
  {id: 8, title: 'Oxygen', date: "15.9994"},
  {id: 9, title: 'Fluorine', date: "18.9984"},
  {id: 10,title: 'Neon', date: "20.1797"},
];

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent {
  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource = EVENT_DATA;
}
