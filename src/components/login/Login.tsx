import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import useLogin from "../../hooks/useLogin";
import SignUpButton from "./SignUpButton";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import Middel from "../ui/Middel";

const Login = () => {
  const { loginUser } = useLogin();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    const response = await loginUser(email, password);

    if ("error" in response && response.error) {
      if (response.status) {
        setErrorMessage(response.data.message);
        setLoading(false);
      }
    } else {
      login(response.userId!);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/login-bg.png')] bg-cover bg-center">
      <div className="max-w-lg w-full m-6">
        <div className="bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg rounded-3xl shadow-2xl">
          <div className="px-8 py-6">
            <LoginHeader />
            <LoginForm
              setEmail={setEmail}
              setPassword={setPassword}
              errorMessage={errorMessage!}
              handleLogin={handleLogin}
              loading={loading}
            />
          </div>

          <div className="flex items-center justify-center px-6">
            <Middel text="or sign up" />
          </div>

          <div className="px-8 py-6 text-center">
            <SignUpButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;