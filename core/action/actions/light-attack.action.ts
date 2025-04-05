import { Action, ActionContext } from "../action.context";
import { ActionType } from "../action.types";

export class LightAttackAction implements Action {
  name: ActionType.LIGHT_ATTACK = ActionType.LIGHT_ATTACK;
  execute(ctx: ActionContext): ActionContext {
    return {
      ...ctx,
      playerStats: {
        ...ctx.playerStats,
        stamina: ctx.playerStats.stamina - 5,
      },
    };
  }
}
