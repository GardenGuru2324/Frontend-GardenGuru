interface SuccesMessageProps {
  succesMessage: string;
}

const SuccesMessage = ({ succesMessage }: SuccesMessageProps) => {
  return (
    <div
      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
      role="alert"
      id="succes-message"
    >
      <p className="text-sm">{succesMessage}</p>
    </div>
  );
};

export default SuccesMessage;
