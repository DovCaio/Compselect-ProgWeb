import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'file-input',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css'
})
export class FileInputComponent {

  url: string = '';
  hideFileDiv: string = "file";
  hideImageDiv: string = "hidden";

  
  
  @Output()
  fileInputValueEmitter = new EventEmitter<File | null>();



  dragTheFile(event: DragEvent ): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file && file.type.includes('image') && file.size > 0 && file.size <= 10000000) {
      this.url = URL.createObjectURL(file);
      this.hideFileDiv = "hidden";
      this.hideImageDiv = "div-image";

      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      this.fileInputValueEmitter.emit(dataTransfer.files[0]);
      
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
      this.fileInputValueEmitter.emit(file);
    }else {
      console.log('Arquivo inválido');
    }
  }

  removeImage():void {
    this.url = '';
    this.hideFileDiv = "file";
    this.hideImageDiv = "hidden";
    this.fileInputValueEmitter.emit(null);
  }

}
