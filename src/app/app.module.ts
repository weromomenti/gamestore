import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SinginComponent } from './components/singin/singin.component';
import { CommunityComponent } from './components/community/community.component';
import { SupportComponent } from './components/support/support.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeModule } from './components/home/home.module';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { UserService } from './services/user.service';

import { ReactiveFormsModule } from '@angular/forms';
import { AddGameComponent } from './components/add-game/add-game.component';

@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    CommunityComponent,
    SupportComponent,
    NavbarComponent,
    AddGameComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [
    AppComponent,
    NavbarComponent
  ]
})
export class AppModule { }
