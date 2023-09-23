import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directive/highlight.directive';
//import { CoursesComponent } from './courses/courses.component';
import { CourseDataComponent } from './course-data/course-data.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { USDINRPipe } from './usdinr.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    //CoursesComponent,
    CourseDataComponent,
    CourseImageComponent,
    USDINRPipe,
    ReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
