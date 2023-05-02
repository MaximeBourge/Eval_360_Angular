import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';
import { Group } from '../interfaces/group';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent {

  projects$!: Observable<Project[]>;

  constructor(
    private route: Router,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }
}
