import { ActionContext, ActionFactory, ActionType } from "../../action";
import { Command } from "../command.interface";

const dashAction = ActionFactory.createAction(ActionType.DASH);

export class DashCommand implements Command {
  execute(ctx: ActionContext): ActionContext {
    return dashAction.execute(ctx);
  }
  undo(ctx: ActionContext): ActionContext {
    if (dashAction?.undo) {
      return dashAction.undo(ctx);
    }
    return ctx;
  }
}
