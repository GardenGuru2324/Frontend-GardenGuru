interface TextDividerProps {
	text: string;
}
const TextDivider = ({ text }: TextDividerProps) => {
	return (
		<>
			<div className="flex-grow border-t border-black" />
			<span className="px-4">{text}</span>
			<div className="flex-grow border-t border-black" />
		</>
	);
};

export default TextDivider;
