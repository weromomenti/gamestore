import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from '../games/components/games.component';


@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { 
  constructor() { }
 }
