import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainersComponent } from './components/main-containers/main-containers.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para home por padrão
  { path: 'home', component: HomeComponent },
  { path: 'search', component: MainContainersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
