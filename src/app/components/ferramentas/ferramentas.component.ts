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
    },
    {
      title: '4 devs',
      content: 'Criado em 2012, o 4Devs é um portal com ferramentas online e gratuitas para programadores. O site existe para ajudar estudantes de programação, programadores, analistas e testadores software.',
      link: 'https://www.4devs.com.br/',
      imageUrl: 'assets/imagens/ferramentas/4devs.jpeg'
    },
    {
      title: 'Qwiklabs - Linux',
      content: 'O projeto "Qwiklabs Resources" contém arquivos, conjuntos de dados e imagens de máquina para determinados laboratórios e pode ser acessado de todos os ambientes de laboratório do Google Cloud.',
      link: 'https://www.cloudskillsboost.google/focuses/40759810?parent=lti_session',
      imageUrl: 'assets/imagens/ferramentas/qwiklabs.jpeg'
    },
    {
      title: 'Qwiklabs - Windows',
      content: 'O projeto "Qwiklabs Resources" contém arquivos, conjuntos de dados e imagens de máquina para determinados laboratórios e pode ser acessado de todos os ambientes de laboratório do Google Cloud.',
      link: 'https://www.cloudskillsboost.google/focuses/40759856?parent=lti_session',
      imageUrl: 'assets/imagens/ferramentas/qwiklabs.jpeg'
    },
    {
      title: 'draw.io',
      content: 'draw.io is free online diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams.',
      link: 'https://app.diagrams.net/',
      imageUrl: 'assets/imagens/ferramentas/diagramas-net.png'
    },
    {
      title: 'Portugol',
      content: 'Portugol, também conhecido como Português estruturado, é uma família de linguagens de programação que possui como base a língua portuguesa.',
      link: 'https://erickweil.github.io/portugolweb/',
      imageUrl: 'assets/imagens/ferramentas/portugol.png'
    },
    {
      title: 'flowgorithm',
      content: 'PO Flowgorithm é uma ferramenta educacional que ajuda a aprender programação de forma visual e interativa. É uma linguagem de programação para iniciantes baseada em fluxogramas gráficos.',
      link: 'http://www.flowgorithm.org/',
      imageUrl: 'assets/imagens/ferramentas/Flowgorithm.png'
    },
    {
      title: 'CSS Dinner',
      content: 'O CSS Diner é um jogo interativo que ajuda a aprender a usar seletores CSS. É uma forma divertida e educativa de aprender CSS, adequada para todos os níveis de habilidade.',
      link: 'https://flukeout.github.io/',
      imageUrl: 'assets/imagens/ferramentas/Flowgorithm.png'
    }

  ]
}
