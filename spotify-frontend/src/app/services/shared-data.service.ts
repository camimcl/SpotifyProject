import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private searchQuerySource = new BehaviorSubject<string>('');
  private searchResultsSource = new BehaviorSubject<any[]>([]);

  searchQuery$ = this.searchQuerySource.asObservable();
  searchResults$ = this.searchResultsSource.asObservable();

  setSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }

  setSearchResults(results: any[]) {
    this.searchResultsSource.next(results);
  }
}
