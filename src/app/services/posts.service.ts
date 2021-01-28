import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url:string='http://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getPost()
  {
    return this.http.get(this.url);
  }
  createPost(post){
    
    return this.http.post(this.url,JSON.stringify(post))
  }
  updatePost(post)
  {
   return this.http.patch(this.url +'/'+post.id,JSON.stringify({isRead:true}))
   .pipe(catchError(this.handleError))
  }
  deletePost(postId)
  {
    console.log(postId)
    return this.http.delete(this.url +'/'+postId)
    .pipe(catchError(this.handleError))
  }
  handleError(Error: Response){
    if(Error.status===400)
      return throwError(new BadInput(Error.json()))
    if(Error.status===404)
      return throwError(new NotFoundError());
    return throwError(new AppError(Error));
  }
}
