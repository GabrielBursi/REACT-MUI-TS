import { PessoasComTotalCount, DetalhePessoa } from '../../../../types/api';
import { Environment } from '../../../environments'
import Api from '../../AxiosConfig'

async function getAll(page = 1, filter = ''):Promise<PessoasComTotalCount | Error>{
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            };
        }

        return new Error('Erro ao listar os registros.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    }
}

async function getById(id: number): Promise<DetalhePessoa | Error>{
    try {
        const { data } = await Api.get(`/pessoas/${id}`);

        if (data) {
            return data;
        }

        return new Error('Erro ao consultar o registro.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao consultar o registro.');
    }
}

async function create(dados: Omit<DetalhePessoa, 'id'>): Promise < number | Error > {
    try {
        const { data } = await Api.post<DetalhePessoa>('/pessoas', dados);

        if (data) {
            return data.id;
        }

        return new Error('Erro ao criar o registro.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
    }
}

async function updateById(id: number, dados: DetalhePessoa): Promise<void | Error> {
    try {
        await Api.put(`/pessoas/${id}`, dados);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
    }
}

async function deleteById(id: number):Promise<void | Error>  {
    try {
        await Api.delete(`/pessoas/${id}`);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
    }
}

export const pessoasServices = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}
