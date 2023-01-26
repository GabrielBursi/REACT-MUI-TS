/* eslint-disable no-restricted-globals */
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Icon, IconButton, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";

import { FerramentasDaListagem } from "../../shared/components";

import {useDebounce} from "../../shared/hooks";

import { LayoutBase } from "../../shared/layouts";

import { pessoasServices } from "../../shared/services/api/pessoas/ApiServices";

import { ListagemPessoa } from "../../types";
import { Environment } from "../../shared/environments";

function ListagemDePessoas() {

    const [searchParams, setSearchParams] = useSearchParams()
    const { debounce } = useDebounce()

    const [rows, setRows] = useState<ListagemPessoa[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const navigate = useNavigate()

    const busca = useMemo(() => {
        return searchParams.get('busca') || ''
    }, [searchParams])

    const pagina = useMemo(() => {
        return Number(searchParams.get('pagina') || '1')
    }, [searchParams])

    useEffect(() => {
        
        setIsLoading(true)

        debounce(async () => {
            const data = await pessoasServices.getAll(pagina, busca)
            setIsLoading(false)

            if(data instanceof Error){
                alert(data.message)  
            }else{
                console.log(data);

                setRows(data.data)
                setTotalCount(data.totalCount)
            }
        })
    }, [busca, pagina]);

    async function handleDelete(id: number){
        if(confirm("Realmente deseja apagar?")){

            const res = await pessoasServices.deleteById(id)

            if(res instanceof Error){
                alert(res.message)

            }else{
                setRows(oldRows => {
                    return [
                        ...oldRows.filter(oldRow => oldRow.id !== id)
                    ]
                })
                alert("Registro apagado com sucesso!")
            }
        }
    }
    
    return (
        <LayoutBase 
            titulo="Listagem de Pessoas" 
            barraDeFerramentas={
                    <FerramentasDaListagem
                        mostrarInputBusca 
                        textoBotaoNovo="Nova"
                        textoDaBusca={busca}
                        aoMudarTextoDeBusca={texto => setSearchParams({busca: texto, pagina: '1'}, {replace: true})}
                        aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
                    />
                }>
            <TableContainer component={Paper} variant="outlined" sx={{m: 2, width: 'auto'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ações</TableCell>
                            <TableCell>Nome Completo</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <IconButton size="small" onClick={() => handleDelete(row.id)}>
                                        <Icon>delete</Icon>
                                    </IconButton>
                                    <IconButton size="small" onClick={() => navigate(`/pessoas/detalhe/${row.id}`)}>
                                        <Icon>edit</Icon>
                                    </IconButton>
                                </TableCell>
                                <TableCell>{row.nomeCompleto}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    {totalCount === 0 && !isLoading && (
                        <caption>{Environment.LISTAGEM_VAZIA}</caption>
                    )}

                    <TableFooter>
                        {isLoading && (
                                <TableRow >
                                    <TableCell colSpan={3}>
                                            <LinearProgress variant="indeterminate"/>
                                    </TableCell>
                                </TableRow>
                        )}
                        {(totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS) && (
                            <TableRow >
                                <TableCell colSpan={3}>
                                    <Pagination 
                                        page={pagina}
                                        count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)} 
                                        onChange={(_, newPage) => {setSearchParams({busca, pagina: newPage.toString()}, {replace:true})}}
                                    />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableFooter>
                </Table>
            </TableContainer>
        </LayoutBase>
    );
}


export default ListagemDePessoas;