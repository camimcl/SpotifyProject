import { Component,OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private spotifyService : SpotifyService, private router: Router ){

}

ngOnInit():void{
  const token = this.spotifyService.obterTokenUrlCallback();
  if (token) {
    this.spotifyService.definirAcessToken(token);
    this.router.navigate(['/home']);
  }

}

openLoginPage(){
  window.location.href = this.spotifyService.obterUrlLogin();
}

}
