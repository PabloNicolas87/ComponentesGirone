import { Component } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {

  verLista = false;

  alumnos = [
    { nombre: 'Pablo', estado: true },
    { nombre: 'María', estado: false },
    { nombre: 'Pedro', estado: true },
    { nombre: 'Ana', estado: false },
    { nombre: 'Luis', estado: true }
  ];

}
