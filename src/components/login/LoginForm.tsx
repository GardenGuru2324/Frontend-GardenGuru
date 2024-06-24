import ErrorMessage from "../errors/ErrorMessasge";
import SubmitButton from "../ui/SubmitButton";
import InputFields from "./InputFields";

interface LoginFormProps {
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  handleLogin: (event: React.FormEvent) => void;
  errorMessage: string;
  loading: boolean;
}

const LoginForm = ({ setPassword, setEmail, errorMessage, handleLogin, loading }: LoginFormProps) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={(e) => handleLogin(e)}>
      <div className="rounded-md shadow-sm gap-4 flex flex-col">
        <InputFields setPassword={setPassword} setEmail={setEmail} />
      </div>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <SubmitButton loading={loading} text="Log in" />
    </form>
  );
};

export default LoginForm;
