import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employees: any[] = [
    { code: 'emp101', name: 'Arun Jain', gender: 'male', annualSalary: 1000, dateOfBirth: '16/06/1996' },
    { code: 'emp102', name: 'Rahul Ranjan', gender: 'male', annualSalary: 1100, dateOfBirth: '17/07/1996' },
    { code: 'emp103', name: 'Rishabh Verma', gender: 'male', annualSalary: 1200, dateOfBirth: '18/08/1996' },
    { code: 'emp104', name: 'Jenny White', gender: 'female', annualSalary: 1300, dateOfBirth: '14/02/1997' },
    { code: 'emp105', name: 'Shane Doe', gender: 'female', annualSalary: 1400, dateOfBirth: '12/02/1995' }
  ];

  constructor() { }

  ngOnInit() {
  }



}
