import { Game } from "../models/game.model";
import{ HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class GameService {

    allGames: Game[] = [];

    constructor (private http:HttpClient) {}

    readonly baseUrl = 'https://localhost:7222/api/games';

    getAllGames() {
        return this.http.get(this.baseUrl);
    }
}
