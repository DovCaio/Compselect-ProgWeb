import { Component,ChangeDetectionStrategy} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-create-event',
  standalone: true,
  animations: [
  ],
  providers: [
  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatButtonModule,
    RouterLink,
    MatDividerModule
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEventComponent {

  url: string = '';
  hideFileDiv: string = "file";
  hideImageDiv: string = "hidden";
  fileInputValue: FileList | null = null;

  dragTheFile(event: DragEvent ): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file && file.type.includes('image') && file.size > 0 && file.size <= 10000000) {
      this.url = URL.createObjectURL(file);
      this.hideFileDiv = "hidden";
      this.hideImageDiv = "div-image";

      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      this.fileInputValue = dataTransfer.files;

    }else {
      console.log('Arquivo inválido');
    }
  }

  changeTheFile(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && file.type.includes('image') && file.size > 0 && file.size <= 10000000) {
      this.url = URL.createObjectURL(file);
      this.hideFileDiv = "hidden";
      this.hideImageDiv = "div-image";
    }else {
      console.log('Arquivo inválido');
    }
  }

  removeImage():void {
    this.url = '';
    this.hideFileDiv = "file";
    this.hideImageDiv = "hidden";
    this.fileInputValue = null;
  }

}
