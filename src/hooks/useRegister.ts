import {
	postRegister,
	RegisterError,
	RegisterResponse,
} from '../services/users/register';

const useRegister = () => {
	const registerUser = async (
		email: string,
		fullName: string,
		password: string,
	): Promise<RegisterResponse | RegisterError> => {
		const response = await postRegister(email, fullName, password);
		return response;
	};

	return {
		registerUser,
	};
};

export default useRegister;
