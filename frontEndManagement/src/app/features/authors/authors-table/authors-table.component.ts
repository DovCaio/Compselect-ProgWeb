import { Component } from '@angular/core';
import { AuthorService } from '../../../shared/author/author.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

interface Author {
  id: number;
  name: string;
}


const EVENT_DATA: Author[] = [
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
  selector: 'authors-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './authors-table.component.html',
  styleUrl: './authors-table.component.css'
})
export class AuthorsTableComponent {


  dataSource = EVENT_DATA
  displayedColumns: string[] = ['id', 'nome', 'edit', "delete"];


  authorDeleted(id: number) {
    //TODO
  }

  authorEdit(id: number){
    window.scrollTo(0, 0);
    //TODO deve fazer uma requisão, apartir de algum serivice, e trazer os dados do autor para o formulário

  }
}
