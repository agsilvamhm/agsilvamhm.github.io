import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() expanded: boolean= false;

  menuItems = [
  { route: '/', title: 'Página Inicial', icon: 'home', label: 'Página Inicial' },
  { route: 'cursos', title: 'Plataformas de cursos', icon: 'rocket_launch', label: 'Plataformas de cursos' },
  { route: 'ferramentas', title: 'Ferramentas', icon: 'build', label: 'Ferramentas' },
  { route: 'concursos', title: 'Concursos de TI', icon: 'event', label: 'Concursos de TI' },
  { route: 'ia', title: 'Ferramentas de IA', icon: 'cauto_awesome', label: 'Ferramentas de IA' }
];
}
