import { Action, ActionContext } from "../action.context";
import { ActionType } from "../action.types";

export class HealAction implements Action {
  name: ActionType.DASH = ActionType.DASH;
  execute(ctx: ActionContext): ActionContext {
    return {
      ...ctx,
      playerStats: {
        ...ctx.playerStats,
        health: ctx.playerStats.health + 20,
      },
    };
  }
}
