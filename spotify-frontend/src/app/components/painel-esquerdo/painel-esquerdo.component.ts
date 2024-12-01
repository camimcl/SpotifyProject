import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.css']
})
export class PainelEsquerdoComponent implements OnInit {
  isOpen = false;
  playlists: any[] = [];  

  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit() {
    this.spotifyService.getUserPlaylists().subscribe(
      (data) => {
        this.playlists = data.items
          .filter((playlist: any) => playlist !== null) 
          .map((playlist: any) => ({
            id: playlist.id, 
            name: playlist.name || 'Sem Nome', 
            owner: playlist.owner?.display_name || 'Desconhecido', 
            image: playlist.images?.length > 0 ? playlist.images[0].url : 'https://via.placeholder.com/50'
          }));
      },
      (error) => {
        console.error('Erro ao buscar playlists:', error);
      }
    );
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}