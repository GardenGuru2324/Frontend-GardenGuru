import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Middel from "../ui/Middel";
import RegisterForm from "./RegisterForm";
import RegisterHeader from "./RegisterHeader";
import SignInButton from "./SignInButton";
import useRegister from "../../hooks/useRegister";

export default function Register() {
  let navigate = useNavigate();
  const { registerUser } = useRegister();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await registerUser(email, fullName, password);

    if ("error" in response && response.error) {
      if (response.status) {
        setErrorMessage(response.data.message);
      }
    } else {
      login(response.userId!);
      navigate("/");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/login-bg.png')] bg-cover bg-center">
      <div className="max-w-lg w-full m-6">
        <div className="bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg rounded-3xl shadow-2xl">
          <div className="px-8 py-6">
            <RegisterHeader />
            <RegisterForm
              handleRegister={handleRegister}
              setEmail={setEmail}
              setFullName={setFullName}
              setPassword={setPassword}
              errorMessage={errorMessage!}
            />
          </div>

          <div className="flex items-center justify-center px-6">
            <Middel text="already have an account" />
          </div>

          <div className="px-8 py-6 text-center">
            <SignInButton />
          </div>
        </div>
      </div>
    </div>
  );
}
