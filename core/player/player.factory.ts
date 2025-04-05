import { Player } from "./player";
import { PlayerStats } from "./player.stats";

const basePlayerStats: PlayerStats = {
  jumpHeight: 10,
  dashDistance: 5,
  attackDamage: 20,
  health: 100,
  mana: 50,
  level: 1,
  stamina: 20,
};

export class PlayerFactory {
  static createPlayer(playerClass: string): Player {
    switch (playerClass) {
      case "Player":
        return new Player(basePlayerStats);
      default:
        throw new Error("Invalid player class");
    }
  }
}
