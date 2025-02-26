import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private rssUrl =
    'https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=tecnologia&hl=pt-BR&gl=BR&ceid=BR:pt-PT';   ;

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.rssUrl).pipe(
      map((data: any) => {
        // Processar cada notícia para extrair a imagem
        data.items.forEach((item: any) => {
          const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
          item.image = imgMatch ? imgMatch[1] : 'https://via.placeholder.com/150'; // Se não houver imagem, usa um placeholder
        });
        return data.items;
      })
    );
  }
}