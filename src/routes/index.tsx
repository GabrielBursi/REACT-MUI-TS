import { Navigate, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<p>Oi</p>}/>
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRoutes;