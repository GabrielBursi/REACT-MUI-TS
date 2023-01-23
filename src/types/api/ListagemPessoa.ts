
export type ListagemPessoa = {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

export type PessoasComTotalCount = {
    data: ListagemPessoa[],
    totalCount: number
}
