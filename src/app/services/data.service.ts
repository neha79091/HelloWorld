import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';

import { resourceLimits } from 'worker_threads';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private url:string,private http:HttpClient) { }

  getAll()
  {
    return this.http.get(this.url)
    .pipe(map((response:any)=>response)
    ,(catchError(this.handleError)))
  }
  create(resource){
    
    return this.http.post(this.url,resource.toString())
    .pipe(map((response:any)=>response),catchError(this.handleError))
  }
  update(resource)
  {
   return this.http.patch(this.url +'/'+resource.id,JSON.stringify({isRead:true}))
   .pipe(map((response:any)=>response),catchError(this.handleError))
  }
  delete(Id)
  {
      
    console.log(Id)
    return this.http.delete(this.url +'/'+Id)
    .pipe(map((response:any)=>response),catchError(this.handleError))
  }
  handleError(Error: Response){
    if(Error.status===400)
      return throwError(new BadInput(Error.json()))
    if(Error.status===404)
      return throwError(new NotFoundError());
    return throwError(new AppError(Error));
  }
}
