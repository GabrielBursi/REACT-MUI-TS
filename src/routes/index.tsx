import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppThemeContext } from "../shared/contexts/ThemeContext";

function AppRoutes() {

    const {toggleTheme} = AppThemeContext()

    return (
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary" onClick={toggleTheme}>OI</Button>}/>
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRoutes;