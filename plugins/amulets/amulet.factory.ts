import { ActionType } from "../../core/action";
import { DashBoostAmulet } from "./dash-boost.amulet";
import { DoubleJumpAmulet } from "./double-jump.amulet";
import { XPBoostAmulet } from "./xp-boost.amulet";

export class AmuletFactory {
  static createAmulet(type: ActionType) {
    switch (type) {
      case ActionType.DASH_BOOST:
        return new DashBoostAmulet();
      case ActionType.DOUBLE_JUMP:
        return new DoubleJumpAmulet();
      case ActionType.XP_BOOST:
        return new XPBoostAmulet();

      default:
        throw new Error(`Amulet ${name} not found`);
    }
  }
}
