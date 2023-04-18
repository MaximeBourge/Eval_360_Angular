import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { MarkComponent } from './mark/mark.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    MarkComponent,
    StudentListComponent,
    HomepageComponent,
    AuthenticationComponent,
    InscriptionComponent,
    HomeStudentComponent,
    HomeTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
