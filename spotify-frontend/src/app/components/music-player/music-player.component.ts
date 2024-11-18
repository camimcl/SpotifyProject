// music-player.component.ts
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  currentSong: any;
  audio: HTMLAudioElement | undefined;  // Inicializa como undefined
  isPlaying = false;
  currentTime: number = 0;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    // Verifica se o código está sendo executado no navegador antes de criar o objeto Audio
    if (typeof window !== 'undefined') {
      this.audio = new Audio();  // Inicializa o objeto Audio apenas no navegador
      this.audio.addEventListener('timeupdate', () => {
        this.currentTime = this.audio ? this.audio.currentTime : 0;
      });
    }

    // Assina para receber a música selecionada
    this.sharedDataService.selectedSong$.subscribe(song => {
      this.currentSong = song;
      if (this.currentSong) {
        this.playSong();
      }
    });
  }

  playSong() {
    if (this.audio && this.currentSong && this.currentSong.preview) {
      this.audio.src = this.currentSong.preview;
      this.audio.play();
      this.isPlaying = true;
    }
  }

  togglePlayPause() {
    if (this.audio) {
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }

  seekTo(event: any) {
    if (this.audio) {
      this.audio.currentTime = event.target.value;
    }
  }

  changeVolume(event: any) {
    if (this.audio) {
      this.audio.volume = event.target.value / 100;
    }
  }
}
