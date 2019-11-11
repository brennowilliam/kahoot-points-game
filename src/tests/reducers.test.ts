import { mainGameReducer, initialState } from "../reducers";

// Types
import { BoardItem } from "../types";

// data
import { weekBonusRewards } from "../data";

// Data
import { items } from "../data";

const boardItemSimple: BoardItem = {
  id: 1,
  letter: "A",
  unitPoints: 50
};

const currentState = {
  totalScore: 0,
  selectedItems: [],
  items: items,
  weekBonusRewards: weekBonusRewards
};

test("should setup default mainGameReducer", () => {
  const state = mainGameReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual(currentState);
});
