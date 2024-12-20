import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import useRegister from "../../hooks/useRegister";
import RegisterForm from "./registerForm";
import SignInButton from "./signInButton";
import FormHeader from "../ui/formHeader";
import TextDivider from "../ui/textDivider";

export default function Register() {
  let navigate = useNavigate();
  const { registerUser } = useRegister();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    const fullName: string = firstName + " " + lastName;

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
    <div className="w-full h-svh flex justify-center items-center bg-[url('/login-bg.png')] bg-cover bg-center">
      <div className="max-w-lg w-full m-6">
        <div className="bg-white bg-opacity-5 backdrop-blur-sm drop-shadow-lg rounded-3xl shadow-2xl">
          <div className="px-8 py-6">
            <FormHeader title="Welcome" text="Enter your account to register for this app" />
            <RegisterForm
              handleRegister={handleRegister}
              setEmail={setEmail}
              setFirstName={setFirstName}
              setLastName={setLastName}
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
