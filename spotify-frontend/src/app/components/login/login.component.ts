import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      response => {
        console.log('Login bem-sucedido', response);
      },
      error => {
        console.error('Erro no login', error);
      }
    );
  }
}
