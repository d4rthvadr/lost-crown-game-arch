import { Action, ActionContext } from "../action.context";
import { ActionType } from "../action.types";

export class JumpAction implements Action {
  name: ActionType.JUMP = ActionType.JUMP;
  execute(ctx: ActionContext): ActionContext {
    return {
      ...ctx,
      playerStats: {
        ...ctx.playerStats,
        stamina: ctx.playerStats.stamina - 5,
      },
    };
  }
  undo(ctx: ActionContext): ActionContext {
    return {
      ...ctx,
      playerStats: {
        ...ctx.playerStats,
        stamina: ctx.playerStats.stamina + 5,
      },
    };
  }
}
