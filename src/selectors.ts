import { createSelector } from "reselect";
import _ from "lodash";

// Types
import { GameState, BoardItem, BonusRewards } from "./types";

// Selectors
export const items$ = (state: GameState) => _.get(state, ["game", "items"]);

export const selectedItems$ = (state: GameState) =>
  _.get(state, ["game", "selectedItems"]);

export const weekBonusRewards$ = (state: GameState) =>
  _.get(state, ["game", "weekBonusRewards"]);

export const selectedItemsAggregated$ = createSelector(
  [selectedItems$, weekBonusRewards$],
  (selectedItems: BoardItem[], weekBonusRewards: BonusRewards) => {
    return _.reduce(
      selectedItems,
      (acc: any, val: any) => {
        if (acc[val.letter]) {
          acc[val.letter] = {
            ...acc[val.letter],
            qty: acc[val.letter].qty + 1,
            unitPoints: acc[val.letter].unitPoints + val.unitPoints
          };
          // Check if we have bonus points for the particular item
          if (weekBonusRewards[val.letter]) {
            if (weekBonusRewards[val.letter].qty === acc[val.letter].qty) {
              acc[val.letter].bonusPoints +=
                weekBonusRewards[val.letter].points;
            }
          }
        } else {
          acc[val.letter] = {
            letter: val.letter,
            qty: 1,
            unitPoints: val.unitPoints,
            bonusPoints: 0
          };
        }
        return acc;
      },
      {}
    );
  }
);

export const bonusScore$ = createSelector(
  [selectedItemsAggregated$],
  selectedItemsAggregated => {
    return _.reduce(
      selectedItemsAggregated,
      (acc: any, val: any) => {
        return (acc += val.bonusPoints);
      },
      0
    );
  }
);

export const totalScore$ = createSelector(
  [selectedItems$, bonusScore$],
  (selectedItems: BoardItem[], bonusScore: number) => {
    const itemsScore = _.reduce(
      selectedItems,
      (acc: number, val: BoardItem) => {
        return acc + val.unitPoints;
      },
      0
    );
    return itemsScore + bonusScore;
  }
);
