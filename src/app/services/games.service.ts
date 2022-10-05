import { Game } from "../models/game.model";
import{ HttpClient, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable()
export class GamesService {

    constructor (private http:HttpClient) {}

    readonly baseUrl = 'https://localhost:7222/api/games';

    getAllGames(title : string = "", searchGenres : string[] = []) : Observable<Game[]> {
        let urlExtension : String;
        return this.http.get<Game[]>(this.baseUrl, {
            params: {
                title,
                searchGenres
            }
        });
    }
    getGameByIdWithDetails(gameId : number) : Observable<Game> {
        return this.http.get<Game>(`${this.baseUrl}/${gameId}`);
    }
    addGame(game : Game) {
        return this.http.post<Game>(`${this.baseUrl}`, game);
    }
    deleteGame(gameId : any) {
        return this.http.delete<Game>(`${this.baseUrl}/${gameId}`);
    }
}
