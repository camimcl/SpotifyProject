import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topSongs: any[] = [];
  recommendedArtists: any[] = [];

  showMoreTopSongsCount = 10;   
  showMoreArtistsCount = 10;   
  isSidebarMinimized = false; 

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.loadTopTrendings();
    this.loadRecommendedArtists();
  }

  loadTopTrendings(): void {
    this.spotifyService.getRecentlyPlayed().subscribe(
      (data: any) => {
        this.topSongs = data.items.map((item: { track: any; }) => item.track);  // Ajusta para tracks recentes
      },
      error => console.error('Erro ao buscar músicas recentes:', error)
    );
  }
  loadRecommendedArtists(): void {
    this.spotifyService.getRecommendedArtists().subscribe(
      (data: any) => {
        this.recommendedArtists = data.artists;
      },
      error => console.error('Erro ao buscar os artistas recomendados:', error)
    );
  }

  showMoreTopSongs(): void {
    this.showMoreTopSongsCount += 6;  
  }

  showMoreArtists(): void {
    this.showMoreArtistsCount += 6;  
  }
  toggleSidebar(): void {
    this.isSidebarMinimized = !this.isSidebarMinimized;
  }
}
