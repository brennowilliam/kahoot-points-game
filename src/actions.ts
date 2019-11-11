// Constants
import { SELECT_ITEM, NEW_GAME, CHECK_FOR_BONUS_POINTS } from "./constants";

// Types
import { BoardItem } from "./types";

// Actions
export const selectItem = (payload: BoardItem) => ({
  type: SELECT_ITEM,
  payload
});

export const newGame = () => ({
  type: NEW_GAME
});
