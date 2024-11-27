import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { TSearchResults } from '../../types/main-containers-types';

@Component({
  selector: 'app-main-containers',
  templateUrl: './main-containers.component.html',
  styleUrls: ['./main-containers.component.css']
})
export class MainContainersComponent implements OnInit {
  searchQuery: string = '';
  searchResults: TSearchResults | undefined = undefined;
  userPlaylists: any[] = [];
  randomSongs: any[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    // Observa as mudanças na `searchQuery`
    this.sharedDataService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
    });

    // Observa as mudanças em `searchResults`
    this.sharedDataService.searchResults$.subscribe((results: any) => {
      this.searchResults = results;
      console.log(results);
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
  selectSong(song: any) {
    this.sharedDataService.setCurrentSong(song);
  }
}
