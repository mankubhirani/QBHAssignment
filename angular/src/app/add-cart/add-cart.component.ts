import { Component } from '@angular/core';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent {
  employeeData: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 20;
  tableSizes: any = [20, 50, 100];

  ngOnInit() {

   this.employeeData = localStorage.getItem('abc')
   console.log(JSON.stringify(this.employeeData))
  }

}
