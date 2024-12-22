import { Component } from '@angular/core';
import Event  from '../Event';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { EditService } from '../../../../shared/event/edit.service';

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
  selector: 'events-table',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.css'
})
export class EventsTableComponent {
  displayedColumns: string[] = ['id', 'title', 'date', 'edit', "delete"];
  dataSource = EVENT_DATA;

  constructor(private editService: EditService) {}

  eventEdited(id: number, title: string, date: string) {
    //TODO
    //Deve fazer uma requisição ao back e trazer de volta o evento relativo ao id, e esses dados devem ser
    //Colocados nos inputs de edição.
    const event: Event = {id: id, title: title, date: date};
    this.dataSource.splice(id, 1, event);
    console.log(this.dataSource);
    this.editService.edit(event);
  }

  eventDeleted(id: number) {
    //TODO
    //Deve deletar o evento relativo ao id
    this.dataSource.splice(id, 1);
    this.editService.delete(id);
  }
}
