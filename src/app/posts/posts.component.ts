import { PostsService } from './../services/posts.service';

import { Component, OnInit } from '@angular/core';


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
      },error=>
      {
        alert('An unexpected error occured')
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
      },error=>
      {
        alert('An unexpected error occured')
      });
  }
  updatePost(post)
  {
    this.service.updatePost(post)
    .subscribe((response:any)=>{
      console.log(response);
    },error=>
    {
      alert('An unexpected error occured')
    })
  }
  deletePost(post)
  {
    this.service.deletePost(post)
    .subscribe((response:any)=>{
      let index=this.postsArr.indexOf(post);
      this.postsArr.splice(index,1);
    },
    (error:Response)=>
    {
      if(error.status===404)
        alert('This Post has already been deleted')
      else
      {
        alert('An unexpected error occured')
      }
      
    })
  }

}
