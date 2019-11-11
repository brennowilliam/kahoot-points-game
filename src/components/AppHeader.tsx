// Libs
import * as React from "react";

// Components
import { Typography } from "@rmwc/typography";

// Colors
import colors from "../styles/colors";

// Logo
import KahootLogo from "./LogoSVG";

// styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontWeight: "bold",
    color: colors.yellow,
    marginLeft: 10
  }
} as { [key: string]: React.CSSProperties };

const AppHeader: React.FC = (): JSX.Element => {
  return (
    <div style={styles.container}>
      <KahootLogo />
      <Typography use="headline4" style={styles.headerText}>
        Points
      </Typography>
    </div>
  );
};

export default AppHeader;
