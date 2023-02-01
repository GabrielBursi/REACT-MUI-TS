import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { createContext, useState, useCallback, useMemo, useContext } from "react";

import { ThemeContextData } from "../../types/contexts";
import { Children } from "../../types/props";

import { LightTheme, DarkTheme } from "../themes";


const ThemeContext = createContext({} as ThemeContextData)

function UseThemeContext(){
    return  useContext(ThemeContext) 
}

function ThemeContextProvider({children}: Children) {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName(oldTheme => oldTheme === 'light' ? 'dark' : 'light');
    }, [])

    const theme = useMemo(() => {
        if(themeName === 'light') return LightTheme

        return DarkTheme
    },[themeName])
    

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export {
    ThemeContext,
    UseThemeContext,
    ThemeContextProvider
}