import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {
  private deezerApiUrl = '/deezer-api/search';

  constructor(private http: HttpClient) {}

  searchSongs(query: string): Observable<any> {
    return this.http.get<any>(`${this.deezerApiUrl}?q=${query}`);
  }
}
