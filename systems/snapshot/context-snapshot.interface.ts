import { ActionContext } from "../../core/action";

export interface ContextSnapshot {
  timestamp: number;
  context: ActionContext;
  action?: string;
}
