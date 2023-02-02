import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import {Login, SideBar} from "./shared/components";
import { DrawerContextProvider, ThemeContextProvider } from "./shared/contexts";
import AuthProvider from "./shared/contexts/AuthContext";

import './shared/forms/TraducoesYup';

function App() {
  return (
    <AuthProvider>
      <ThemeContextProvider>
        <Login>
          <DrawerContextProvider>
            <BrowserRouter>
              <SideBar>
                <AppRoutes/>
              </SideBar>
            </BrowserRouter>
          </DrawerContextProvider>
        </Login>
      </ThemeContextProvider>
    </AuthProvider>
  );
}

export default App;
