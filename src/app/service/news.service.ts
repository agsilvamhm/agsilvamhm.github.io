import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';

  constructor(private http: HttpClient) {}

  getNews(category: string): Observable<any> {
    const rssUrl = `${this.baseUrl}https://news.google.com/rss/search?q=${category}&hl=pt-BR&gl=BR&ceid=BR:pt-PT`;
    return this.http.get(rssUrl).pipe(
      map((data: any) => {
        data.items.forEach((item: any) => {
          const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
          item.image = imgMatch ? imgMatch[1] : 'https://via.placeholder.com/150';
        });
        return data.items;
      })
    );
  }
}
