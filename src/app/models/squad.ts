import { Player } from './player';
import { Position } from '../enums/position.enum';

export interface Squad {
  goalkeeper: Player[];
  defenders: Player[];
  midfielders: Player[];
  strikers: Player[];
}

export interface PositionLimit {
  type: Position;
  limit: number;
}

export const positionLimits: PositionLimit[] = [
  {
    type: Position.Goalkeeper,
    limit: 1,
  },
  {
    type: Position.Defender,
    limit: 4,
  },
  {
    type: Position.Midfielder,
    limit: 4,
  },
  {
    type: Position.Striker,
    limit: 2,
  },
];
