import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import { ThemeContextProvider } from "./shared/contexts";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
