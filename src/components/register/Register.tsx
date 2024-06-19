import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import RegisterForm from "./RegisterForm";
import SignInButton from "./SignInButton";
import useRegister from "../../hooks/useRegister";
import FormHeader from "../ui/FormHeader";
import TextDivider from "../ui/TextDivider";

export default function Register() {
  let navigate = useNavigate();
  const { registerUser } = useRegister();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    const response = await registerUser(email, fullName, password);

    if ("error" in response && response.error) {
      if (response.status) {
        setErrorMessage(response.data.message);
        setLoading(false);
      }
    } else {
      login(response.userId!);
      navigate("/");
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/login-bg.png')] bg-cover bg-center">
      <div className="max-w-lg w-full m-6">
        <div className="bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg rounded-3xl shadow-2xl">
          <div className="px-8 py-6">
            <FormHeader title="Welcome" text="Enter your account to register for this app" />
            <RegisterForm
              handleRegister={handleRegister}
              setEmail={setEmail}
              setFullName={setFullName}
              setPassword={setPassword}
              errorMessage={errorMessage!}
              loading={loading}
            />
          </div>

          <div className="flex items-center justify-center px-6">
            <TextDivider text="I already have an account" />
          </div>

          <div className="px-8 py-6 text-center">
            <SignInButton />
          </div>
        </div>
      </div>
    </div>
  );
}
