import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SinginComponent } from './singin/singin.component';
import { CommunityComponent } from './community/community.component';
import { SupportComponent } from './support/support.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameComponent } from './games/components/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SinginComponent,
    CommunityComponent,
    SupportComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavbarComponent,
    GameComponent
  ]
})
export class AppModule { }
