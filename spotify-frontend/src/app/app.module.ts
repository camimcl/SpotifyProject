import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MainContainersComponent } from './components/main-containers/main-containers.component';
import { PainelEsquerdoComponent } from './components/painel-esquerdo/painel-esquerdo.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarToggleDirective } from './directives/sidebar-toggle.directive';
import { LoginComponent } from './components/login/login.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { FormatDurationPipe } from './format-duration.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainersComponent,
    PainelEsquerdoComponent,
    MusicPlayerComponent,
    HomeComponent,
    SidebarToggleDirective,
    LoginComponent,
    ProfileMenuComponent,
    PlaylistDetailsComponent,
    FormatDurationPipe,
    ClickOutsideDirective,
  ],
  exports: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
