import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import {course} from '../Model/course';
@Component({
  selector: 'course-data',
  templateUrl: './course-data.component.html',
  styleUrls: ['./course-data.component.css']
})
export class CourseDataComponent {
  
  @Input()
  courseData!:course 

  @ContentChild(CourseImageComponent)
  image?:CourseImageComponent

  @ContentChildren(CourseImageComponent)
  images?:CourseImageComponent

  @Output()
  courseEmitter = new EventEmitter();

  constructor() {}

  courseClick(){
    this.courseEmitter.emit(this.courseData);
    console.log(this.images);
  }
}
