import { Action } from "./action.context";
import { ActionType } from "./action.types";
import { DashAction } from "./actions/dash.action";
import { HealAction } from "./actions/heal.action";
import { HeavyAttackAction } from "./actions/heavy-attack.action";
import { JumpAction } from "./actions/jump.action";
import { LightAttackAction } from "./actions/light-attack.action";

export class ActionFactory {
  static createAction(actionType: ActionType): Action {
    switch (actionType) {
      case ActionType.JUMP:
        return new JumpAction();
      case ActionType.DASH:
        return new DashAction();
      case ActionType.LIGHT_ATTACK:
        return new LightAttackAction();
      case ActionType.HEAVY_ATTACK:
        return new HeavyAttackAction();
      case ActionType.HEAL:
        return new HealAction();
      default:
        throw new Error(`Unknown action type: ${actionType}`);
    }
  }
}
