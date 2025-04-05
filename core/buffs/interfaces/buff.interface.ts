import { PlayerStats } from "../../player/player.stats";

export interface Buff {
  name: string;
  effect: (stats: PlayerStats) => PlayerStats;
  duration: number; // Duration in seconds
}
