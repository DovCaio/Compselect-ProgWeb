import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import Post  from '../../Post';


const EVENT_DATA: Post[] = [
  {id: 1, element: 'Hydrogen', content: "1.0079"},
  {id: 2, element: 'Helium', content: "4.0026" },
  {id: 3, element: 'Lithium', content: "6.941" },
  {id: 4, element: 'Beryllium', content: "9.0122"},
  {id: 5, element: 'Boron', content: "10.811"},
  {id: 6, element: 'Carbon', content: "12.0107"},
  {id: 7, element: 'Nitrogen', content: "14.0067"},
  {id: 8, element: 'Oxygen', content: "15.9994"},
  {id: 9, element: 'Fluorine', content: "18.9984"},
  {id: 10,element: 'Neon', content: "20.1797"},
];

@Component({
  selector: 'post-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.css'
})
export class PostTableComponent {
  displayedColumns: string[] = ['id', 'element',  'edit', "delete"];
  dataSource = EVENT_DATA;

  postEdited(id:number): void {
    //TODO
  }

  postDeleted(id:number): void {
    //TODO
  }
}
