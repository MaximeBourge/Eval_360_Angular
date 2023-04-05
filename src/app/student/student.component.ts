import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mark } from '../mark.model';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student!: Student;
  marks: Mark[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.marks = this.studentService.getMarks(this.student.id);
  }

  updateStudent(): void {
    const id = this.student?.id;
    const marks = this.marks;
    if (id && marks) {
      this.studentService.updateMarks(id, marks);
      this.router.navigate(['/student', id]);
    }
  }


}
