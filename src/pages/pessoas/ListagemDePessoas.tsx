import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { FerramentasDaListagem } from "../../shared/components";

import {useDebounce} from "../../shared/hooks";

import { LayoutBase } from "../../shared/layouts";

import { pessoasServices } from "../../shared/services/api/pessoas/ApiServices";

import { ListagemPessoa } from "../../types";

function ListagemDePessoas() {

    const [searchParams, setSearchParams] = useSearchParams()
    const { debounce } = useDebounce()

    const [rows, setRows] = useState<ListagemPessoa[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const busca = useMemo(() => {
        return searchParams.get('busca') || ''
    }, [searchParams])

    useEffect(() => {
        
        setIsLoading(true)

        debounce(async () => {
            const res = await pessoasServices.getAll()
            setIsLoading(false)

            if(res instanceof Error){
                alert(res.message)
            }else{
                console.log(res);

                setRows(res.data)
                setTotalCount(res.totalCount)
            }
        })
    }, [busca]);
    
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
                                <TableCell>Ações</TableCell>
                                <TableCell>{row.nomeCompleto}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </LayoutBase>
    );
}


export default ListagemDePessoas;