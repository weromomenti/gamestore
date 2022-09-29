import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/components/games.component';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { 
  constructor() { }
 }
