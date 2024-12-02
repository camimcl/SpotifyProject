import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { TSearchResults } from '../../types/main-containers-types';

@Component({
  selector: 'app-main-containers',
  templateUrl: './main-containers.component.html',
  styleUrls: ['./main-containers.component.css']
})
export class MainContainersComponent implements OnInit {
  searchQuery: string = '';
  searchResults: TSearchResults | undefined = undefined;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    // Observa as mudanças na `searchQuery`
    this.sharedDataService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
    });

    // Observa as mudanças em `searchResults`
    this.sharedDataService.searchResults$.subscribe((results: any) => {
      this.searchResults = results;
      console.log(results);
    });

  }

  selectSong(song: any) {
    this.sharedDataService.setCurrentSong(song);
  }
}
