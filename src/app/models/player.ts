import { Position } from '../enums/position.enum';

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  position: Position;
  currentClub: string;
  dateOfBirth: string;
  height: string;
  nationality: string;
}
