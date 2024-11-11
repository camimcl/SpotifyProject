import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists: any[] = [];
  userId: number = 1; // Exemplo: pegue o ID do usuário autenticado de um serviço de autenticação

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getPlaylists();
  }

  getPlaylists() {
    this.playlistService.getUserPlaylists(this.userId).subscribe(
      response => {
        this.playlists = response;
      },
      error => {
        console.error('Erro ao obter playlists', error);
      }
    );
  }
}
