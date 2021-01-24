import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './Courses.component';
import { AuthorComponent } from './author/author.component';
import { EmailComponent } from './email/email.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { InputFornatDirective } from './input-fornat.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemyComponent } from './udemy/udemy.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    EmailComponent,
    CalculatorComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCasePipe,
    LikeComponent,
    InputFornatDirective,
    ZippyComponent,
    ContactFormComponent,
    UdemyComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
