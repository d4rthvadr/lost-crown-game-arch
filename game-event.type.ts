export type GameEvent =
  | { type: "PLAYER_LEVEL_UP"; payload: { level: number } }
  | { type: "PLAYER_DIED"; payload: { reason: string } }
  | { type: "PLAYER_RESPAWNED"; payload: { location: string } }
  | { type: "PLAYER_JUMP"; payload: { height: number } }
  | { type: "PLAYER_DASH"; payload: { distance: number } }
  | { type: "PLAYER_ATTACK"; payload: { damage: number } }
  | { type: "PLAYER_USE_ITEM"; payload: { itemId: string } }
  | { type: "PLAYER_GAIN_XP"; payload: { amount: number } };
