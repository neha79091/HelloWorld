import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  }
  deletePost(post)
  {
    return this.http.delete(this.url +'/'+post.id)
  }
}
