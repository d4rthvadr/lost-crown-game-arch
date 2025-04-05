import { PlayerStats } from "../../player/player.stats";

export interface Debuff {
  name: string;
  effect: (stats: PlayerStats) => PlayerStats;
  duration: number; // Duration in seconds
}
