import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts";
import { pessoasServices } from "../../shared/services/";

function DetalheDePessoas() {

    const {id = 'nova'} = useParams<'id'>()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [nome, setNome] = useState<string>('');

    useEffect(() => {
        setIsLoading(true)
        if( id !== 'nova' ){
            pessoasServices.getById(Number(id))
                .then(res => {
                    setIsLoading(false)
                    if(res instanceof Error){
                        alert(res.message)
                        navigate('/pessoas')
                    }else{
                        setNome(res.nomeCompleto)
                        console.log(res);
                    }
                })
        }
    }, [id]);

    function handleSave(){

    }

    function handleDelete(id:number){
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Realmente deseja apagar?")){
            pessoasServices.deleteById(Number(id))
                .then(res => {
                    if (res instanceof Error) {
                        alert(res.message)
                        navigate('/pessoas')
                    } else {
                        alert('Registro apagado com sucesso')
                        navigate('/pessoas')
                    }
                })
        }
    }

    return (
        <LayoutBase
            titulo={id === 'nova' ? 'Nova Pessoa' : nome}
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo="Nova"
                    mostrarBotaoSalvarEFechar
                    mostrarBotaoNovo={id !== 'nova'}
                    mostrarBotaoApagar={id !== 'nova'}

                    aoClicarEmSalvar={() => { }}
                    aoClicarEmSalvarEFechar={() => { }}
                    aoClicarEmNovo={() => { navigate('/pessoas/detalhe/nova') }}
                    aoClicarEmApagar={() => { handleDelete(Number(id)) }}
                    aoClicarEmVoltar={() => { navigate('/pessoas') }}
                />
            }
        >

            {isLoading && (
                <LinearProgress variant="indeterminate"/>
            )}

            <p>{id}</p>
        </LayoutBase>
    );
}

export default DetalheDePessoas;