import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any[] = [];
  category: string = 'tecnologia'; // Padrão

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getNews(this.category).subscribe(data => {
      this.news = data;
    });
  }

  changeCategory(newCategory: string): void {
    this.category = newCategory;
    this.loadNews();
  }
}
