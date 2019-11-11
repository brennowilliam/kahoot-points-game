// Libs
import React from "react";
import "../styles/App.css";

// Components
import Game from "../containers/Game";

// Styles
import "@material/button/dist/mdc.button.css";
import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/elevation/dist/mdc.elevation.css";
import "@material/typography/dist/mdc.typography.css";
import "@material/list/dist/mdc.list.css";
import "@rmwc/data-table/data-table.css";

const styles = {
  container: {
    padding: 100,
    height: "100%"
  }
} as { [key: string]: React.CSSProperties };

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={styles.container}>
        <Game />
      </div>
    </div>
  );
};

export default App;
