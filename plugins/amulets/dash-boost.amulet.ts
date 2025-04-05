import { ActionType } from "../../core/action/action.types";
import { PlayerStats } from "../../core/player/player.stats";
import { Amulet } from "./amulet.interface";

export class DashBoostAmulet implements Amulet {
  name: ActionType.DASH_BOOST = ActionType.DASH_BOOST;
  description: string = "Allows the player to perform a double jump.";

  constructor() {}

  modifyStatus(stats: PlayerStats): PlayerStats {
    return {
      ...stats,
      jumpHeight: stats.jumpHeight * 2.6,
    };
  }
}
