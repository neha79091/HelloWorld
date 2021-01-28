import { AuthorService } from '../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `<h2>
                <ul>
                  <li *ngFor="let Author1 of AuthorList">
                  {{Author1}}
                  </li>
                </ul>
            </h2>
            {{book.name | uppercase | lowercase}}<br/>
            {{book.buyers}}<br/>
            {{book.rating}}<br/>
            {{book.price}}<br/>
            {{book.releaseDate | date:'shortDate'}}<br/>
            {{text |summary:10}}<br/><br/><br/><br/>
            `,
  //styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  book={
    name:"J.K Rowling",
    buyers:34000,
    rating:4.567,
    price:190.95,
    releaseDate:new Date(1997,1,16)

  }
  text="Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors including Pages and Microsoft Word have since adopted Lorem ipsum as well.";
   title="I am the title";
   AuthorList;
   getTitle()
   {
     return "Hey Retirn The title plss";
   }
   
  constructor(service :AuthorService) 
  {
    //making a new object service class
    //let service=new AuthorService();
    this.AuthorList=service.getAuthor();
   }

  ngOnInit(): void {
  }

}
