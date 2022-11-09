import { Component, OnInit, ViewChild } from '@angular/core';
import { iteratee } from 'lodash';
import { StudentsDataService } from '../students-data.service';
import * as _ from "lodash";
import { IStudent } from '../i-student'
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';





// export interface PeriodicElement {
//   id: string;
//   name: string;  
// }

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {


  ELEMENT_DATA: IStudent[] = [];
  
  

  displayedColumns: string[] = [ 'sr', 'id', 'name'];
  dataSource = this.ELEMENT_DATA.concat(this.myDataService.myStudents);
  
  
  
 uniqueData:any = [];

 studentsArray: any = [];
 
 
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  
  



  students: {
    id: string, name: string, session: string, year: string, classname: string, coursename: string,courseCode:string
    creditHours: string, studnetClassID: string, roadMapCourseId: string, studentClassCourseId: string
  }[] = [];
  
  
  


  

  constructor(private myDataService: StudentsDataService, private router:Router) { }
  


  ngOnInit(): void {


   // this.dataSource2.paginator = this.paginator;
    this.myDataService.seletedStudent=[];
    // this.students = this.myDataService.getName();   
    this.myDataService.getStudentsList().subscribe(data => {
      this.myDataService.myStudents = data;
      this.myDataService.allData = data;
      console.log("-------------------data", data)
      
      console.log("-------------------STUDENTdata", this.myDataService.myStudents)
      this.myDataService.uniqueStudents = _.uniqBy(this.myDataService.myStudents, 'id');   
      console.log(this.myDataService.uniqueStudents);      
      this.dataSource = this.ELEMENT_DATA.concat(this.myDataService.uniqueStudents);
      //console.log(data,this.myDataService.myStudents)


    }
      );
    
    
    
      
  }

  newDataSource=new MatTableDataSource(this.dataSource)





  collectData() {
    console.log(this.myDataService.myStudents)    
    console.log("Collected Data")
    console.log(this.myDataService.allData)
    //this.uniqueStudents = _.each(this.student, function (value){})
  }


  doUnique() {
    this.collectData();
    this.myDataService.uniqueStudents = _.uniqBy(this.myDataService.myStudents, 'id');   
    console.log(this.myDataService.uniqueStudents);      
    this.dataSource = this.ELEMENT_DATA.concat(this.myDataService.uniqueStudents);
  }
  


//   doUnique2() {
//     let uniqueStudents:any = [];
//     _.each(this.studentsArray, function (item) {
//       let found = _.find(uniqueStudents, function (o) {
//         item['id'] === o['id'];

//         if (!found) {
//           uniqueStudents.push(item);
//         }
//       })
//     })
//     console.log(uniqueStudents);
// }
  

  

  // viewUnique() {

    
  // this.uniqueStudents=_.filter(this.student,function(o){
    
  //   let changeId=parseInt(o.id);
    
  //       return changeId>55;
  // })
  // console.log(this.uniqueStudents)
  // }
  value2;

  activeStudent(element: IStudent) {
    
    this.myDataService.activeId = element.id;
    this.myDataService.activeName = element.name;
    this.router.navigate(['student-details',element.id])
      
  }

  applyFilter(value: string) {
    console.log("Function Called")
    this.newDataSource.filter = value.trim().toLowerCase();
    console.log('New ',this.newDataSource)
  }


  // applyFilter2() {
  //   console.log("Function Called")
  //   this.dataSource.filter = this.value2.trim().toLowerCase();
  //   console.log('New ', this.dataSource)
  //   console.log('New ',this.value2)
  // }


  
  

}
