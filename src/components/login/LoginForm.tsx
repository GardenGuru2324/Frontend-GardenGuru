import ErrorMessage from "./ErrorMessasge";
import InputFields from "./InputFields";
import LoginButton from "./LoginButton";

interface LoginFormProps {
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  handleLogin: (event: React.FormEvent) => void;
  errorMessage: string;
}

const LoginForm = ({ setPassword, setEmail, errorMessage, handleLogin }: LoginFormProps) => {
  return (
    <form className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm gap-4 flex flex-col">
        <InputFields setPassword={setPassword} setEmail={setEmail} />
      </div>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <div>
        <LoginButton handleLogin={(e) => handleLogin(e)} />
      </div>
    </form>
  );
};

export default LoginForm;
