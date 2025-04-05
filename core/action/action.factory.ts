import { DashAction } from "./actions/dash.action";
import { HealAction } from "./actions/heal.action";
import { HeavyAttackAction } from "./actions/heavy-attack.action";
import { JumpAction } from "./actions/jump.action";
import { LightAttackAction } from "./actions/light-attack.action";

export class ActionFactory {
  static createAction(actionType: string) {
    switch (actionType) {
      case "JUMP":
        return new JumpAction();
      case "DASH":
        return new DashAction();
      case "LIGHT_ATTACK":
        return new LightAttackAction();
      case "HEAVY_ATTACK":
        return new HeavyAttackAction();
      case "HEAL":
        return new HealAction();
      default:
        throw new Error(`Unknown action type: ${actionType}`);
    }
  }
}
