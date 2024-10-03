import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss'
})
export class ProductAddComponent {

  upload:any = faUpload
  plus : any = faPlus
  path:any


selectFle(event: any) {

  if(event.target.files){
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      this.path = e.target.result;
    }
  }
}




}
