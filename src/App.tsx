import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import SideBar from "./shared/components/side-bar/SideBar";
import { ThemeContextProvider } from "./shared/contexts";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <SideBar>
          <AppRoutes/>
        </SideBar>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
