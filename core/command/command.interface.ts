import { ActionContext } from "../action";

export interface Command {
  execute(ctx: ActionContext): ActionContext;
  undo(ctx: ActionContext): ActionContext;
}
