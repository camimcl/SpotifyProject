import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  currentSong: any = null;
  audio: HTMLAudioElement | null = null; 
  isPlaying = false;
  currentTime = 0;
  duration = 0;
  volume = 1;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.currentSong$.subscribe(song => {
      this.currentSong = song;  
    });
  }


}
