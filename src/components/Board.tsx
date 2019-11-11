// Libs
import * as React from "react";
import _ from "lodash";

// Types
import { BoardItem as BoardItemType } from "../types";

// Actions
import { selectItem } from "../actions";

// Components
import AppHeader from "./AppHeader";
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardMediaContent
} from "@rmwc/card";
import { Typography } from "@rmwc/typography";

// Interface
interface BoardProps {
  items: BoardItemType[];
  selectItem: typeof selectItem;
}

interface BoardItemProps {
  item: BoardItemType;
  onClick: () => void;
}

// Styles
const styles = {
  container: {},
  boardItemsContainer: {
    display: "flex",
    flexWrap: "wrap",
    overflowX: "hidden",
    overflowY: "auto"
  }
} as { [key: string]: React.CSSProperties };

const Board: React.FC<BoardProps> = (props: BoardProps): JSX.Element => {
  return (
    <div style={styles.container}>
      <AppHeader />
      <div style={styles.boardItemsContainer}>
        {renderBoardItems(props.items, props.selectItem)}
      </div>
    </div>
  );
};

const renderBoardItems = (
  items: BoardItemType[],
  onSelectItemAction: typeof selectItem
): JSX.Element[] => {
  return _.map(items, (item, index) => (
    <BoardItem
      key={index}
      onClick={() => onSelectItem(item, onSelectItemAction)}
      item={item}
    />
  ));
};

const onSelectItem = (
  item: BoardItemType,
  onSelectItemAction: typeof selectItem
) => {
  onSelectItemAction(item);
};

const BoardItem: React.FC<BoardItemProps> = (
  props: BoardItemProps
): JSX.Element => {
  return (
    <Card
      style={{
        width: "7rem",
        backgroundColor: "#1268CE",
        color: "#fff",
        marginRight: 10,
        marginTop: 10
      }}
      onClick={props.onClick}
    >
      <CardPrimaryAction>
        <CardMedia square>
          <CardMediaContent
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              use="subtitle2"
              tag="div"
              theme="textPrimaryOnDark"
              style={{
                padding: "0.5rem 1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                fontWeight: "bold"
              }}
            >
              {props.item.letter}
            </Typography>
          </CardMediaContent>
        </CardMedia>
      </CardPrimaryAction>
    </Card>
  );
};

export default Board;
