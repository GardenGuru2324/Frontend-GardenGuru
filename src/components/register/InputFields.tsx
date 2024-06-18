interface InputFieldProps {
  setEmail: (email: string) => void;
  setPassword: (passwoord: string) => void;
  setFullName: (email: string) => void;
}

const InputFields = ({ setEmail, setPassword, setFullName }: InputFieldProps) => {
  return (
    <div>
      <div>
        <input
          placeholder="Email address"
          className="appearance-none relative block w-full p-3 border bg-white rounded-md sm:text-sm"
          required={true}
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <input
          placeholder="Full Name"
          className="appearance-none relative block w-full p-3 border bg-white rounded-md sm:text-sm"
          required={true}
          type="text"
          name="text"
          id="text"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <input
          placeholder="Password"
          className="appearance-none relative block w-full p-3 border bg-white rounded-md sm:text-sm"
          required={true}
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputFields;