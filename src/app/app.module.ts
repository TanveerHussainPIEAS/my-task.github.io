import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import * as _ from "lodash";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentClassDetailsComponent } from './student-class-details/student-class-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IStudent } from './i-student';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UserFormComponent } from './user-form/user-form.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentClassDetailsComponent,
    PageNotFoundComponent,
    PaginatorComponent,
    UserFormComponent,
    CustomValidationComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSelectModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
