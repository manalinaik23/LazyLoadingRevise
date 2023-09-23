import { Component, ContentChild, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from 'src/db-data';
import { CourseDataComponent } from './course-data/course-data.component';
import { CourseImageComponent } from './course-image/course-image.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LazyLoadingRevise';
  color :any;
  userInput:number=12;
  courses=COURSES;
  startDate=new Date(2000,0,23);
  price=100;

  @ViewChild(CourseDataComponent)
  card?:CourseDataComponent

  @ViewChildren(CourseDataComponent)
  cards?:QueryList<CourseDataComponent>

  @ContentChild(CourseImageComponent)
  image!:CourseImageComponent

  ngAfterContentInit(){
    console.log(this.image);
  }
  courseClicked(item:any){
    //console.log(item);
    //console.log(this.card);
    //console.log(this.cards);
    //console.log(this.image);

  }



}
