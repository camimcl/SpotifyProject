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
import { DurationPipeTsPipe } from './duration.pipe.ts.pipe'; 
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainersComponent,
    PainelEsquerdoComponent,
    MusicPlayerComponent,
    HomeComponent,
    DurationPipeTsPipe,
  ],
  exports: [DurationPipeTsPipe],
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
