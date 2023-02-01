import { createContext, useState, useCallback, useContext } from "react";

import { DrawerContextData, DrawerOptions } from "../../types/contexts";
import { Children } from "../../types/props";

const DrawerContext = createContext({} as DrawerContextData)

function UseDrawerContext(){
    return  useContext(DrawerContext) 
}

function DrawerContextProvider({children}: Children) {

    const [isDrawerOpen, setOpenDrawer] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<DrawerOptions[]>([]);

    const toggleDrawer = useCallback(() => {
        setOpenDrawer(oldDrawer => !oldDrawer );
    }, [])

    const toggleDrawerOptions = useCallback((newDrawerOptions: DrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions);
    }, [])

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer, drawerOptions, toggleDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
}

export {
    DrawerContext,
    UseDrawerContext,
    DrawerContextProvider
}