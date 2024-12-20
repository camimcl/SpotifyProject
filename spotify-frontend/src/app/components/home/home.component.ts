import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topArtists: any[] = []; 
  recentlyPlayedSongs: any[] = [];
  displayedRecentlyPlayedSongs: any[] = [];
  displayedTopArtists: any[] = []; 

  showMoreArtistsCount = 6;   
  showMoreRecentlyPlayedCount = 6;

  isExpanded = false;
  isArtistExpanded = false; 

  isSidebarMinimized = false;

  constructor(private spotifyService: SpotifyService,private router : Router) {}

  ngOnInit(): void {
   if(!this.spotifyService.temTokenValido()){
    this.router.navigate(['/login'])
   }
   else{
     this.loadRecentlyPlayed();
     this.loadTopArtists(); 
   }
  }

  loadRecentlyPlayed(): void {
    this.spotifyService.getRecentlyPlayed().subscribe(
      (data: any) => {
        const uniqueTracks = new Map();  
        data.items.forEach((item: { track: any }) => {
          uniqueTracks.set(item.track.id, item.track);  
        });
        this.recentlyPlayedSongs = Array.from(uniqueTracks.values());  
        this.updateDisplayedRecentlyPlayedSongs();
      },
      (error) => console.error('Erro ao buscar músicas recentemente tocadas:', error)
    );
  }

  loadTopArtists(): void {
    this.spotifyService.getTopArtists().subscribe(
      (data: any) => {
        this.topArtists = data.items; // Armazena os artistas mais escutados
        this.updateDisplayedTopArtists();
      },
      error => console.error('Erro ao buscar artistas mais escutados:', error)
    );
  }

  updateDisplayedTopArtists(): void {
    if (this.isArtistExpanded) {
      this.displayedTopArtists = this.topArtists;
    } else {
      this.displayedTopArtists = this.topArtists.slice(0, this.showMoreArtistsCount);
    }
  }

  toggleSidebar(): void {
    this.isSidebarMinimized = !this.isSidebarMinimized;
  }

  toggleDisplayMoreArtists(): void {
    this.isArtistExpanded = !this.isArtistExpanded;
    this.updateDisplayedTopArtists();
  }

  toggleDisplayMoreSongs(): void {
    this.isExpanded = !this.isExpanded;
    this.updateDisplayedRecentlyPlayedSongs();
  }

  updateDisplayedRecentlyPlayedSongs(): void {
    if (this.isExpanded) {
      this.displayedRecentlyPlayedSongs = this.recentlyPlayedSongs;
    } else {
      this.displayedRecentlyPlayedSongs = this.recentlyPlayedSongs.slice(0, this.showMoreRecentlyPlayedCount);
    }
  }
}
