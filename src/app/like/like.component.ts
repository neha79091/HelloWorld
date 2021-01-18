import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {

  @Input('isLiked') isLiked:boolean;
  @Input('countLikes') countLikes:number;
  

  onClick()
  { this.isLiked=!this.isLiked;
    this.countLikes+=(this.isLiked)?1:-1;
    
  }
  

}
