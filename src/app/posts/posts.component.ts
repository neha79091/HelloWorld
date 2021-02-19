import { throwError } from 'rxjs';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { PostsService } from './../services/posts.service';

import { Component, OnInit } from '@angular/core';

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
      this.service.getAll()
    .subscribe((posts)=>
      {
          this.postsArr=posts; 
      });
  }
//here we are creating
  createPost(input:HTMLInputElement)
  {   let post={title:input.value};// creating the post object
      this.postsArr.splice(0,0,post);//optimistic update implementation

      input.value='';

      this.service.create(input)
      .subscribe((posts)=>{
        post['id']=posts.id;
       
        console.log(posts);
      }
      ,(error:AppError)=>
      {
        console.log("i am here")
        this.postsArr.splice(0,1);
        if(error instanceof BadInput)
        {
          
        }
        else throw error;
      }
      );
  }
  updatePost(post)
  {
    this.service.update(post)
    .subscribe((posts)=>{
      console.log(posts);
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
    let index=this.postsArr.indexOf(post);
      this.postsArr.splice(index,1);

    this.service.delete(post.id)
    .subscribe((posts)=>{
      
    },
    (error:AppError)=>
    {
      this.postsArr.splice(index,0,post)
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
