import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode="map";
  courses1;
  loadCourse()
  {
    this.courses1=[
      {  name:'course1', id:1},
      {  name:'course2', id:2},
      {  name:'course3', id:3}];
  }
  trackCourse(index,course)
  {
    return course ? course.id:undefined;
  }
  courses=[1,2,3];
  title = 'HelloWorld';
  tweet=
  {
    body:'i am the body of tweet',
    isLiked:false,
    countLikes:10

  }
}
