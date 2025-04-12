import { ActionContext, ActionFactory, ActionType } from "../../action";
import { Command } from "../command.interface";

const heavyAttackAction = ActionFactory.createAction(ActionType.HEAVY_ATTACK);

export class HeavyAttackCommand implements Command {
  execute(ctx: ActionContext): ActionContext {
    return heavyAttackAction.execute(ctx);
  }
  undo(ctx: ActionContext): ActionContext {
    if (heavyAttackAction?.undo) {
      return heavyAttackAction.undo(ctx);
    }
    return ctx;
  }
}
