import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
postsArr:any[];
private url:string='http://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient)
   {
      http.get(this.url)
      .subscribe((response:any[])=>
        {
            this.postsArr=response; 
        });
    }
//here we are creating
  createPost(input:HTMLInputElement)
  {   let post={title:input.value};
      input.value='';
      this.http.post(this.url,JSON.stringify(post))
      .subscribe((response:any)=>{
        post['id']=response.id;
        this.postsArr.splice(0,0,post);
        console.log(response);
      });
  }
  updatePost(post)
  {
    this.http.patch(this.url +'/'+post.id,JSON.stringify({isRead:true}))
    .subscribe((response:any)=>{
      console.log(response);
    })
  }
  deletePost(post)
  {
    this.http.delete(this.url +'/'+post.id)
    .subscribe((response:any)=>{
      let index=this.postsArr.indexOf(post);
      this.postsArr.splice(index,1);
    })
  }

}
