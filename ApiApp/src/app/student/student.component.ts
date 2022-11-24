import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  
  // Created a new Empty Student Array
  studentData:Student[]=[];

  // Added Dependancy To Contuctor

  constructor(private __api:ApiStudentService){}
  
  
  /* 
  convert =>  Observable to an actual obj or array using subscribe 
  then storing data into variable  
  */
  ngOnInit()
  {
    // Calling get all method
    this.__api.getAllStudent().subscribe((res:any)=>{

      console.log(res);
      this.studentData=res;
    })
  }
}
