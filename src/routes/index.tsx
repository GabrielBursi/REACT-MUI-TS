import { Button } from "@mui/material";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UseDrawerContext } from "../shared/contexts";

function AppRoutes() {

    const { toggleDrawer, toggleDrawerOptions } = UseDrawerContext()

    useEffect(() => {
        toggleDrawerOptions([
            {
                icon: "home",
                label:"Página inicial",
                path: "/"
            }
        ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary" onClick={toggleDrawer}>OI</Button>}/>
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRoutes;