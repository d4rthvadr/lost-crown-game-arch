import { Action, ActionContext } from "../action.context";
import { ActionType } from "../action.types";

export class DashAction implements Action {
  name: ActionType.DASH = ActionType.DASH;
  execute(ctx: ActionContext): ActionContext {
    // Implementation of the dash action
    console.log("Dash action executed");

    return {
      ...ctx,
      playerStats: {
        ...ctx.playerStats,
        stamina: ctx.playerStats.stamina - 10, // Example of modifying player stats
      },
    };
  }
  undo(ctx: ActionContext): ActionContext {
    // Implementation of the undo action
    console.log("Dash action undone");

    return {
      ...ctx,
      playerStats: {
        ...ctx.playerStats,
        stamina: ctx.playerStats.stamina + 10, // Example of reverting player stats
      },
    };
  }
}
