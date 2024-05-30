import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm:any= FormGroup;
  loginForm:any = FormGroup;
  userId: any;
  @Output() userAdded = new EventEmitter<any>();
  data: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      address: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      surch: ['']
    });

    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Get user ID from route parameters
      console.log(this.userId);
      if (this.userId) {
        this.fetchUserData(this.userId);
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.data = this.userForm.value;
      console.log(this.data);
      if (this.userId) {
        this.updateUser(this.userId, this.data);
      } else {
        this.http.post('http://localhost:3000/users', this.data).subscribe(response => {
          console.log(response);
          this.userAdded.emit(this.userForm.value);
          this.userForm.reset();
          this.router.navigate(['/table']);
        }, error => {
          console.error('Error:', error);
        });
      }
    }
  }

  fetchUserData(id: number) {
    this.http.get<any>(`http://localhost:3000/users/${id}`).subscribe(
      (userData) => {
        this.userForm.patchValue(userData); // Patch user data into the form
      },
      (error) => {
        console.error('Error fetching user data:', error);
        // Handle error scenarios, such as displaying an error message to the user
      }
    );
  }

  updateUser(id: number, userData: any) {
    this.http.put(`http://localhost:3000/users/${id}`, userData).subscribe(response => {
      console.log(response);
      this.userAdded.emit(this.userForm.value);
      this.userForm.reset();
      this.router.navigate(['/table']);
    }, error => {
      console.error('Error updating user:', error);
    });
  }
}
