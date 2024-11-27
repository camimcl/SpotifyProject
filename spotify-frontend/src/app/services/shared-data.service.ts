import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private searchQuerySource = new BehaviorSubject<string>('');
  private searchResultsSource = new BehaviorSubject<any[]>([]);
  private currentSongSource = new BehaviorSubject<any>(null);

  searchQuery$ = this.searchQuerySource.asObservable();
  searchResults$ = this.searchResultsSource.asObservable();
  currentSong$ = this.currentSongSource.asObservable();

  setSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }

  setSearchResults(results: any[]) {
    this.searchResultsSource.next(results);
  }

  setCurrentSong(song: any) {
    this.currentSongSource.next(song);
  }
}
