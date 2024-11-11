import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-main-containers',
  templateUrl: './main-containers.component.html',
  styleUrls: ['./main-containers.component.css']
})
export class MainContainersComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];
  userPlaylists: any[] = [];
  randomSongs: any[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    // Observa as mudanças na `searchQuery`
    this.sharedDataService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
    });

    // Observa as mudanças em `searchResults`
    this.sharedDataService.searchResults$.subscribe(results => {
      this.searchResults = results;
    });

    // Carregar playlists e músicas aleatórias
    this.loadUserPlaylists();
    this.loadRandomSongs();
  }

  loadUserPlaylists() {
    this.userPlaylists = [
      { name: 'Minha Playlist 1', image: 'https://via.placeholder.com/200' },
      { name: 'Minha Playlist 2', image: 'https://via.placeholder.com/200' }
    ];
  }

  loadRandomSongs() {
    this.randomSongs = [
      { title: 'Música 1', artist: { name: 'Artista 1' }, album: { cover: 'https://via.placeholder.com/200' } },
      { title: 'Música 2', artist: { name: 'Artista 2' }, album: { cover: 'https://via.placeholder.com/200' } }
    ];
  }
}
