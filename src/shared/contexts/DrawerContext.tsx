import { createContext, useState, useCallback, useContext } from "react";

import { Children, DrawerContextData } from "../../types";

const DrawerContext = createContext({} as DrawerContextData)

function UseDrawerContext(){
    return  useContext(DrawerContext) 
}

function DrawerContextProvider({children}: Children) {

    const [isDrawerOpen, setOpenDrawer] = useState(false);

    const toggleDrawer = useCallback(() => {
        setOpenDrawer(oldDrawer => !oldDrawer );
    }, [])

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
}

export {
    DrawerContext,
    UseDrawerContext,
    DrawerContextProvider
}