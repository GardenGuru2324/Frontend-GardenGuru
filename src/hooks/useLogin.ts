import { LoginError, LoginResponse, postLogin } from '../services/users/login';

const useLogin = () => {
	const loginUser = async (
		email: string,
		password: string,
	): Promise<LoginResponse | LoginError> => {
		const response = await postLogin(email, password);
		return response;
	};

	return {
		loginUser,
	};
};

export default useLogin;
