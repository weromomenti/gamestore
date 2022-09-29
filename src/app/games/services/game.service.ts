import { Game } from "../models/game.model";
import{ HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable()
export class GameService {

    constructor (private http:HttpClient) {}

    readonly baseUrl = 'https://localhost:7222/api/games';

    getAllGames() {
        //return this.http.get<Game[]>(this.baseUrl).pipe(map(response => {
            //return response;
          //}));
    }
}
