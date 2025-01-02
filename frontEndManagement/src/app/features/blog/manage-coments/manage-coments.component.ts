import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

interface Comment {
  id: number
  name: string
  email: string
  comment: string
  date: string
}


const EVENT_DATA: Comment[] =  [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    comment: "This is a great article, thank you for sharing!",
    date: "2025-01-02"
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    comment: "I found this very helpful, keep up the good work.",
    date: "2025-01-01"
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol.davis@example.com",
    comment: "I have a question about the second example. Could you clarify?",
    date: "2024-12-31"
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@example.com",
    comment: "Amazing post! Learned a lot.",
    date: "2024-12-30"
  },
  {
    id: 5,
    name: "Eve Wilson",
    email: "eve.wilson@example.com",
    comment: "Thanks for sharing this, it’s exactly what I was looking for!",
    date: "2024-12-29"
  }
];


@Component({
  selector: 'app-manage-coments',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './manage-coments.component.html',
  styleUrl: './manage-coments.component.css'
})
export class ManageComentsComponent {
  displayedColumns: string[] = ['id', 'name',  'email', "comment", "date", "accept", "reject"];
  dataSource = EVENT_DATA;

  accept(id: number) {
    //TODO
  }

  reject(id: number) {
    //TODO
  } 
}
