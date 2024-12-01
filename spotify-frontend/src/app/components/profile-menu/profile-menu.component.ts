import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {
  user: any; 
  isMenuOpen: boolean = false;

  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken'); 
    if (token) {
      this.spotifyService.definirAcessToken(token); 
      this.spotifyService.obterInformacoesUsuario().then(userInfo => {
        this.user = userInfo; 
      }).catch(err => {
        console.error('Erro ao obter informações do usuário:', err);
        this.router.navigate(['/login']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    localStorage.removeItem('accessToken'); 
    this.router.navigate(['/login']); 
  }
}
