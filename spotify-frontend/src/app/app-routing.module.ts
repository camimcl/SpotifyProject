import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainersComponent } from './components/main-containers/main-containers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'playlist/:id', component: PlaylistDetailsComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: MainContainersComponent },
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
