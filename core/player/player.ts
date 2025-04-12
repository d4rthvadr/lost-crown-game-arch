import { Buff } from "../buffs/interfaces/buff.interface";
import { Debuff } from "../buffs/interfaces/debuff.interface";
import { GameEvent } from "./../../game-event.type";
import { PlayerStats } from "./player.stats";
import { Amulet } from "../../plugins/amulets/amulet.interface";
import { Action } from "../action/action.context";
import { PluginManager } from "../../plugins/plugin-manager";

export class Player {
  private baseStats: PlayerStats;
  private amulets: Amulet[];
  private pluginManager: PluginManager | undefined;

  constructor(baseStatus: PlayerStats, amulets: Amulet[] = []) {
    this.baseStats = baseStatus;
    this.amulets = amulets;
  }

  public equipAmulet(amulet: Amulet): this {
    this.amulets.push(amulet);
    this.baseStats = this.getModifiedStats();
    return this;
  }

  public getModifiedStats(): PlayerStats {
    return this.amulets.reduce(
      (stats, amulet) => amulet.modifyStatus(stats),
      this.baseStats
    );
  }
  // This will be called by event listeners attached to the player
  perform(
    action: Action,
    { buffs = [], debuffs = [] }: { buffs: Buff[]; debuffs: Debuff[] }
  ): void {
    let ctx = {
      playerStats: this.getModifiedStats(),
      buffs,
      debuffs,
    };

    const additionalCtx = this.pluginManager?.applyBeforeAction(
      action,
      ctx.playerStats
    );

    ctx = {
      ...ctx,
      playerStats: {
        ...ctx.playerStats,
        ...additionalCtx,
      },
    };

    action.execute(ctx);

    this.pluginManager?.applyAfterAction(action, ctx.playerStats);
  }

  dispatchEvent(event: GameEvent) {
    this.amulets.forEach((amulet) => {
      if (amulet.onEvent) {
        amulet.onEvent(event);
      }
    });

    this.pluginManager?.dispatchEvent(event, this.getModifiedStats());
  }

  setPluginManger(pluginMgr: PluginManager) {
    this.pluginManager = pluginMgr;
  }
}
