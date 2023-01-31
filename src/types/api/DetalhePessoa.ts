export type DetalhePessoa = {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

export type FormData = Omit<DetalhePessoa, 'id'>