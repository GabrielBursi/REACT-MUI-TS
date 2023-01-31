export type DetalheCidade = {
    id: number;
    name: string;
}

export type FormDataCidade = Omit<DetalheCidade, 'id'>