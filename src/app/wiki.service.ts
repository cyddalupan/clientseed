import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private wikiUrl = 'http://localhost/apiseed/public/api/wiki';

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.wikiUrl);
  }

  insert() {
    const wiki = {
      "title": "angular title",
      "tags": "angular tag",
      "created_by": 5
    };

    return this.http.post(this.wikiUrl, wiki, this.httpOptions);
  }
}
