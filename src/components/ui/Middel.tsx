interface MiddelProps {
  text: string;
}
const Middel = ({ text }: MiddelProps) => {
  return (
    <>
      <div className="flex-grow border-t border-black"></div>
      <span className="px-4">{text}</span>
      <div className="flex-grow border-t border-black"></div>
    </>
  );
};

export default Middel;
