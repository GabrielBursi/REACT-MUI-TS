import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { 
        Dashboard,
        DetalheDeCidades,
        DetalheDePessoas,
        ListagemDeCidades,
        ListagemDePessoas 
} from "../pages/";

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
                icon: 'location_city',
                path: '/cidades',
                label: 'Cidades',
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
            <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas/>} />

            <Route path="/cidades" element={<ListagemDeCidades />} />
            <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />

            <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRoutes;