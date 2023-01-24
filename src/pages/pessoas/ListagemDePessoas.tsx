import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";
import { pessoasServices } from "../../shared/services/api/pessoas/ApiServices";

function ListagemDePessoas() {

    const [searchParams, setSearchParams] = useSearchParams()

    const busca = useMemo(() => {
        return searchParams.get('busca') || ''
    }, [searchParams])

    useEffect(() => {
        pessoasServices.getAll()
            .then(data => {
                if(data instanceof Error){
                    alert(data.message)
                }else{
                    console.log(data);
                }
            })
    }, []);
    
    return (
        <LayoutBase 
            titulo="Listagem de Pessoas" 
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


export default ListagemDePessoas;