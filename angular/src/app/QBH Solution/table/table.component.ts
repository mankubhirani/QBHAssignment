import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: any[] = [];
  loginForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.fetchUsers();
    this.createForm();
  }

  fetchUsers() {
    this.http.get<any[]>('http://localhost:3000/users').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  generatePDF() {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [['Name', 'Email', 'Phone Number', 'Address']],
      body: this.users.map(user => [user.name, user.email, user.phone, user.address])
    });
    doc.save('table.pdf');
  }

  createForm() {
    this.loginForm = this.fb.group({
      surch: ['']
    });
  }

  submitLoginForm() {
    const searchTerm = this.loginForm.get('surch')?.value.toLowerCase();
    if (searchTerm) {
      this.users = this.users.filter(user => user.name.toLowerCase().includes(searchTerm));
    } else {
      // Reset the filter if search term is empty
      this.fetchUsers();
    }
  }

  deleteUser(userId: number) {
    this.http.delete(`http://localhost:3000/users/${userId}`).subscribe(
      () => {
        console.log(`User with ID ${userId} deleted successfully.`);
        this.fetchUsers();
      },
      (error) => {
        console.error(`Error deleting user with ID ${userId}:`, error);
      }
    );
  }

  navigateToForm(id: number) {
    this.router.navigate(['/form', id]); // Navigate to FormComponent with userId as a parameter
  }
}
