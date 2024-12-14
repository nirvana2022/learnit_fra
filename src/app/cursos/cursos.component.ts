import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  filtro: string = ''; // Propiedad para el texto del filtro

  cursos = [
    {
      imagen: 'assets/image/im-angular.png',
      nombre: 'Curso de Angular',
      descripcion: 'Aprende los fundamentos de Angular desde cero.',
    },
    {
      imagen: 'assets/image/im-react.png',
      nombre: 'Curso de React',
      descripcion: 'Domina React para construir aplicaciones web modernas.',
    },
    {
      imagen: 'assets/image/im-nodejs.png',
      nombre: 'Curso de Node.js',
      descripcion: 'Crea aplicaciones backend con Node.js y Express.',
    },
    {
      imagen: 'assets/image/im-python.png',
      nombre: 'Curso de Python',
      descripcion: 'Aprende Python para ciencia de datos y automatización.',
    },
  ];
}

