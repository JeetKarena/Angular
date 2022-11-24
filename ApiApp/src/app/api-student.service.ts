import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {

  constructor(private __htpp:HttpClient) { }

  getAllStudent()
  {
    return this.__htpp.get('https://637f96b52f8f56e28e910967.mockapi.io/students');
  }

}
