import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { HolaService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HolaService]
})
export class HomeComponent implements OnInit {

  nombre: string = "";
  apellido: string = "";
  edad: number = 0;
  genero: string = "";

  currentClass: string;
  currentClassArray: string[];
  currentClasses: Record<string,boolean> = {};

  primary = true;
  textFeat = true;
  special = false;

  specialStyle = {};

  isOne = false;

  constructor(private coursesService: CoursesService) { 
    this.currentClass = "primaryColor";
    this.currentClassArray = ["primaryColor","textFeatures"];
    this.setCurrentClasses();
    this.changeSpecialStyle();
  }

  ngOnInit(): void {
    console.log(this.coursesService.courses);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'PrimaryColor': this.primary,
      'TextFeature': this.textFeat,
      'Style': this.special
    }
  }

  changeSpecialStyle(){
    this.isOne = !this.isOne;

    let styleOne = {
      'font-size': '18px',
      'background-color': 'black',
      'color': 'lightblue',
      'padding': '20px',
      'margin': '10px'
    };
    let styleTwo = {
      'font-size': '30px',
      'background-color': 'white',
      'color': 'black',
      'padding': '30px',
      'margin': '10px'
    };

    this.isOne ? this.specialStyle = styleOne : this.specialStyle = styleTwo; 
  }

}
