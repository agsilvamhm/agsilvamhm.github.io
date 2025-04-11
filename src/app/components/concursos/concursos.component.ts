import { Component } from '@angular/core';
import { Card } from 'src/app/models/card/card.model';

@Component({
  selector: 'app-concursos',
  templateUrl: './concursos.component.html',
  styleUrls: ['./concursos.component.css']
})
export class ConcursosComponent {

  cards: Card[] = [
    {
      title: 'grancursosonline',
      content: '',
      link: 'https://blog.grancursosonline.com.br/concursos-ti/',
      imageUrl: 'assets/imagens/concursos/gran-cursos-online.jpg'
    },
    {
      title: 'Estrategia',
      content: '',
      link: 'https://www.estrategiaconcursos.com.br/blog/concursos-ti/',
      imageUrl: 'assets/imagens/concursos/estrategia-concursos.png'
    },
    {
      title: 'PCI Concursos',
      content: '',
      link: 'https://www.pciconcursos.com.br/vagas/analista-de-tecnologia-da-informacao',
      imageUrl: 'assets/imagens/concursos/pci-concursos.png'
    },
    {
      title: 'Provas de TI',
      content: '',
      link: 'https://www.provasdeti.com.br/concursosdeti/abertos',
      imageUrl: 'assets/imagens/concursos/provasdeti.png'
    }
  ]
}