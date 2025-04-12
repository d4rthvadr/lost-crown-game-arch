import { ActionContext } from "../core/action";
import { Action } from "../core/action/action.context";
import { PlayerStats } from "../core/player/player.stats";
import { GameEvent } from "../game-event.type";
import { Plugin } from "./plugin.interface";
export class PluginManager {
  #plugins: Plugin[] = [];

  #hasPlugin(name: string): boolean {
    return this.#plugins.some((plugin) => plugin.name === name);
  }
  getPlugin(name: string): undefined | Plugin {
    return this.#plugins.find((plugin) => plugin.name === name);
  }

  registerPlugin(plugin: Plugin) {
    // Unregister the plugin if it already exists
    this.unregisterPlugin(plugin.name);

    console.log(`Registering plugin ${plugin.name}`);

    this.#plugins.push(plugin);
  }

  unregisterPlugin(name: string) {
    if (!this.#hasPlugin(name)) {
      console.warn(`Plugin ${name} is not registered.`);
      return;
    }
    console.log(`Unregistering plugin ${name}`);
    this.#plugins = this.#plugins.filter((plugin) => plugin.name !== name);
  }

  applyBeforeAction(action: Action, stats: PlayerStats): PlayerStats {
    const mergedStats = this.#plugins.reduce(
      (acc: PlayerStats, plugin: Plugin) => {
        if (plugin.onBeforeAction) {
          const modifiedStats = plugin.onBeforeAction(action, acc);
          return {
            ...acc,
            ...modifiedStats,
          };
        }
        return acc;
      },
      stats
    );
    return mergedStats;
  }

  applyAfterAction(action: Action, stats: PlayerStats): void {
    this.#plugins.forEach((plugin) => {
      plugin?.onAfterAction?.(action, stats);
    });
  }

  dispatchEvent(event: GameEvent, status: PlayerStats) {
    this.#plugins.forEach((plugin) => {
      plugin?.onEvent?.(event, status);
    });
  }
}
