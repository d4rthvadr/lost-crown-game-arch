import { Action } from "../core/action/action.context";
import { PlayerStats } from "../core/player/player.stats";
import { GameEvent } from "../game-event.type";

export interface Plugin {
  name: string;

  // Called before the action is executed
  // This is where you can modify the action or player stats
  // For example, you can add buffs or debuffs to the player stats
  // or modify the action itself
  onBeforeAction?: (action: Action, stats: PlayerStats) => PlayerStats;
  // Called after the action is executed
  // This is where you can modify the player stats
  // For example, you can remove buffs or debuffs from the player stats
  onAfterAction?: (action: Action, stats: PlayerStats) => void;

  // Called when the player performs an action
  // For example, enemy killed, player died, etc
  onEvent?: (event: GameEvent, Action: PlayerStats) => void;
}
