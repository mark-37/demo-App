import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeListComponent implements OnInit {

  selectedEmployeeCountRadioButtonValue: string = 'All';

  Employees: IEmployee[];

  constructor( private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.Employees = this._employeeService.getEmployees();
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButtonValue = selectedRadioButtonValue;
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
