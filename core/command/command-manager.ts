import { ActionContext } from "../action";
import { Command } from "./command.interface";

export class CommandManager {
  #history: Command[] = [];
  execute(cmd: Command, ctx: ActionContext): ActionContext {
    const newCtx = cmd.execute(ctx);
    this.#history.push(cmd);
    return newCtx;
  }
  undo(ctx: ActionContext): ActionContext {
    const lastCommand = this.#history.pop();

    return lastCommand?.undo?.(ctx) ?? ctx;
  }

  undoAll(): ActionContext {
    return this.#history.reduceRight((ctx, cmd) => {
      return cmd.undo(ctx);
    }, {} as ActionContext);
  }

  clearHistory(): void {
    this.#history = [];
  }
}

export const commandManager = new CommandManager();
