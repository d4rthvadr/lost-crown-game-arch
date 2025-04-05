import { ActionContext } from "../core/action";
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
    if (this.#hasPlugin(plugin.name)) {
      console.warn(`Plugin ${plugin.name} is already registered. Overwriting.`);
      this.unregisterPlugin(plugin.name);
    }

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

  applyBeforeAction(action: any, stats: any): ActionContext {
    return {} as ActionContext;
  }

  applyAfterAction(action: any, stats: any) {
    return stats;
  }

  dispatchEvent(event: GameEvent, status: PlayerStats) {
    this.#plugins.forEach((plugin) => {
      plugin?.onEvent?.(event, status);
    });
  }
}
