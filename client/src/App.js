import { CssBaseLine, ThemeProvider} from "@mui/icons-material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseLine />
      </ThemeProvider>

    </div>
  );
}

export default App;
