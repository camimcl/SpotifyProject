import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'http://localhost:8080/api/playlists';

  constructor(private http: HttpClient) { }

  createPlaylist(userId: number, name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${userId}`, { name });
  }

  getUserPlaylists(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }
}