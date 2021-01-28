import { NotFoundError } from './../common/not-found-error';
import { PostsService } from './../services/posts.service';

import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { error } from 'protractor';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
postsArr:any[];

  constructor(private service:PostsService)
   {
     
    }
  ngOnInit(): void {
      this.service.getPost()
    .subscribe((response:any[])=>
      {
          this.postsArr=response; 
      });
  }
//here we are creating
  createPost(input:HTMLInputElement)
  {   let post={title:input.value};
      input.value='';
      this.service.createPost(input)
      .subscribe((response:any)=>{
        post['id']=response.id;
        this.postsArr.splice(0,0,post);
        console.log(response);
      },
      );
  }
  updatePost(post)
  {
    this.service.updatePost(post)
    .subscribe((response:any)=>{
      console.log(response);
    },(error:AppError)=>
    {
      console.log(error)
      if(error instanceof NotFoundError)
      {
        alert('Post is not available')
      }
      
      else
      throw error
    })
  }
  

  deletePost(post)
  { 
    this.service.deletePost(234827928492)
    .subscribe((response:any)=>{
      let index=this.postsArr.indexOf(post);
      this.postsArr.splice(index,1);
    },
    (error:AppError)=>
    {
      console.log(error)
      if(error instanceof NotFoundError)
        alert('This Post has already been deleted')
      else
      {
        throw error
      }
      
    })
  }

}
