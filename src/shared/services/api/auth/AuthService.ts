import { Auth } from "../../../../types/api";
import Api from "../../AxiosConfig";

const auth = async (email: string, password: string): Promise<Auth | Error> => {
    try {
        const { data } = await Api.get('/auth', { data: { email, password } });

        if (data) {
            return data;
        }

        return new Error('Erro no login.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro no login.');
    }
};

export const AuthService = {
    auth,
};