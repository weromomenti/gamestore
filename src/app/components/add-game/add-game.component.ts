import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  myForm: FormGroup;
  game: Game = {};

  constructor(private fb: FormBuilder, private gameService: GamesService, private router : Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: '',
      description:'',
      price: '',
      image: ''
    });
  }
  onSubmit() {
    this.game.name = this.myForm.get('title')?.value;
    this.game.description = this.myForm.get('description')?.value;
    this.game.price = this.myForm.get('price')?.value;
    this.game.image = this.myForm.get('image')?.value;
    this.gameService.addGame(this.game).subscribe((result : Game) => this.game = result);
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
