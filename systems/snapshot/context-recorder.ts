import { ActionContext } from "../../core/action";
import { Action } from "../../core/action/action.context";
import { ContextSnapshot } from "./context-snapshot.interface";

class ContextRecorder {
  private snapshots: ContextSnapshot[] = [];

  constructor() {}

  record(ctx: ActionContext, action?: Action): number {
    this.snapshots.push({
      timestamp: Date.now(),
      context: Object.assign({}, ctx),
      action: action?.name,
    });

    return this.snapshots.length - 1;
  }

  getTimeline(): ContextSnapshot[] {
    return this.snapshots;
  }
  clearTimeline(): void {
    this.snapshots = [];
  }

  travelTo(index: number): ActionContext | null {
    return this.snapshots[index].context;
  }
}

export const contextRecorder = new ContextRecorder();
