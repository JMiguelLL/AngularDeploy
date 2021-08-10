import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() { }

  courses = [
    {
      title: 'Angular',
      description: 'Desc 1',
    },
    {
      title: 'React',
      description: 'Desc 2',
    },
    {
      title: 'Vue',
      description: 'Desc 3',
    },
  ];
}
