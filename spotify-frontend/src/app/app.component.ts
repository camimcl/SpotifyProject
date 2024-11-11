import { Component, OnInit } from '@angular/core';
import { SongService } from './services/song.service';
import { DeezerService } from './services/deezer.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'spotify-clone';
  searchQuery: string = '';
  searchResults: any[] = [];
  userPlaylists: any[] = [];
  randomSongs: any[] = [];

  constructor(
    private songService: SongService,
    private deezerService: DeezerService // Para consumo da API Deezer
  ) {}

  ngOnInit(): void {
    // Chama o método para buscar playlists do usuário
    this.loadUserPlaylists();
    // Chama o método para buscar músicas aleatórias
    this.loadRandomSongs();
  }

  loadUserPlaylists() {
    // Simulação de playlists, substitua pela chamada da API do usuário
    this.userPlaylists = [
      { name: 'Minha Playlist 1', image: 'https://via.placeholder.com/200' },
      { name: 'Minha Playlist 2', image: 'https://via.placeholder.com/200' }
    ];
  }

  loadRandomSongs() {
    // Exemplo de músicas aleatórias, substitua pela chamada de um serviço ou API de músicas aleatórias
    this.randomSongs = [
      { title: 'Música 1', artist: { name: 'Artista 1' }, album: { cover: 'https://via.placeholder.com/200' } },
      { title: 'Música 2', artist: { name: 'Artista 2' }, album: { cover: 'https://via.placeholder.com/200' } }
    ];
  }

  searchSongs() {
    if (this.searchQuery.trim()) {
      this.deezerService.searchSongs(this.searchQuery).subscribe(response => {
        this.searchResults = response.data; // Ajuste conforme a resposta da API do Deezer
      });
    }
  }
}