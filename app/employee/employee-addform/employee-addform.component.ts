import {Component,Output, EventEmitter} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {EmployeeService} from '../employee.service'
@Component({
  selector:'app-addform',
  templateUrl:'./employee-addform.component.html',
  styleUrls:['./employee-addform.component.css']
})
export class EmployeeAddFormComponent{
  @Output() onAddEmployee=new EventEmitter()
  myForm=this.fb.group(
    {
      fullname:[''],
      gender:[''],
      post:[''],
      departement:['']
    }
  );
  constructor(private fb:FormBuilder,private employeeService:EmployeeService){
    
  }

  postEmployee(){
    this.employeeService.postEmployee(this.myForm.value).subscribe( value=>{
      this.onAddEmployee.emit('');
      this.myForm.reset();
   
  });
  }
}