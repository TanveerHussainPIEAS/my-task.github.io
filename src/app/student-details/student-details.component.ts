import { Component, OnInit } from '@angular/core';
import { StudentsDataService } from '../students-data.service';
import * as _ from "lodash";
import { IStudent } from '../i-student'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {


  
  myId: string = '';
  myName: string = ''
  mySeletedStudents: IStudent[] = [];
  displayedColumns: string[] = [ 'sr','Session', 'Year','Class Name'];

 
  constructor(private myDataService:StudentsDataService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    // this.studentId = this.myDataService.getId();

    // this.ttestID

    this.myDataService.getStudentsList().subscribe(data => {      
      this.myDataService.allData = data;
      
      
      _.each(this.myDataService.allData, (o) => {
        if (o.id == this.myId) {
          this.mySeletedStudents.push(o);
        }
       
      })
  console.log("Tanveer Test2")
  console.log(this.mySeletedStudents);
      this.mySeletedStudents = _.uniqBy(this.mySeletedStudents, 'classname')
      console.log(this.mySeletedStudents);
      _.sortBy(this.mySeletedStudents,'studentClassCourseId')
      
      console.log("Tanveer Test3")
  console.log(this.mySeletedStudents);

    });
    
    
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {     
      this.myId = this.activatedRoute.snapshot.params.id;
      
     
    })
    
    

    
  }
  
 
    
    
    // _.groupBy(this.myDataService.myStudents, this.myId);
  
  getStudentDetails(element: IStudent) {
          this.router.navigate(['student-class-details',element.id,element.studnetClassID])
    }


    
 



}
