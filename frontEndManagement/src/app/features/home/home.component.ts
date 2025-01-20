import { Component, ChangeDetectionStrategy} from '@angular/core';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
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

  //totalEvents, totalPublicationsBlog, totalAuthors, totalPublications, totalComments;
  statics$ : Observable<number>[] = [ new Observable<number>(), new Observable<number>(), new Observable<number>(), new Observable<number>(), new Observable<number>()]
  //statics e text devem ter o mesmo tamanho.
  texts : string[] = ["Qtd de eventos", "Qtd de publicações", "Qtd de autores",
     "Qtd de publicações", "Qtd de comentários"];

  endpoints : string[] = ["events/qtt", "blogs/qtt", "authors/qtt", "publications/qtt", "comments/qtt"];

  commentsAverage$: Observable<number> = new Observable<number>();

  constructor (private homeService: HomeService){}




  ngOnInit(){

    this.endpoints.forEach((endpoint, i) => {
      this.statics$[i] = this.homeService.getStatistics(endpoint);
    });

    this.commentsAverage$ = this.homeService.getCommentsAverage();
      

    
  }

}

