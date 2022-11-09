import { Component, OnInit } from '@angular/core';
import { StudentsDataService } from '../students-data.service';
import * as _ from "lodash";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs';
// from 'rxjs/observable';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  

  nameSortedList: any[] = [];
  forCoursesList: any[] = [];
  forSessionList: any[] = [];
  valueOfInput: any[] = [];
  listOfNames: any[] = [];
  forYearsList: any[] = [];
  listOfYears: number[] = [];
  indexOfWhile = 0;
  // shouldDisbale = true;
 
  
  // Form Group and Form Controls


  // myFormGroup = new FormGroup({
  //   nameInput : new FormControl( ['',[Validators.required,Validators.minLength(5)]]),    
  //   sessionInput : new FormControl(),
  //   yearInput: new FormControl(),
  //   coursesInput : new FormControl()
  // });



  // Form Controls Using Form Builder


  myFormGroup = this.fb.group(
    {
      nameInput: new FormControl('',[Validators.required,Validators.minLength(5)])  ,
      sessionInput: new FormControl('',Validators.required) ,
      yearInput: new FormControl('',Validators.required),
      coursesInput: new FormControl('', Validators.required),
      emailInput: new FormControl('', [Validators.required, Validators.email]) ,
      URLInput: new FormControl('',[Validators.required,this.URLValidator]) 
  }
  )
  
  // get getNameInput() {
  //   return this.myFormGroup.get('nameInput')
  // }
  


  // Code of custom Object
  oneCourse = {
    courseName:'',
    creditHourse: 0,
    courseCode: 0,
  };


  objectOutput = {
    studentName: "",
    id:0,
    session: "",
    year: 0,
    allCourses:[
     
    ]
  };





  
  
  
   

    

  // mySeletedStudents: IStudent[] = [];
  filteredOptionsNew: Observable<any[]>;

  constructor(private myDataService:StudentsDataService,private fb:FormBuilder) { }


  ngOnInit() {

      
      this.myDataService.getStudentsList().subscribe(data => {      
      this.myDataService.allData = data;      
      this.nameSortedList = _.uniqBy(this.myDataService.allData, 'id')
      // console.log(this.nameSortedList);
      this.forYearsList=_.uniqBy(this.myDataService.allData, 'year')
      // console.log("List of Year here *************",this.forYearsList);
      this.forCoursesList = _.uniqBy(this.myDataService.allData, 'coursename')
      // console.log("List of Courses here *************", this.forCoursesList);
      this.forSessionList = _.uniqBy(this.myDataService.allData, 'session')
      // console.log("List of Session here *************",this.forSessionList)
        this.getYearsList();
        // this.giveNameList() 
    });

    this.filteredOptionsNew=this.myFormGroup['nameInput'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value['name']))
        
    );
    
    

    // do {
      
      
    //   let lastItem = this.listOfNames[this.listOfNames.length - 1]
    //   let currentYear = new Date().getFullYear();
      

    // } while (lastItem==currentYear);


    
    // if (this.myFormGroup['nameInput'] == null && this.myFormGroup['sessionInput'] == null &&
    //   this.myFormGroup['sessionInput'] == null &&
    //   this.myFormGroup['yearInput'] == null &&
    //   this.myFormGroup['coursesInput'] == null) {
    //   this.shouldDisbale =!false;
      
    // }
  
  
  
  }  // End Of ngOnInit

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log("**********Input *******",this.valueOfInput )
    return this.nameSortedList.filter(option => option['name'].toLowerCase().includes(filterValue));
  }



  // giveNameList() {
  //   for (let student of this.nameSortedList) {
  //     this.listOfNames.push(student.name)
  //   }
  //   // console.log("Student Name",this.listOfNames)
  // }



  displayWith(option) {
    return option? option.name:null ;
  }

  getYearsList() {
    let maxYear;

    for (let year of this.forYearsList) {
      this.listOfYears.push(parseInt(year.year))
    
    }

    do {
      maxYear = _.max(this.listOfYears);
      this.listOfYears.push(maxYear+1)
    } while (maxYear==(new Date().getFullYear())-1); 
    // console.log("Years",this.listOfYears)
  }
  
  
  onSubmit() {
    let getCourses
    let nameObject: any;
    // let getSession;
    this.objectOutput.allCourses = [];
    console.log("Submit Button is Clicked");    
    console.log(this.myFormGroup.value)
    nameObject = this.myFormGroup.value['nameInput'];
    this.objectOutput.session = this.myFormGroup.value['sessionInput'];
    this.objectOutput.year = this.myFormGroup.value['yearInput']; 
    this.objectOutput.studentName = nameObject.name;
    this.objectOutput.id = nameObject.id;
    getCourses = this.myFormGroup.value['coursesInput'];
    console.log("My Sleted Courses", getCourses)
    for (let course of getCourses) {
      // this.oneCourse.courseCode = course.courseCode;  // 101
      // this.oneCourse.courseName = course.coursename;  // abc
      // this.oneCourse.creditHourse = course.creditHours; // 2
      // this.objectOutput.allCourses.push(this.oneCourse)  // 
     
      this.objectOutput.allCourses.push({courseName:course.coursename,courseCode:course.courseCode,creditHourse:course.creditHours})
      // console.log(this.oneCourse,'---------------------')
    }
    
    // this.objectOutput.session = nameObject.id;
    console.log("Object Formation", this.objectOutput)
    this.myFormGroup.reset()
  }
  


  // createCourseObject() {

  //   let tempArray = this.myFormGroup.value['coursesInput'];
  //   // for (let course of this.myFormGroup.coursesInput.length) {
  //   //   console.log("****************")
  //   // }
  //   console.log("******Array******",tempArray)
  // }







  // Custom Validator 

  // nameValidator(control: AbstractControl): { [key: string]: any } | null{
  //   // for (let name of this.listOfNames) {
  //     const foundName = /admin/.test(control.value)
  //   return foundName ? { 'nameFound': { value: control.value } } : null;
  //   }
  // // }


  URLValidator(control: AbstractControl){    
    if (!control.value.startsWith("https") || !control.value.includes('.com')) {
       return {invalidURL:true}
    }
    else {
      return null;
    }
    
    } // end of validator


} // end of class
