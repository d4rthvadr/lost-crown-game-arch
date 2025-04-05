import { ActionType } from "../../core/action/action.types";
import { PlayerStats } from "../../core/player/player.stats";
import { GameEvent } from "../../game-event.type";

export interface Amulet {
  name: ActionType;
  description: string;
  modifyStatus: (stats: PlayerStats) => PlayerStats;
  onEvent?: (event: GameEvent) => void;
}
