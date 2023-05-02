import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { MarkComponent } from './mark/mark.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'students', component: StudentListComponent },
{ path: 'student/:id', component: StudentComponent },
{ path: 'marks/:id', component: MarkComponent },
{ path: 'home', component: HomepageComponent },
{ path: 'auth', component: AuthenticationComponent },
{ path: 'inscription', component: InscriptionComponent },
{ path: 'homestudent', component: HomeStudentComponent },
{ path: 'hometeacher', component: HomeTeacherComponent },
{ path: 'project/:id', component: ProjectDetailComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
