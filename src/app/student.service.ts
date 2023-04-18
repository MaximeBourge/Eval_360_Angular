import { Injectable } from '@angular/core';
import { Mark } from './mark.model';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [];

  constructor() { }

  // Retourne tous les étudiants
  getStudents(): Student[] {
    return this.students;
  }

  // Retourne l'étudiant correspondant à l'ID donné
  getStudent(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }

  // Retourne les notes de l'étudiant correspondant à l'ID donné
  getMarks(id: number): Mark[] {
    const student = this.getStudent(id);
    return student ? student.marks || [] : [];
  }

  // Ajoute un nouvel étudiant à la liste
  addStudent(student: Student): void {
    this.students.push(student);
  }

  // Met à jour les notes d'un étudiant
  updateMarks(id: number, marks: Mark[]): void {
    const student = this.getStudent(id);
    if (student) {
      student.marks = marks;
    }
  }

  // Ajoute une nouvelle note à l'étudiant correspondant à l'ID donné
  addMark(id: number, mark: Mark): void {
    const student = this.getStudent(id);
    if (student && mark.subject && mark.mark) {
      student.marks = student.marks || [];
      student.marks.push(mark);
    }
  }

  updateStudent(student: Student): void {
    const index = this.students.findIndex(s => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
    }
  }

}
