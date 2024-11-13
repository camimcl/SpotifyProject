import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrl: './painel-esquerdo.component.css'
})
export class PainelEsquerdoComponent {
  isOpen = true;

  playlists = [
    { name: 'Músicas Curtidas', owner: 'Usuário', image: 'https://via.placeholder.com/50' },
    { name: 'Playlist 1', owner: 'Usuário', image: 'https://via.placeholder.com/50' },
    { name: 'Playlist 2', owner: 'Usuário', image: 'https://via.placeholder.com/50' },
    // Adicione mais playlists conforme necessário
  ];

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}