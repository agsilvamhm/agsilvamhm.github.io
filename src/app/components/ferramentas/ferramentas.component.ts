import { Component } from '@angular/core';
import { Card } from 'src/app/models/card/card.model'; 

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent {
  cards: Card[] = [
    {
      title: 'Spring Initializr',
      content: 'O Spring Initializr é uma ferramenta que permite iniciar projetos Spring Boot de forma rápida e configurável. Ele gera automaticamente a estrutura do projeto e o pom.xml.',
      link: 'https://start.spring.io/',
      imageUrl: 'assets/imagens/ferramentas/spring_initializr.png'
    }]        
}
