import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() sessionNumber: number;
  @Input('title') title = '';
  @Output() onCourseClick = new EventEmitter<{ title: string }>();
  constructor() {
    this.sessionNumber = 0;
   }

  ngOnInit(): void {
    
  }
  
  onCardClick(): void{
    this.onCourseClick.emit({title: 'Hola'});
  }

}
