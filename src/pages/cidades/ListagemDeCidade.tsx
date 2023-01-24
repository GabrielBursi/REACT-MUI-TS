import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";
function ListagemDeCidade() {

    const [searchParams, setSearchParams] = useSearchParams()

    const busca = useMemo(() => {
        return searchParams.get('busca') || ''
    }, [searchParams])

    return (
        <LayoutBase 
            titulo="Listagem de Cidades" 
            barraDeFerramentas={
                    <FerramentasDaListagem
                        mostrarInputBusca 
                        textoBotaoNovo="Nova"
                        textoDaBusca={busca}
                        aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}
                    />
                }>
            <h1>Teste</h1>
        </LayoutBase>
    );
}


export default ListagemDeCidade;