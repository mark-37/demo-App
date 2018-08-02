import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employees: any[] = [
    { code: 'emp100', name: 'Arun Jain', gender: 'Male', annualSalary: 1000, dateOfBirth: '16/06/1996' },
    { code: 'emp101', name: 'Shaila Kapoor', gender: 'Female', annualSalary: 1010, dateOfBirth: '15/05/1993' },
    { code: 'emp102', name: 'Rahul Ranjan', gender: 'Male', annualSalary: 1100, dateOfBirth: '17/07/1996' },
    { code: 'emp103', name: 'Rishabh Verma', gender: 'Male', annualSalary: 1200, dateOfBirth: '18/08/1996' },
    { code: 'emp104', name: 'Jenny White', gender: 'Female', annualSalary: 1300, dateOfBirth: '14/02/1997' },
    { code: 'emp105', name: 'Shane Doe', gender: 'Female', annualSalary: 1400, dateOfBirth: '12/02/1995' }
  ];

  constructor() { }

  ngOnInit() {
  }
  
  getTotalEmployeesCount(): number {
    return this.Employees.length;
  }

  getTotalFemaleEmployeesCount(): number {
    return this.Employees.filter(e => e.gender === 'Female').length;
  }

  getTotalMaleEmployeesCount(): number {
    return this.Employees.filter(e => e.gender === 'Male').length;
  }


}
