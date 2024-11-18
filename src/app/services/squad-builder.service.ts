import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SquadBuilderService {
  readonly playerSelected: BehaviorSubject<Player | null> =
    new BehaviorSubject<Player | null>(null);
  readonly squadCleared: BehaviorSubject<null> =
    new BehaviorSubject<null>(null);

  get selectedPlayer(): Observable<Player | null> {
    return this.playerSelected.asObservable();
  }

  selectPlayer(newValue: Player | null) {
    this.playerSelected.next(newValue);
  }

  clearSquad() {
    this.squadCleared.next(null);
  }
}
