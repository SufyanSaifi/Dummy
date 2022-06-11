import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desigination, Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myhttp:HttpClient) { }

  EmployeeUrl:string='https://localhost:44352/api/Employees';
  DesiginationUrl:string='https://localhost:44352/api/Desigination';
  ListEmployee:Employee[]=[];                 // For getting Data EmployeeList
  ListDesigination:Desigination[]=[];         // For getting Data DesiginationList


  EmployeeData:Employee = new Employee();      // For POST data // Insert Data
  
  saveEmployee()
  {
    return this.myhttp.post(this.EmployeeUrl,this.EmployeeData);
  }

  updateEmployee()
  {
    return this.myhttp.put(`${this.EmployeeUrl}/${this.EmployeeData.Id}`,this.EmployeeData);
  }


  getEmployee():Observable<Employee[]>
  {
    return this.myhttp.get<Employee[]>(this.EmployeeUrl);
  }


  getDesigination():Observable<Desigination[]>
  {
    return this.myhttp.get<Desigination[]>(this.DesiginationUrl);
  }


  deleteEmployee(id:number)
  {
    return this.myhttp.delete(`${this.EmployeeUrl}/${id}`);

  }


}
