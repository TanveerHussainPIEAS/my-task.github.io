import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentClassDetailsComponent } from './student-class-details/student-class-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

const routes: Routes = [
  { path: '', redirectTo: 'custom-validation', pathMatch: 'full' },  
  { path: 'students', component: StudentsComponent },
  { path: 'user-form', component: UserFormComponent },
  {path: 'custom-validation', component:CustomValidationComponent},
  { path: 'student-details/:id', component: StudentDetailsComponent },
  { path: 'student-class-details/:id/:studentClassId', component: StudentClassDetailsComponent },
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
