import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Button variant="contained" color="primary">OI</Button>}/>
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRoutes;