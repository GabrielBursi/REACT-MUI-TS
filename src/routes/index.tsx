import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

import { UseDrawerContext } from "../shared/contexts";

function AppRoutes() {

    const { toggleDrawer } = UseDrawerContext()

    return (
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary" onClick={toggleDrawer}>OI</Button>}/>
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRoutes;