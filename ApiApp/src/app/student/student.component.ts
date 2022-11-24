import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentData:Student[]=[];
  constructor(private __api:ApiStudentService){}
  ngOnInit()
  {
    this.__api.getAllStudent().subscribe((res:any)=>{

      console.log(res);
      this.studentData=res;
    })
  }
}
