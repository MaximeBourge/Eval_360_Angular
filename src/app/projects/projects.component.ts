import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    const projectId = this.route.snapshot.paramMap.get('id');
  // TODO: récupérez les détails du projet correspondant à l'identifiant "projectId"
  }

}
