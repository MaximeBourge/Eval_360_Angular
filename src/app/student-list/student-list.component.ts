import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { Mark } from '../mark.model';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.students = [
      { id: 1, name: 'John'},
      { id: 2, name: 'Jane'},
      { id: 3, name: 'Bob'},
    ];
  }

  goToDetail(id: number): void {
    this.router.navigate(['/student', id]);
  }

}
