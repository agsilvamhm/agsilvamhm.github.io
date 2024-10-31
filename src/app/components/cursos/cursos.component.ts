import { Component } from '@angular/core';

interface Card {
  title: string;
  content: string;
  link: string;
  imageUrl: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cards: Card[] = [
    {
      title: 'DIO',
      content: 'Plataforma de cursos de informática',
      link: 'https://www.dio.me',
      imageUrl: 'assets/imagens/dio.png'
    },
    {
      title: 'FIAP',
      content: 'FIAP oferece cursos gratuitos na área de TI e Negócios',
      link: 'https://on.fiap.com.br',
      imageUrl: 'assets/imagens/Fiap.jpeg'
    },
    {
      title: 'Rocketseat',
      content: 'Aprenda programação do zero e DE GRAÇA No Discover você vai descomplicar a programação, aprender a criar seu primeiro site com a mão na massa e iniciar sua transição de carreira.',
      link: 'https://www.rocketseat.com.br',
      imageUrl: 'assets/imagens/Rocketseat.webp'
    },
    {
      title: 'Coursera',
      content: 'Coursera é uma plataforma de cursos online gratuitos',
      link: 'https://www.coursera.org',
      imageUrl: 'assets/imagens/Coursera.png'
    }
  ];

}
