import { Component,OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { SharedDataService } from '../../services/shared-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  searchQuery: string = '';

  constructor(
    private spotifyService: SpotifyService,
    private sharedDataService: SharedDataService,
    private router : Router 
  ) {}

  ngOnInit(){
    
  }
  searchSongs() {
    if (this.searchQuery.trim()) {
      this.sharedDataService.setSearchQuery(this.searchQuery); // Atualiza o query no serviço
      this.spotifyService.searchSongs(this.searchQuery).subscribe(response => {
        console.log(response);
        this.sharedDataService.setSearchResults(response.tracks); // Atualiza os resultados no serviço
      });
    }
  }
  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.sharedDataService.setSearchQuery(this.searchQuery);  // Atualiza o serviço compartilhado
      this.router.navigate(['/search']);  // Redireciona para a página de pesquisa
    }
  }
  goHome() {
    this.router.navigate(['/home']); 
  }
  
}
