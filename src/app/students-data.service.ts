import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import * as _ from "lodash";
import { Observable } from 'rxjs';
import { IStudent } from './i-student';


@Injectable({
  providedIn: 'root'
})
export class StudentsDataService implements OnInit {

  allData: any = [];
  myStudents: any = [];
  uniqueStudents: any = [];
  activeId = '';
  activeName = '';


  ngOnInit() {
    this.httpClient.get(this._url).subscribe((data: any) => {
      console.log(data);
      this.allData = data;
    })

    
    
  }

  constructor(private httpClient: HttpClient) { }
  

  private _url = '../assets/my-data/data-tanveer.json';


  getStudentsList():Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this._url);

  }

  seletedStudent: IStudent[] = [];


}// End Of Class
