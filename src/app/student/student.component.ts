import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student = { id: 1, name: 'Maxime' };
  newMark = { subject: '', mark: 0 };
  marks: { subject: string, mark: number }[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.marks = this.studentService.getMarks(this.student.id);
  }

  updateStudent(): void {
    if (this.newMark.mark) {
      this.studentService.addMark(this.student.id, this.newMark);
      this.newMark = { subject: '', mark: 0 };
      this.marks = this.studentService.getMarks(this.student.id);
      console.log('La note a été enregistrée avec succès !');
      console.log(`La note ${this.newMark.mark}/20 a été ajoutée pour l'élève ${this.student?.name}`);
    }
  }

}
