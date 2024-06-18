import ErrorMessage from "./ErrorMessasge";
import InputFields from "./InputFields";
import RegisterButton from "./RegisterButton";

interface RegisterFormProps {
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setFullName: (email: string) => void;
  handleRegister: (event: React.FormEvent) => void;
  errorMessage: string;
}

const RegisterForm = ({ setPassword, setEmail, errorMessage, handleRegister, setFullName }: RegisterFormProps) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={(e) => handleRegister(e)}>
      <div className="rounded-md shadow-sm gap-4 flex flex-col">
        <InputFields setPassword={setPassword} setEmail={setEmail} setFullName={setFullName} />
      </div>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <div>
        <RegisterButton />
      </div>
    </form>
  );
};

export default RegisterForm;
