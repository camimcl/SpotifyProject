import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Caso de sucesso, redireciona para a tela principal
        this.router.navigate(['/music-list']);
      },
      (error) => {
        this.errorMessage = 'Usuário ou senha inválidos!';
      }
    );
  }
}
