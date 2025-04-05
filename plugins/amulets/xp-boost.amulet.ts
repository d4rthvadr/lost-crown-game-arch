import { ActionType } from "../../core/action";
import { PlayerStats } from "../../core/player/player.stats";
import { GameEvent } from "../../game-event.type";
import { Amulet } from "./amulet.interface";

export class XPBoostAmulet implements Amulet {
  name: ActionType.XP_BOOST = ActionType.XP_BOOST;
  description: string = "Allows the player to perform a double jump.";

  constructor() {}

  modifyStatus(stats: PlayerStats): PlayerStats {
    return {
      ...stats,
      jumpHeight: stats.jumpHeight * 2.6,
    };
  }

  onEvent(event: GameEvent): void {
    if (event.type === "PLAYER_LEVEL_UP") {
      console.log(`XP Boost applied! New XP: ${event}`);
    }
  }
}
