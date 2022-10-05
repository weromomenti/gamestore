import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  allGames: Game[];
  inited : boolean = false;

  constructor(private gameService : GamesService) { }

  getAllGames(searchTerm : string = '') {
    this.gameService.getAllGames(searchTerm).subscribe(result => this.allGames = result);
  }
  onDelete(gameId : any){
    this.gameService.deleteGame(gameId).subscribe();
    location.reload();
  }
  ngOnInit(): void {
    this.getAllGames();
  }

}
