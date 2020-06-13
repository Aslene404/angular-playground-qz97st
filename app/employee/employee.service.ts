import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

const URL='http://localhost:3000';

@Injectable()
export class EmployeeService{

  constructor(private http:HttpClient){

  }

  public getAllEmployees():Observable<any>{
    return this.http.get(`${URL}/employee`);

  }

  public postEmployee(employee):Observable<any>
{
  return this.http.post(`${URL}/employee`,employee);
}

public deleteEmployee(id):Observable<any>{
  return this.http.delete(`${URL}/employee/${id}`);
}
public updateEmployee(id,body):Observable<any>{
  return this.http.put(`${URL}/employee/${id}`,body)
}
}