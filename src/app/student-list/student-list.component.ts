import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { Mark } from '../mark.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  ngOnInit(): void {
    this.students = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
      { id: 3, firstName: 'Bob', lastName: 'Smith' },
    ];
  }
}
