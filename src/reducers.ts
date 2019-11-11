// Libs
import _ from "lodash";

// Redux
import { combineReducers } from "redux";

// Constants
import { SELECT_ITEM, NEW_GAME } from "./constants";

// Types
import { GameState } from "./types";

// Data
import { items as gameItems, weekBonusRewards } from "./data";

// Initial State
export const initialState = {
  items: gameItems,
  totalScore: 0,
  selectedItems: [],
  weekBonusRewards: weekBonusRewards
};

export const mainGameReducer = (
  state: GameState = initialState,
  action: any
) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
        items: _.filter(state.items, item => item.id !== action.payload.id)
      };
    case NEW_GAME:
      return initialState;
    default:
      return state;
  }
};

export default combineReducers({
  game: mainGameReducer
});
