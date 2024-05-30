import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  employeeData: any;
  searchText: any;
  item: any;
  Cart: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 20;
  tableSizes: any = [20, 50, 100];

  loginForm!: FormGroup;
  filterForm!: FormGroup;

  constructor(private httpClient: HttpClient, private _fb: FormBuilder,) {
    this.abc();
    this.filter();
  }
  abc() {
    this.loginForm = this._fb.group({
      surch: ['']
    });
  }
  filter() {
    this.filterForm = this._fb.group({
      available: [''],
      domain: [''],
      gender: ['']
    });

  }


  ngOnInit() {
    this.httpClient.get('assets/heliverse_mock_data.json').subscribe((data) => {
      this.employeeData = data;
      console.log(this.employeeData);
      ;// Move the log inside the subscribe to ensure it's logged after the data is retrieved
    });

  }

  onTabledataChange(event: any) {
    this.page = event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  getcontrol(surch: any): AbstractControl | null {
    return this.loginForm.get(surch);
  }



  submitLoginForm() {
    let loginData = {
      surch: this.loginForm.controls['surch'].value,
    }

    this.employeeData = this.employeeData.filter((item: any) =>
      item.hasOwnProperty('first_name') && item.first_name.toLowerCase().includes(loginData.surch.toLowerCase()));

    console.log(this.employeeData)

  }

  getdata(i: any) {
    console.log(i)

    this.Cart.push(i,);
    localStorage.removeItem('abc')
console.log(this.Cart)
    localStorage.setItem("abc", this.Cart);
    console.log(this.Cart)

  }


  filterCode() {
    // Extract values from form controls
    const filterObj = {
      domain: this.filterForm.controls['domain'].value,
      available: this.filterForm.controls['available'].value,
      gender: this.filterForm.controls['gender'].value,
    };

    // Log filterObj values to check
    console.log(filterObj);


    let data = this.employeeData.filter((item: any) =>
      // item.hasOwnProperty('available') &&
      // item.first_name.toLowerCase().includes(filterObj.available.toLowerCase()) &&
      item.hasOwnProperty('gender') && item.gender.toLowerCase() === filterObj.gender 
      // item.hasOwnProperty('domain') && item.domain.toLowerCase() === filterObj.domain.toLowerCase()
    );

    console.log(this.employeeData)
  }



}
