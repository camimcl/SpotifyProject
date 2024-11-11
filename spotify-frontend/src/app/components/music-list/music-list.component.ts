import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.css'
})
export class MusicListComponent implements OnInit {
  musicList: any[] = [];

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.songService.getTopTracks().subscribe(
      (response) => {
        this.musicList = response.data;
      },
      (error) => {
        console.error('Erro ao carregar as músicas', error);
      }
    );
  }
}