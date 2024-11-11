import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrl: './painel-esquerdo.component.css'
})
export class PainelEsquerdoComponent {
  isHidden = false; 
  userPlaylists = [
    { name: 'Playlist 1' },
    { name: 'Playlist 2' },
    { name: 'Playlist 3' },
    { name: 'Playlist 4' },
    { name: 'Playlist 5' }
  ];
  toggleSidebar() {
    this.isHidden = !this.isHidden;
  }
}
