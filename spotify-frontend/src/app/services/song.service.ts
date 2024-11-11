import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:8080/api/songs';
  private deezerApiUrl = '/deezer-api/search';  // Base URL da API Deezer

  constructor(private http: HttpClient) {}

  addSong(song: any): Observable<any> {
    return this.http.post(this.apiUrl, song);
  }
  searchSongs(query: string): Observable<any> {
    return this.http.get(`${this.deezerApiUrl}?q=${query}`);
  }
  // Método para pegar as top tracks (músicas mais populares)
  getTopTracks(): Observable<any> {
    return this.http.get<any>(`${this.deezerApiUrl}chart`);
  }
}
