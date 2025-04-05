import { Action, ActionContext } from "./core/action/action.context";
import { ActionType } from "./core/action/action.types";
import { DashBoostAmulet } from "./plugins/amulets/dash-boost.amulet";
import { DoubleJumpAmulet } from "./plugins/amulets/double-jump.amulet";
import { Player } from "./core/player/player";
import { PlayerStats } from "./core/player/player.stats";
import { PlayerFactory } from "./core/player/player.factory";
import { DashAction } from "./core/action/actions/dash.action";
import { JumpAction } from "./core/action/actions/jump.action";
import { LightAttackAction } from "./core/action/actions/light-attack.action";
import { HeavyAttackAction } from "./core/action/actions/heavy-attack.action";
import { PluginManager } from "./plugins/plugin-manager";
import { BerserkerPlugin } from "./plugins/builtins/berserker.plugin";
import { XPLoggerPlugin } from "./plugins/builtins/xp-logger.plugin";

const EventToActionMap = {
  [ActionType.DASH]: DashAction,
  [ActionType.JUMP]: JumpAction,
  [ActionType.LIGHT_ATTACK]: LightAttackAction,
  [ActionType.HEAVY_ATTACK]: HeavyAttackAction,
};

const KeyToActionTypeMap = {
  j: ActionType.DASH,
  k: ActionType.JUMP,
  l: ActionType.LIGHT_ATTACK,
  i: ActionType.HEAVY_ATTACK,
  o: ActionType.HEAL,
};

// Register plugins
const pluginManager = new PluginManager();
pluginManager.registerPlugin(BerserkerPlugin);
pluginManager.registerPlugin(XPLoggerPlugin);

const player: Player = PlayerFactory.createPlayer("Player");

player.equipAmulet(new DoubleJumpAmulet());
player.equipAmulet(new DashBoostAmulet());

player.setPluginManger(pluginManager);

// base on events call action on player

function executeCombo(actions: Action[], stats: PlayerStats): ActionContext {
  let context: ActionContext = {
    playerStats: stats,
    buffs: [],
    debuffs: [],
  };

  actions.forEach((action) => {
    context = action.execute(context);
  });

  return context;
}

document.addEventListener("keydown", (event) => {
  const actionType =
    KeyToActionTypeMap[event.key as keyof typeof KeyToActionTypeMap] ??
    undefined;

  if (!actionType) {
    console.log(`No action mapped for key: ${event.key}`);
    return;
  }

  const ActionClass =
    EventToActionMap[actionType as keyof typeof EventToActionMap];

  if (!ActionClass) {
    console.error(`No action class found for action type: ${actionType}`);
    return;
  }

  player.perform(new ActionClass(), { buffs: [], debuffs: [] });
});
