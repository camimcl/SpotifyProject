import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError,throwError } from 'rxjs';
import { TSearchResults } from '../types/main-containers-types';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private apiUrl = "https://api.spotify.com/v1";
  //todo:automatizaçao do token 
  //verificacao se está expirado
  //pedir um novo 
  private accessToken =
  "BQDM5avO8GkcNUO5gutzDYl98ZaXQvh-D165gNs1j4jqoYQYEyRF1yU4526YOLjUWfy6zIU8eSv4svWMlM2YiZvTmKr0-d7Kw-cioW-NS4VdQbDvDeLm3LY4fZB6xZ1g79GadgB9orN-wIkDI1K4sLuJfBnbHrQw0nSDt9e248vKGIQ2iw3XqV249bhXEfHoIHbi2C3ynm8ZMvYoKLMxouRtafw"

  constructor(private http: HttpClient) {
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
  }

  getTopTrendings(): Observable<any> {
    const url = `${this.apiUrl}/playlists/37i9dQZEVXbMDoHDwVN2tF`; // ID da playlist global
    return this.http.get(url, { headers: this.getAuthHeaders() });
  }

  // Obter artistas recomendados (exemplo com artistas populares)
  getRecommendedArtists(): Observable<any> {
    const url = `${this.apiUrl}/artists?ids=06HL4z0CvFAxyc27GXpf02,1uNFoZAHBGtllmzznpCI3s,3TVXtAsR1Inumwj472S9r4`; // IDs de artistas
    return this.http.get(url, { headers: this.getAuthHeaders() });
  }
  
  getArtist(artistId: string): Observable<any> {
    const url = `${this.apiUrl}/artists/${artistId}`;
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get(url, { headers });
  }

  getSongDetails(songId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/track/${songId}`).pipe(
      catchError(error => {
        console.error('Erro ao buscar detalhes da música:', error);
        return throwError(() => new Error('Erro na requisição'));
      })
    );
  }
  searchSongs(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${encodeURIComponent(query)}&type=track`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get(url, { headers });
  }
  getUserPlaylists(): Observable<TSearchResults> {
    const url = `${this.apiUrl}/me/playlists`;
    return this.http.get<TSearchResults>(url, { headers: this.getAuthHeaders() }).pipe(
      catchError((error) => {
        console.error('Erro ao buscar playlists do usuário:', error);
        return throwError(() => new Error('Erro ao buscar playlists'));
      })
    );
  }
  getRecentlyPlayed(): Observable<any> {
    const url = `${this.apiUrl}/me/player/recently-played`;
    return this.http.get(url, { headers: this.getAuthHeaders() });
  }
  

}
