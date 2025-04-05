import { Plugin } from "../plugin.interface";

export const XPLoggerPlugin: Plugin = {
  name: "XPLogger",
  onEvent: (event, stats) => {
    if (event.type === "PLAYER_LEVEL_UP") {
      console.log(`[XPLogger] New XP: ${event}`);
    }
  },
};
