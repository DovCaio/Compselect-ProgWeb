import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  //totalEvents, totalPublicationsBlog, totalAuthors, totalPublications;
  statics : number[] = [0, 0, 0, 0, 0];
  //statics e text devem ter o mesmo tamanho.
  texts : string[] = ["Qtd de eventos", "Qtd de publicações", "Qtd de autores",
     "Qtd de publicações", "Qtd de comentários"];

   endpoints : string[] = ["events/qtt", "blogs/qtt", "authors/qtt", "publications/qtt", "comments/qtt"];


  constructor (private homeService: HomeService){}

  ngOnInit(){

    this.homeService.getStatistics(this.endpoints[0]).subscribe(data => {
      console.log(data)
    })

    /*
    let staticsAux = [0, 0, 0, 0, 0];
    this.endpoints.forEach((endpoint, i) => {
      this.homeService.getStatistics(endpoint).subscribe(data => {
        console.log(data);
      })
    })
    */
  }

}
