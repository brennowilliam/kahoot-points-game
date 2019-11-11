// Libs
import * as React from "react";
import _ from "lodash";

// Components
import { Typography } from "@rmwc/typography";
import { Button } from "@rmwc/button";
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell
} from "@rmwc/data-table";

// Actions
import { newGame } from "../actions";

// Types
import { BoardItem } from "../types";

// Colors
import colors from "../styles/colors";

// Interface
interface UserStatsProps {
  selectedItems: { [key: string]: BoardItem };
  totalScore: number;
  newGame: typeof newGame;
  bonusScore: number;
}

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100%",
    flex: "1 1 auto"
  },
  headerText: {
    fontWeight: "bold",
    color: colors.red
  },
  tableContainer: {
    display: "flex",
    flex: 1
  },
  dataTableStyles: {
    display: "flex",
    flex: 1,
    overflowX: "auto"
  },
  boardItemsContainer: {},
  footer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  scoresContainer: {
    display: "flex",
    alignItems: "center"
  },
  score: {
    marginRight: 30
  },
  bonusScore: {
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%"
  }
} as { [key: string]: React.CSSProperties };

const UserStats: React.FC<UserStatsProps> = (
  props: UserStatsProps
): JSX.Element => {
  console.log(props.selectedItems);
  return (
    <div style={styles.container}>
      {renderHeader()}
      {renderSelectedItems(props.selectedItems)}
      {renderFooter(props.totalScore, props.bonusScore, props.newGame)}
    </div>
  );
};

const renderHeader = (): JSX.Element => (
  <div>
    <Typography use="headline4" style={styles.headerText}>
      User Stats
    </Typography>
  </div>
);

const renderSelectedItems = (selectedItems: {
  [key: string]: BoardItem;
}): JSX.Element => {
  console.log(selectedItems);
  const sortedItems = _.sortBy(
    _.map(_.keys(selectedItems), item => selectedItems[item]),
    item => item.unitPoints
  );

  return (
    <div style={styles.tableContainer}>
      <DataTable style={styles.dataTableStyles}>
        <DataTableContent style={{ flex: "1 0 auto" }}>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>Item</DataTableHeadCell>
              <DataTableHeadCell>Qty</DataTableHeadCell>
              <DataTableHeadCell>Score</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {_.map(_.reverse(sortedItems), (item: BoardItem) => (
              <DataTableRow>
                <DataTableCell>{item.letter}</DataTableCell>
                <DataTableCell>{item.qty}</DataTableCell>
                <DataTableCell>
                  {item.bonusPoints
                    ? item.unitPoints + item.bonusPoints
                    : item.unitPoints}
                </DataTableCell>
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    </div>
  );
};

const renderFooter = (
  totalScore: number,
  bonusScore: number,
  handleNewGame: typeof newGame
): JSX.Element => {
  return (
    <div style={styles.footer}>
      <div style={styles.bonusScore}>
        <Typography use="headline5">Bonuses:</Typography>
        <Typography use="headline5">{bonusScore}</Typography>
      </div>
      <div style={styles.scoresContainer}>
        <div style={styles.score}>
          <div>
            <Typography use="headline6">Total</Typography>
          </div>
          <div>
            <Typography use="headline5">{totalScore}</Typography>
          </div>
        </div>
        <Button raised onClick={handleNewGame} label="New Game" />
      </div>
    </div>
  );
};

export default UserStats;
