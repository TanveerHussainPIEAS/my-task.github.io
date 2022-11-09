import { Component, OnInit } from '@angular/core';
import { StudentsDataService } from '../students-data.service';
import * as _ from "lodash";
import { IStudent } from '../i-student'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-class-details',
  templateUrl: './student-class-details.component.html',
  styleUrls: ['./student-class-details.component.css']
})
export class StudentClassDetailsComponent implements OnInit {


  studentId: any[] = []
  studentClassId: any[] = []
  studentClassDetails: any[] = []
  aliRaza: any[] = []
  displayedColumns: string[] = ['sr', 'id','Credit Hours'];

  constructor(private myDataService:StudentsDataService,private activatedRoute:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {


    this.myDataService.getStudentsList().subscribe(data => {      
      this.myDataService.allData = data;
      
      
      _.each(this.myDataService.allData, (o) => {
        if (o.id == this.studentId) {
          this.studentClassDetails.push(o);
        }
       
      })
  console.log("Tanveer Test2")
      console.log(this.studentClassDetails);
      
      _.each(this.studentClassDetails, (o) => {
        if (o.studentClassId == this.studentClassId) {
          this.aliRaza.push(o);
        }
       
      })




      this.aliRaza = _.uniqBy(this.studentClassDetails, 'courseCode')
      
      console.log("Tanveer Test3")
      console.log(this.studentClassDetails);    
      

    });


    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id: number = parseInt(this.activatedRoute.snapshot.params.id);
      this.studentId = this.activatedRoute.snapshot.params.id;
      this.studentClassId = this.activatedRoute.snapshot.params.studnetClassID;
      
     
    })

    

  }



}
