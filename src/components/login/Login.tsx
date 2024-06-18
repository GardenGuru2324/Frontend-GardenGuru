import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import useLogin from "../../hooks/useLogin";
import ErrorMessage from "./ErrorMessasge";
import InputFields from "./InputFields";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";


const Login = () => {
	const { loginUser } = useLogin();

	const { login } = useContext(AuthContext);

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();

		const response = await loginUser(email, password);
        console.log(response);
        
		if ("error" in response && response.error) {
			if (response.status) {
				setErrorMessage(response.data.message);
			}
		} else {
			login(response.userId!);
		}
	};

	return (
		<div className="w-full h-screen flex justify-center items-center bg-[url('/login-bg.png')] bg-cover bg-center">
			<div className="max-w-lg w-full m-6">
				<div className="bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg rounded-3xl">
					<div className="px-8 py-6">
						<h2 className="text-center text-3xl font-extrabold text-white">Welcome Back</h2>
						<p className="mt-4 text-center">Enter your account to login for this app</p>
						<form className="mt-8 space-y-6">
							<div className="rounded-md shadow-sm gap-4 flex flex-col">
								<InputFields setPassword={setPassword} setEmail={setEmail} />
							</div>

							{errorMessage && <ErrorMessage errorMessage={errorMessage} />}

							<div>
								<LoginButton handleLogin={(e) => handleLogin(e)} />
							</div>
						</form>
					</div>

					<div className="flex items-center justify-center px-6">
						<div className="flex-grow border-t border-black"></div>
    					<span className="px-4">or sign up</span>
    					<div className="flex-grow border-t border-black"></div>
					</div>

					<div className="px-8 py-6 text-center">
						<SignUpButton/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
