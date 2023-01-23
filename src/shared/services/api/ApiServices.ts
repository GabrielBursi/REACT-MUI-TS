import { PessoasComTotalCount } from '../../../types';
import { Environment } from '../../environments'
import Api from '../AxiosConfig'

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

async function getById() {

}

async function create() {

}

async function updateById() {

}

async function deleteById() {

}

export {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}