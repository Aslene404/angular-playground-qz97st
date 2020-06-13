import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeList} from './employee/employee-list/employee-list.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {EmployeeService} from './employee/employee.service'
import { HttpClientModule } from '@angular/common/http';
import { EmployeeAddFormComponent } from './employee/employee-addform/employee-addform.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeList,
    EmployeeAddFormComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers:[
    EmployeeService
  ]
})
export class AppModule {}
