// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Types
import { GameState } from "../types";

// Actions
import { selectItem, newGame } from "../actions";

// Component
import Game from "../components/Game";

// Selectors
import {
  items$,
  selectedItems$,
  totalScore$,
  selectedItemsAggregated$,
  bonusScore$
} from "../selectors";

const mapStateToProps = (state: GameState) => ({
  items: items$(state),
  selectedItems: selectedItems$(state),
  totalScore: totalScore$(state),
  selectedItemsAggregated: selectedItemsAggregated$(state),
  bonusScore: bonusScore$(state)
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      selectItem,
      newGame
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
