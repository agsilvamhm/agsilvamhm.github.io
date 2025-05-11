import { Component } from '@angular/core';
import { Card } from 'src/app/models/card/card.model'; 

@Component({
  selector: 'app-ferramentas-ia',
  templateUrl: './ferramentas-ia.component.html',
  styleUrls: ['./ferramentas-ia.component.css']
})
export class FerramentasIAComponent {
 cards: Card[] = [
    {
      title: 'Anthropic claude',
      content: 'O Anthropic Claude pode realizar tarefas de resolução de problemas, como encontrar soluções matemáticas, traduzir entre idiomas e resumir documentos longos.',
      link: 'https://www.anthropic.com/product',
      imageUrl: 'assets/imagens/ia/claude-3.jpg'
    },
    {
      title: 'Gemini',
      content: 'Aumente sua criatividade e produtividade com o Gemini. Converse para começar a escrever, planejar, aprender e muito mais com a IA do Google.',
      link: 'https://gemini.google.com/app',
      imageUrl: 'assets/imagens/ia/gemini.jpg'
    },
    {
      title: 'Microsoft Copilot',
      content: 'Integrado ao Microsoft Edge, o Microsoft Copilot pode ajudar nas pesquisas on-line para encontrar informações, comparar produtos e resumir o conteúdo de páginas da Web.',
      link: 'https://www.microsoft.com/en-us/edge/features/copilot?form=MT00IS',
      imageUrl: 'assets/imagens/ia/copilot.png'
    },
    {
      title: 'chatGPT',
      content: 'O ChatGPT pode gerar ideias, planejar cronogramas, depurar códigos e revisar textos.',
      link: 'https://openai.com/chatgpt',
      imageUrl: 'assets/imagens/ia/chatgpt.jpg'
    },
    {
      title: 'Clockwise ',
      content: 'O Clockwise é uma ferramenta de calendário que aprende os hábitos de trabalho dos usuários para programar e gerenciar automaticamente os eventos do calendário.',
      link: 'https://www.getclockwise.com/',
      imageUrl: 'assets/imagens/ia/clockwise.jpeg'
    },
    {
      title: 'Grammarly',
      content: 'O Grammarly é um assistente de redação que pode ajudar os usuários a editar e escrever textos claros e concisos.',
      link: 'https://www.grammarly.com/',
      imageUrl: 'assets/imagens/ia/grammarly.png'
    },
    {
      title: 'Jasper',
      content: 'O Jasper é um assistente de redação destinado a tarefas de marketing, como a elaboração de publicações em mídias sociais, e-mails e conteúdo de páginas de destino.',
      link: 'https://www.jasper.ai/',
      imageUrl: 'assets/imagens/ia/jasper.png'
    },
    {
      title: 'NotebookLM',
      content: 'O NotebookLM se integra a aplicativos de documentos, como o Google Docs, e ajuda a resumir ou fazer perguntas específicas sobre textos, notas e fontes',
      link: 'https://notebooklm.google/',
      imageUrl: 'assets/imagens/ia/notebook.png'
    },
    {
      title: 'Notion',
      content: 'O Notion IA é um assistente de redação incorporado ao Notion, uma ferramenta de software de produtividade e de anotações.',
      link: 'https://www.notion.so/product/ai',
      imageUrl: 'assets/imagens/ia/notion.png'
    },
    {
      title: 'IA by Zapier',
      content: 'O IA by Zapier é uma ferramenta de produtividade integrada que permite que a automação de IA seja integrada aos aplicativos e fluxos de trabalho já conectados por meio do Zapier.',
      link: 'https://zapier.com/apps/ai/integrations',
      imageUrl: 'assets/imagens/ia/zapier.jpg'
    },
    {
      title: 'Gemini Code Assist',
      content: 'Um plugin para ambientes de desenvolvimento integrado (IDE) populares, o Gemini Code Assist permite que os usuários solicitem o Gemini em seus IDEs para gerar código, solucionar bugs e responder a perguntas sobre desenvolvimento de software.',
      link: 'https://codeassist.google/',
      imageUrl: 'assets/imagens/ia/codeassist.png'
    },
    {
      title: 'Copiloto do GitHub',
      content: 'Um plug-in para IDEs populares e integrado ao GitHub, o Copilot pode escrever e sugerir código, sugerir descrições para solicitações pull, traduzir vários idiomas em código e indexar repositórios.',
      link: 'https://github.com/features/copilot',
      imageUrl: 'assets/imagens/ia/githubcopilot.jpg'
    },
    {
      title: 'Tabnine',
      content: 'O Tabnine pode ser um plug-in para muitos editores de código populares para ajudar a acelerar a entrega e manter o código seguro.',
      link: 'https://www.tabnine.com/',
      imageUrl: 'assets/imagens/ia/tabine.png'
    },
    {
      title: 'Jupyter IA',
      content: 'O Jupyter é uma plataforma de código aberto para codificação, e essa ferramenta integrada inclui uma interface de bate-papo, que pode ser usada para gerar código, corrigir erros de codificação e fazer perguntas sobre arquivos.',
      link: 'https://jupyter-ai.readthedocs.io/en/latest/',
      imageUrl: 'assets/imagens/ia/jupyter.jpeg'
    },
    {
      title: 'Adobe Firefly',
      content: 'Integrado ao pacote Adobe, o Firefly pode gerar e editar imagens.',
      link: 'https://www.adobe.com/sensei/generative-ai/firefly.html',
      imageUrl: 'assets/imagens/ia/adobe.jpeg'
    },
    {
      title: 'Canva Magic Design',
      content: 'O Canva Magic Design é uma ferramenta que gera conteúdo de texto e imagem no Canva, uma ferramenta de design gráfico on-line.',
      link: 'https://www.canva.com/magic-design/',
      imageUrl: 'assets/imagens/ia/canva.jpg'
    },
    {
      title: 'DALL-E',
      content: 'Integrado ao ChatGPT, o DALL-E gera imagens a partir de prompts de texto.',
      link: 'https://openai.com/dall-e-3',
      imageUrl: 'assets/imagens/ia/dalle.jpeg'
    },
    {
      title: 'ElevenLabs',
      content: 'O ElevenLabs é uma ferramenta de IA de fala que pode gerar áudio de locução falada a partir de texto em diferentes idiomas.',
      link: 'https://elevenlabs.io/',
      imageUrl: 'assets/imagens/ia/eleven_labs.png'
    },
    {
      title: 'Google Ads',
      content: 'O Google Ads ajuda as empresas a criar e gerenciar campanhas de Publicidade digital. Ele apresenta integração de IA para ajudar a gerar conteúdo de anúncio e aumentar o desempenho. ',
      link: 'https://ads.google.com/home/campaigns/ai-powered-ad-solutions/',
      imageUrl: 'assets/imagens/ia/google_ads.png'
    },
    {
      title: 'Midjourney',
      content: 'Integrado ao Discord, o Midjourney pode gerar imagens a partir de solicitações de texto.',
      link: 'https://www.midjourney.com/home',
      imageUrl: 'assets/imagens/ia/midjourney.png'
    },
    {
      title: 'Runway',
      content: 'A Runway pode gerar um novo vídeo a partir de um prompt de texto ou editar o estilo ou a área de foco de um vídeo existente e remover pessoas ou outros elementos.',
      link: 'https://runwayml.com/',
      imageUrl: 'assets/imagens/ia/runway.jpg'
    }
  ]
}
