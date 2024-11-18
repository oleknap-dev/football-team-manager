import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { PLAYERS } from '../players-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  players = PLAYERS;
  getPlayers(): Observable<Player[]> {
    return of(this.players);
  }
}
