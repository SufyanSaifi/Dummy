import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public EmpService:EmployeeService) { }

  ngOnInit(): void {

    this.EmpService.getEmployee().subscribe(data=>{
      this.EmpService.ListEmployee = data; 
    });
  }

}
