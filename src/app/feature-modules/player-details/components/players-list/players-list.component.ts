import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../../../../services/player.service';
import { Player } from '../../../../models/player';
import { SquadBuilderService } from '../../../../services/squad-builder.service';
import { Position } from '../../../../enums/position.enum';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss',
})
export class PlayersListComponent implements OnInit {
  @Input() affectsSquad = false;
  @Input() showInfo = false;
  players: Player[] = [];
  filteredPlayers: Player[] = [];
  selectedPlayer: Player | undefined;
  selectedPosition: Position | null = null;
  positionOptions: { label: string; value: Position }[] = [
    {
      label: Position.Goalkeeper,
      value: Position.Goalkeeper,
    },
    {
      label: Position.Defender,
      value: Position.Defender,
    },
    {
      label: Position.Striker,
      value: Position.Striker,
    },
    {
      label: Position.Midfielder,
      value: Position.Midfielder,
    },
  ];
  constructor(
    private readonly playerService: PlayerService,
    private readonly squadBuilderService: SquadBuilderService
  ) {}

  ngOnInit() {
    this.getPlayers();
    if (this.affectsSquad) {
      this.squadBuilderService.selectedPlayer.subscribe(
        (player: Player | null) => {
          if (player) {
            this.players = this.players.filter(
              footballPlayer => footballPlayer.id !== player.id
            );
              this.filteredPlayers = this.selectedPosition ? this.players.filter(
                footballPlayer => footballPlayer.position === this.selectedPosition
              ) : this.players;
            }
        }
      );
    }
      this.squadBuilderService.squadCleared.subscribe(
        () => {
          this.getPlayers();
        }
      );
  }

  selectPlayer(player: Player) {
    if (this.affectsSquad) {
      this.squadBuilderService.selectPlayer(player);
    }
    this.selectedPlayer = player;
  }

  private getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
      this.filteredPlayers = this.selectedPosition ? this.players.filter(player => player.position === this.selectedPosition) : this.players;
    });
  }

  filterPlayers(position: Position) {
    this.selectedPosition = position;
    this.filteredPlayers = this.players.filter(
      player => player.position === position
    );
  }
}
