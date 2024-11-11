import { Component } from '@angular/core';
import { DeezerService } from '../../services/deezer.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  searchQuery: string = '';

  constructor(
    private deezerService: DeezerService,
    private sharedDataService: SharedDataService // Serviço compartilhado
  ) {}

  searchSongs() {
    if (this.searchQuery.trim()) {
      this.sharedDataService.setSearchQuery(this.searchQuery); // Atualiza o query no serviço
      this.deezerService.searchSongs(this.searchQuery).subscribe(response => {
        this.sharedDataService.setSearchResults(response.data); // Atualiza os resultados no serviço
      });
    }
  }
}
