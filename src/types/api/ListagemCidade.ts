export type ListagemCidade = {
    id: number;
    name: string;
}

export type CidadesComTotalCount = {
    data: ListagemCidade[];
    totalCount: number;
}