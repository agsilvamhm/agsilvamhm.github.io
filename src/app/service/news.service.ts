import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'https://newsapi.org/v2/everything';
  private apiKey = 'f6fcb1f8e29d40b888e44c0cc2994745';  // Insira sua chave da NewsAPI

  constructor(private http: HttpClient) {}

  getNews(category: string): Observable<any> {
    const url = `${this.baseUrl}?q=${category}&apiKey=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((data: any) => {
        data.articles.forEach((article: any) => {
          article.image = article.urlToImage || 'https://via.placeholder.com/150';
        });
        return data.articles;
      })
    );
  }
}

