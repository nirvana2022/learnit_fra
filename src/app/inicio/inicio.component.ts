import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  constructor(private router: Router) {}
  iraIngreso() {
    this.router.navigateByUrl('/ingreso');
  }
  iraCursos() {
    this.router.navigateByUrl('/cursos');
  }
}
