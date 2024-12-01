import { Component, OnInit,OnDestroy  } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';// Certifique-se de importar corretamente
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit,OnDestroy {
  playlist: any = null;  
  tracks: any[] = [];   
  playlistId: string | null = null;
  routeSub: Subscription;
  
  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.playlistId = params.get('id');
      
      if (!this.playlistId) {
        this.router.navigate(['/home']); 
        return;
      }
      if (!this.spotifyService.temTokenValido()) {
        this.router.navigate(['/login']);
        return;
      }
      
      this.loadPlaylistDetails(this.playlistId);
    });
  }
  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  async loadPlaylistDetails(playlistId: string) {
    try {
      const playlistData = await this.spotifyService.spotifyApi.getPlaylist(playlistId);
      this.playlist = playlistData;
      this.tracks = playlistData.tracks.items;
   
      localStorage.setItem(`playlist_${playlistId}`, JSON.stringify({
        playlist: this.playlist,
        tracks: this.tracks
      }));
    } catch (error) {
      console.error('Erro ao carregar detalhes da playlist:', error);
    }
  }
}
