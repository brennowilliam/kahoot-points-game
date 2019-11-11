import { selectItem, newGame } from "../actions";

import { SELECT_ITEM, NEW_GAME } from "../constants";

// Types
import { BoardItem } from "../types";

const boardItemSimple: BoardItem = {
  id: 1,
  letter: "A",
  unitPoints: 50
};

test("should set up select item action expense", () => {
  const action = selectItem(boardItemSimple);
  const expected = {
    type: SELECT_ITEM,
    payload: boardItemSimple
  };
  expect(action).toEqual(expected);
});

test("should set up new game action expense", () => {
  const action = newGame();
  const expected = {
    type: NEW_GAME
  };
  expect(action).toEqual(expected);
});
