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
      imagen: 'assets/image/fondo-2.jpg',
      nombre: 'Curso de Angular',
      descripcion: 'Aprende los fundamentos de Angular desde cero.',
    },
    {
      imagen: 'assets/image/fondo-3.jpg',
      nombre: 'Curso de React',
      descripcion: 'Domina React para construir aplicaciones web modernas.',
    },
    {
      imagen: 'assets/image/fondo-4.jpg',
      nombre: 'Curso de Node.js',
      descripcion: 'Crea aplicaciones backend con Node.js y Express.',
    },
    {
      imagen: 'assets/image/fondo-6.jpg',
      nombre: 'Curso de Python',
      descripcion: 'Aprende Python para ciencia de datos y automatización.',
    },
  ];

  // Método para filtrar los cursos
  cursosFiltrados() {
    return this.cursos.filter((curso) =>
      curso.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}

