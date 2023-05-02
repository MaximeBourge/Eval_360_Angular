import { Injectable } from '@angular/core';
import { Project } from './interfaces/project';
import { Group } from './interfaces/group';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private groups: Group[] = [
    { id: 'group1', name: 'Group 1', members: ['Alice', 'Bob', 'Charlie', 'Jean-Pierre le fou qui rend fou'] },
    { id: 'group2', name: 'Group 2', members: ['Dave', 'Eve', 'Frank'] }
  ];

  private projects: Project[] = [
    {
      id: '1',
      name: 'Project 1',
      groupId: 'group1'
    },
    {
      id: '2',
      name: 'Project 2',
      groupId: 'group2'
    },
    {
      id: '3',
      name: 'Project 3',
      groupId: 'group1'
    },
    { id: '4',
      name: 'Project 4',
      groupId: 'group2'
    },
    { id: '5',
      name: 'Project AVEC UN NOM TRES LONG POUR VOIR SI LE BLOCK S ADAPTE A LA LONGUEUR D UN NOM DE PROJET',
      groupId: 'group1'
    },
    { id: '6',
      name: 'Project 1',
      groupId: 'group1'
    },
    { id: '7',
      name: 'Project 2',
      groupId: 'group2'
  },
    { id: '8',
      name: 'Project 3',
      groupId: 'group1'
  },
    { id: '9',
      name: 'Project 4',
      groupId: 'group2'
  },
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectDetails(id: string): Observable<{ project: Project, group: Group, members: string[] }> {
    const project = this.projects.find(p => p.id === id);
    if (!project) {
      throw new Error(`Project with id ${id} not found`);
    }
    const group = this.groups.find(g => g.id === project.groupId);
    if (!group) {
      throw new Error(`Group with id ${project.groupId} not found`);
    }
    const members = group.members;
    return of({ project, group, members });
  }

  getGroupDetails(groupId: string): Group | undefined {
    const group = this.groups.find(g => g.id === groupId);
    if (group) {
      return group;
    }
    console.error(`Group with ID ${groupId} not found`);
    return undefined;
  }

}
