import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import {SideBar} from "./shared/components";
import { DrawerContextProvider, ThemeContextProvider } from "./shared/contexts";

import './shared/forms/TraducoesYup';

function App() {
  return (
    <ThemeContextProvider>
      <DrawerContextProvider>
        <BrowserRouter>
          <SideBar>
            <AppRoutes/>
          </SideBar>
        </BrowserRouter>
      </DrawerContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
