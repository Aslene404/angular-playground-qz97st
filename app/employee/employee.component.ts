import {Component,OnInit} from '@angular/core';
import {Employee} from './employee.model';

@Component({
 selector:'app-employee',
 templateUrl:'./employee.component.html',
 styleUrls:['./employee.component.css']

})

export class EmployeeComponent implements OnInit{
    employees:Employee[]=[];
    currentEmployee:Employee={fullname:'',position:''};

    search:string;
   
   constructor(){
   
   }

   ngOnInit():void{
       this.employees.push({fullname:'Aslane',position:'Developer',
     status:true});
      this.employees.push({fullname:'Sami',position:'QA',
     status:false}),
      this.employees.push({fullname:'Omrane',position:'Infographiste ',
     status:true})

   }

   public renderEmployeeCard(employee):void{
     this.currentEmployee=employee;
   }

   public onMouseEnter(employee):void{
     this.currentEmployee=employee;
     this.currentEmployee.fullname=this.currentEmployee.fullname.toUpperCase();
   }
    public onMouseLeave(employee):void{
     this.currentEmployee=employee;
     this.currentEmployee.fullname=this.currentEmployee.fullname.toLowerCase();
   }
}
