import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {
  // Api Url Variable
  __apiurl:string="https://637f96b52f8f56e28e910967.mockapi.io/students";
  
  // Dependency Added to Contructor
  constructor(private __htpp:HttpClient) { }

  // get all Student Method Call for all Studen Data
  getAllStudent()
  {
    return this.__htpp.get(this.__apiurl);
  }

}
