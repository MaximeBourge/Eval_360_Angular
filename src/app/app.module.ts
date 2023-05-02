import { Injectable, NgModule } from '@angular/core';
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
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
//import { DocumentData, Firestore, FirestoreModule } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { environment } from 'src/environment';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Project } from './interfaces/group';

@Injectable()
export class FirestoreService {
  constructor() {
    firebase.initializeApp(environment.firebase);
  }

  /*public getItems(): Observable<DocumentData[]> {
    const db = firebase.firestore();
    return new Observable<DocumentData[]>(observer => {
      db.collection('items').get().then(querySnapshot => {
        const items = querySnapshot.docs.map(doc => doc.data());
        observer.next(items);
      });
    });
  }
  */
}


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
    HomeTeacherComponent,
    ProjectDetailComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //FirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  /*title = 'Eval_360';
  items: Observable<DocumentData[]>;

  constructor(firestoreService: FirestoreService) {
    this.items = firestoreService.getItems();
  }*/

 }
