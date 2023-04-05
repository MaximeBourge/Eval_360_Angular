import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Mark } from '../mark.model';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {

  student?: Student;
  marks: Mark[] = [];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      const id = +studentId;
      const student = this.studentService.getStudent(id);
      if (student) {
        this.student = student;
        this.marks = this.studentService.getMarks(id);
      }
    }
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
