import { ActionType } from "../../core/action/action.types";
import { PlayerStats } from "../../core/player/player.stats";
import { Amulet } from "./amulet.interface";

export class DoubleJumpAmulet implements Amulet {
  name: ActionType.DOUBLE_JUMP = ActionType.DOUBLE_JUMP;
  description: string = "Allows the player to perform a double jump.";

  constructor() {}

  modifyStatus(stats: PlayerStats): PlayerStats {
    return {
      ...stats,
      jumpHeight: stats.jumpHeight + 1, // Increase jump height by 1
    };
  }
}
