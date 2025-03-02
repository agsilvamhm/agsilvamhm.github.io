import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'https://newsapi.org/v2/everything';
  private apiKey = environment.newsApiKey;

  constructor(private http: HttpClient) {}

  getNews(category: string): Observable<any> {
    const url = `${this.baseUrl}?q=${category}&apiKey=${this.apiKey}`;

    // Configuração dos cabeçalhos
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Referer': 'http://localhost:4200' // Finge que a requisição vem do localhost
    });
    

    // Faz a requisição com os cabeçalhos
    return this.http.get(url, { headers }).pipe(
      map((data: any) => {
        data.articles.forEach((article: any) => {
          article.image = article.urlToImage || 'https://via.placeholder.com/150';
        });
        return data.articles;
      })
    );
  }
}
