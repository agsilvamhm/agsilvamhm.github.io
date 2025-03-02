import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'https://gnews.io/api/v4/search';
  private apiKey = environment.newsApiKey; // Pegando a chave do environment

  constructor(private http: HttpClient) {}

  getNews(category: string): Observable<any> {
    const url = `${this.baseUrl}?q=${category}&lang=PT-BR&country=us&max=10&apikey=${this.apiKey}`;

    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.get(url, { headers }).pipe(
      map((data: any) => {
        if (data.articles) {
          return data.articles.map((article: any) => ({
            title: article.title,
            description: article.description,
            url: article.url,
            image: article.image || 'https://via.placeholder.com/150',
            source: article.source.name
          }));
        }
        return [];
      })
    );
  }
}
