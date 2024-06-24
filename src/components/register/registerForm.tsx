import ErrorMessage from "../errors/errorMessasge";
import SubmitButton from "../ui/submitButton";
import InputFields from "./inputFields";

interface RegisterFormProps {
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setFullName: (email: string) => void;
  handleRegister: (event: React.FormEvent) => void;
  errorMessage: string;
  loading: boolean;
}

const RegisterForm = ({
  setPassword,
  setEmail,
  errorMessage,
  handleRegister,
  setFullName,
  loading,
}: RegisterFormProps) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={(e) => handleRegister(e)}>
      <div className="rounded-md shadow-sm gap-4 flex flex-col">
        <InputFields setPassword={setPassword} setEmail={setEmail} setFullName={setFullName} />
      </div>

      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <SubmitButton loading={loading} text="Register" />
    </form>
  );
};

export default RegisterForm;
