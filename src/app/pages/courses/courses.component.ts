import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  courses;
  ejemplo= {
    title: 'hola',
    content: 'quetal'
  }
  constructor(private coursesService:CoursesService) {
    this.courses = this.coursesService.courses
   }

  ngOnInit(): void {
    console.log('despues del constructor');
  }

  ngOnDestroy(): void {
    console.log('antes de ser destruido');
  }

  courseClick(event: { title: string }): void {
    console.log(event, 'Data que viene del hijo');
  }
}
