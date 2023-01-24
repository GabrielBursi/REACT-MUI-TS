import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {Dashboard, ListagemDePessoas} from "../pages/";

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
                icon: "people",
                label: "Pessoas",
                path: "/pessoas"
            }
        ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pessoas" element={<ListagemDePessoas />} />
            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRoutes;