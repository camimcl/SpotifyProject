import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError,throwError } from 'rxjs';
import { TSearchResults } from '../types/main-containers-types';
import { SpotifyConfiguration } from '../enviroments/environments';
import SpotifyWebApi from 'spotify-web-api-js';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  spotifyApi : SpotifyWebApi.SpotifyWebApiJs = null; //outra api 

  private apiUrl = "https://api.spotify.com/v1";
  private accessToken: string | null;

  constructor(private http: HttpClient) {
    this.carregarToken();
    this.spotifyApi = new SpotifyWebApi();
  }
  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
  }
  private carregarToken(): void {
    this.accessToken = localStorage.getItem('accessToken');
  }

  definirAcessToken(token:string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token',token);
    this.accessToken = token;
    localStorage.setItem('accessToken',this.accessToken);
  }
  temTokenValido(): boolean {
    return !!this.accessToken;
  }
 obterInformacoesUsuario(): Promise<any> {
  return this.spotifyApi.getMe();
}
  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }
  obterTokenUrlCallback():string | null{
    const hash = window.location.hash.substring(1); 
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');
    
    window.history.pushState("", document.title, window.location.pathname);
    
    return token;
  }

  getTopArtists(): Observable<any> {
    const url = `${this.apiUrl}/me/top/artists?limit=12`; 
    return this.http.get(url, { headers: this.getAuthHeaders() });
  }

  getTopTrendings(): Observable<any> {
    const url = `${this.apiUrl}/playlists/37i9dQZEVXbMDoHDwVN2tF`; 
    return this.http.get(url, { headers: this.getAuthHeaders() });
  }

  getRecommendedArtists(): Observable<any> {
    const url = `${this.apiUrl}/artists?ids=06HL4z0CvFAxyc27GXpf02,1uNFoZAHBGtllmzznpCI3s,3TVXtAsR1Inumwj472S9r4`; 
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
    const url = `${this.apiUrl}/me/player/recently-played?limit=12`;
    return this.http.get(url, { headers: this.getAuthHeaders() });
  }

}
