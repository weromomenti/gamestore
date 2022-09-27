import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  allGames: Game[] = [];

  constructor(private gameService : GameService) { }

  getAllGames() {
    return this.gameService.getAllGames().subscribe((games) => {
      console.log(games);
    });
  }

  ngOnInit(): void {
    this.getAllGames();
  }

}
