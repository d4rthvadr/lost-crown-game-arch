import { ActionType } from "../../core/action/action.types";
import { PlayerStats } from "../../core/player";
import { Plugin } from "../plugin.interface";
const BerserkerPlugin: Plugin = {
  name: "Berserker",
  onBeforeAction: (action, stats): PlayerStats => {
    if (action.name === ActionType.HEAVY_ATTACK) {
      stats = {
        ...stats,
        attackDamage: stats.attackDamage * 2, // Double the attack damage
      };
    }
    return stats;
  },
};

export { BerserkerPlugin };
