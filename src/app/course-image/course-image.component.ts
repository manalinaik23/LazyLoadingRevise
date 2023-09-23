import { Component, Input } from '@angular/core';
import { course } from '../Model/course';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent {
  
  @Input()
  item?:course;

  onClick(){
    console.log(this.item);
  }
}
