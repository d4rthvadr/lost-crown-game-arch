import { PlayerStats } from "../player/player.stats";
import { Buff } from "./interfaces/buff.interface";

export class LightWeightBuff implements Buff {
  name: string = "Light Weight";
  duration: number = 10; // Duration in seconds

  constructor() {}

  effect(stats: PlayerStats): PlayerStats {
    return {
      ...stats,
      jumpHeight: stats.jumpHeight * 1.2,
      dashDistance: stats.dashDistance * 1.2,
    };
  }
}
