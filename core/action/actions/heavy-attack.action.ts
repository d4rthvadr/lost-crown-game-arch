import { Action, ActionContext } from "../action.context";
import { ActionType } from "../action.types";

export class HeavyAttackAction implements Action {
  name: ActionType.HEAVY_ATTACK = ActionType.HEAVY_ATTACK;
  execute(ctx: ActionContext): ActionContext {
    return {
      ...ctx,
      playerStats: {
        ...ctx.playerStats,
        stamina: ctx.playerStats.stamina - 20,
      },
    };
  }
  undo(ctx: ActionContext): ActionContext {
    return {
      ...ctx,
      playerStats: {
        ...ctx.playerStats,
        stamina: ctx.playerStats.stamina - 20,
      },
    };
  }
}
