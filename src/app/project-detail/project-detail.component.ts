import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../interfaces/project';
import { Group } from '../interfaces/group';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
  projectId: string = '';
  project$!: Observable<Project>;
  group!: Group;
  members!: string[];


  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

    ngOnInit() {
      const projectId = this.route.snapshot.paramMap.get('id');
      if (projectId) {
        this.projectService.getProjectDetails(projectId).subscribe(({project, group, members}) => {
          this.project$ = of(project);
          this.group = group;
          this.members = members;
        });
      }
    }



    private getGroup(groupId: string): Group {
      const group = this.projectService.getGroupDetails(groupId);
      if (group) { // Vérifier si group est défini avant de le renvoyer
        return group;
      }
      throw new Error(`Le groupe avec l'ID ${groupId} n'a pas été trouvé.`);
    }
}
