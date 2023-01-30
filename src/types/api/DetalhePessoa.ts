export type DetalhePessoa = {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

export type TFormData = Omit<DetalhePessoa, 'id'>