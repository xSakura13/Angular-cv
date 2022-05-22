import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent {
 count: number = 0;
   counterPlus():number{
     return this.count++
  }
  counterMinus():number{
     return this.count--
  }
}
