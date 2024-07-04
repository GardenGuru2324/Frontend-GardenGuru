interface TextDividerProps {
	text: string;
}
const TextDivider = ({ text }: TextDividerProps) => {
	return (
		<>
			<div className="flex-grow border-t border-black"></div>
			<span className="px-4">{text}</span>
			<div className="flex-grow border-t border-black"></div>
		</>
	);
};

export default TextDivider;
