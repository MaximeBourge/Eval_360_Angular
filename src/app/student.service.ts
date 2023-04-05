import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mark } from './mark.model';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  private students: Student[] = [];

   // Retourne tous les étudiants
   getStudents(): Student[] {
    return this.students;
  }

    // Retourne l'étudiant correspondant à l'ID donné
    getStudent(id: number): Student | undefined {
      return this.students.find(s => s.id === id);
    }

    getMarks(id: number): Mark[] {
      const student = this.getStudent(id);
      return student ? student.marks || [] : [];
    }


    // Ajoute un nouvel étudiant à la liste
  addStudent(student: Student): void {
    this.students.push(student);
  }

  // Met à jour les notes d'un étudiant
  updateMarks(id: number, marks: any[]): void {
    const student = this.getStudent(id);
    if (student) {
      student.marks = marks;
    }
  }

}
