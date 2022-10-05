import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm : string;
  
  constructor(private gamesComp : GamesComponent) { }

  ngOnInit(): void {
  }
  onSearch(searchTerm : any) {
    this.gamesComp.getAllGames();
  }
}
