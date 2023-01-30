import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { FerramentasDeDetalhe } from "../../shared/components";
import { VTextField } from "../../shared/forms";
import { LayoutBase } from "../../shared/layouts";
import { pessoasServices } from "../../shared/services/";
import { TFormData } from "../../types";

function DetalheDePessoas() {

    const {id = 'nova'} = useParams<'id'>()
    const navigate = useNavigate()

    const formRef = useRef<FormHandles>(null);

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
                        formRef.current?.setData(res);
                    }
                })
        }
    }, [id]);

    function handleSave(dados: TFormData){
        setIsLoading(true)

        if(id === 'nova'){
            
            pessoasServices.create(dados)
                .then(data => {
                    setIsLoading(false)

                    if(data instanceof Error){
                        alert(data.message)
                    }else{
                        navigate(`/pessoas/detalhe/${data}`)
                    }
                }) 

        }else{
            pessoasServices.updateById(Number(id), {id: Number(id), ...dados})
                .then(data => {
                    setIsLoading(false)

                    if (data instanceof Error) {
                        alert(data.message)
                    }
                })
        }
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

                    aoClicarEmSalvar={() => formRef.current?.submitForm()}
                    aoClicarEmSalvarEFechar={() => formRef.current?.submitForm()}
                    aoClicarEmNovo={() => { navigate('/pessoas/detalhe/nova') }}
                    aoClicarEmApagar={() => { handleDelete(Number(id)) }}
                    aoClicarEmVoltar={() => { navigate('/pessoas') }}
                />
            }
        >
            <Form ref={formRef} onSubmit={handleSave}>
                <VTextField placeholder='Nome completo' name='nomeCompleto' />
                <VTextField placeholder='Email' name='email' />
                <VTextField placeholder='Cidade id' name='cidadeId' />
            </Form>
        </LayoutBase>
    );
}

export default DetalheDePessoas;