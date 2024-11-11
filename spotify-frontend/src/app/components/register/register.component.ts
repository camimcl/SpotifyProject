import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService) { }

  register() {
    const newUser = { username: this.username, password: this.password, email: this.email };
    this.authService.register(newUser).subscribe(
      response => {
        console.log('Usuário registrado com sucesso', response);
      },
      error => {
        console.error('Erro no registro', error);
      }
    );
  }
}
