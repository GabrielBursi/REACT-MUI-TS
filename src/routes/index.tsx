import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {Dashboard, ListagemDeCidade} from "../pages/";

import { UseDrawerContext } from "../shared/contexts";

function AppRoutes() {

    const { toggleDrawerOptions } = UseDrawerContext()

    useEffect(() => {
        toggleDrawerOptions([
            {
                icon: "home",
                label:"Página inicial",
                path: "/"
            },
            {
                icon: "location_city",
                label: "Cidades",
                path: "/cidades"
            }
        ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cidades" element={<ListagemDeCidade />} />
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRoutes;