import { useEffect, useState } from "react";
import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from 'yup';

import { FerramentasDeDetalhe } from "../../shared/components";
import { VTextField, VForm, useVForm } from "../../shared/forms";
import { LayoutBase } from "../../shared/layouts";
import { pessoasServices } from "../../shared/services/";
import { FormData, TVFormErrors } from "../../types";
import AutoCompleteCidade from "./components/AutoCompleteCidade";

const formValidationSchema: yup.SchemaOf<FormData> = yup.object().shape({
    cidadeId: yup.number().required(),
    email: yup.string().required().email(),
    nomeCompleto: yup.string().required().min(3),
});

function DetalheDePessoas() {

    const {id = 'nova'} = useParams<'id'>()
    const navigate = useNavigate()

    const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [nome, setNome] = useState<string>('');
    
    useEffect(() => {
        if( id !== 'nova' ){
            setIsLoading(true)
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
        }else{
            formRef.current?.setData({
                email: '',
                nomeCompleto: '',
                cidadeId: undefined,
            });
        }
    }, [id]);

    function handleSave(dados: FormData){
        formValidationSchema.validate(dados)
            .then(dadosValidados => {
                setIsLoading(true)

                if(id === 'nova'){
                    
                    pessoasServices.create(dadosValidados)
                    .then(data => {
                            setIsLoading(false)
                            if(data instanceof Error){
                                alert(data.message)
                            }else{
                                if (isSaveAndClose()) {
                                    navigate('/pessoas');
                                } else {
                                    navigate(`/pessoas/detalhe/${data}`);
                                }
                            }
                        }) 

                }else{
                    pessoasServices.updateById(Number(id), {id: Number(id), ...dadosValidados})
                        .then(data => {
                            setIsLoading(false)

                            if (data instanceof Error) {
                                alert(data.message)
                            }else{
                                if (isSaveAndClose()) {
                                    navigate('/pessoas');
                                }
                            }
                        })
                }
            })
            .catch((errors: yup.ValidationError) => {
                
                const validationErrors: TVFormErrors = {};
                
                errors.inner.forEach(error => {
                    if (!error.path) return;
                    
                    validationErrors[error.path] = error.message;
                });
                formRef.current?.setErrors(validationErrors);
            })
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

                    aoClicarEmSalvar={save}
                    aoClicarEmSalvarEFechar={saveAndClose}
                    aoClicarEmNovo={() => { navigate('/pessoas/detalhe/nova') }}
                    aoClicarEmApagar={() => { handleDelete(Number(id)) }}
                    aoClicarEmVoltar={() => { navigate('/pessoas') }}
                />
            }
        >
            <VForm ref={formRef} onSubmit={handleSave}>
                <Box margin={1} display="flex" flexDirection="column" component={Paper} variant="outlined">

                <Grid container direction="column" padding={2} spacing={2}>

                    {isLoading && (
                        <Grid item>
                            <LinearProgress variant='indeterminate' />
                        </Grid>
                    )}

                    <Grid item>
                        <Typography variant='h6'>Geral</Typography>
                    </Grid>

                    <Grid container item direction="row" spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                            <VTextField
                            fullWidth
                            name='nomeCompleto'
                            disabled={isLoading}
                            label='Nome completo'
                            onChange={e => setNome(e.target.value)}
                            />
                    </Grid>
                    </Grid>

                    <Grid container item direction="row" spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                            <VTextField
                            fullWidth
                            name='email'
                            label='Email'
                            disabled={isLoading}
                            />
                        </Grid>
                    </Grid>

                    <Grid container item direction="row" spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                            <AutoCompleteCidade isExternalLoading={isLoading}/>
                        </Grid>
                    </Grid>

                </Grid>

                </Box>
            </VForm>
        </LayoutBase>
    );
}

export default DetalheDePessoas;