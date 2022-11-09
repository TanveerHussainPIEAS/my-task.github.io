import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-task';

  constructor(private router:Router) {
    
  }

  onSelectStudent() {
    this.router.navigate(['/students'])
  }
  onSelectDetails() {
    this.router.navigate(['/student-details'])
  }
  onSelectClass() {
    this.router.navigate(['/student-class-details'])
  }
}
