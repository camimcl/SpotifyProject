import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.css']
})
export class PainelEsquerdoComponent implements OnInit {
  isOpen = true;
  playlists: any[] = [];  

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.getUserPlaylists().subscribe(
      (data) => {
        
        this.playlists = data.items.map((playlist: any) => ({
          name: playlist.name,
          owner: playlist.owner.display_name,
          image: playlist.images.length > 0 ? playlist.images[0].url : 'https://via.placeholder.com/50'
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