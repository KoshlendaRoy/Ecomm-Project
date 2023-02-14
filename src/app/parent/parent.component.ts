import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  productselect:boolean =false
  Addproduct:any
  productName!:string

  onSelect(products:any){
    this.productselect = true
    this.productName = products
  }

  onAdd(){
    
  }

}
