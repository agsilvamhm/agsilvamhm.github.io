import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  expanded = true;
  menuIcon = 'menu'; // Ícone inicial

  toggleMenu() {
    this.expanded = !this.expanded;
    this.menuIcon = this.expanded ? 'menu' : 'close'; // Alterna entre os ícones
  }

}
