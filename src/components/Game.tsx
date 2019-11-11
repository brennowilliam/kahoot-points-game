// Libs
import React from "react";

// Components
import { Elevation } from "@rmwc/elevation";

// Interface
import { BoardItem } from "../types";

// Actions
import { selectItem, newGame } from "../actions";

// Components
import Board from "./Board";
import UserStats from "./UserStats";

// Styles
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    flex: 1
  },
  boardContainer: {
    maxWidth: "70%",
    width: "70%",
    padding: 15,
    overflowX: "hidden",
    overflowY: "auto"
  },
  userStatsContainer: {
    maxWidth: "30%",
    minWidth: "30%",
    padding: 15,
    overflowX: "hidden",
    overflowY: "auto"
  }
} as { [key: string]: React.CSSProperties };

interface GameProps {
  selectItem: typeof selectItem;
  newGame: typeof newGame;
  items: BoardItem[];
  selectedItems: BoardItem[];
  totalScore: number;
  selectedItemsAggregated: { [key: string]: BoardItem };
  bonusScore: number;
}

const Game: React.FC<GameProps> = (props: GameProps): JSX.Element => {
  return (
    <div style={styles.container}>
      <Elevation z={3} style={styles.boardContainer}>
        <Board items={props.items} selectItem={props.selectItem} />
      </Elevation>
      <Elevation z={1} style={styles.userStatsContainer}>
        <UserStats
          selectedItems={props.selectedItemsAggregated}
          totalScore={props.totalScore}
          newGame={props.newGame}
          bonusScore={props.bonusScore}
        />
      </Elevation>
    </div>
  );
};

// Utils
export default Game;
