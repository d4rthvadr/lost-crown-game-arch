import { Buff } from "../buffs/interfaces/buff.interface";
import { Debuff } from "../buffs/interfaces/debuff.interface";
import { PlayerStats } from "../player/player.stats";
import { ActionType } from "./action.types";

export interface ActionContext {
  playerStats: PlayerStats;
  buffs: Buff[];
  debuffs: Debuff[];
}

export interface Action {
  name: ActionType;
  execute(ctx: ActionContext): ActionContext;
  undo?(ctx: ActionContext): ActionContext;
}
