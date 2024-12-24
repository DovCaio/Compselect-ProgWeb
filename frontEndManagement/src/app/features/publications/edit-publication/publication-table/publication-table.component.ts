import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
interface Publication {
  id: number;
  name: string;
}

const EVENT_DATA: Publication[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'},
  {id: 6, name: 'Carbon'},
  {id: 7, name: 'Nitrogen'},
  {id: 8, name: 'Oxygen'},
  {id: 9, name: 'Fluorine'},
  {id: 10,name: 'Neon'},
];


@Component({
  selector: 'publication-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './publication-table.component.html',
  styleUrl: './publication-table.component.css'
})
export class PublicationTableComponent {


  dataSource = EVENT_DATA
  displayedColumns: string[] = ['id', 'nome', 'edit', "delete"];

  authorEdit(id: number) {
    //TODO
  }


  authorDeleted(id:number) {
    //TODO
  }
}
