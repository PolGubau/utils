interface HeadingProps {
	text: string;
	isExiting: boolean;
	className?: string;
	enterAnimation?: string;
	exitAnimation?: string;
	delay?: number;
}

export const Heading = (props: HeadingProps) => {
	const {
		text,
		isExiting,
		className,
		delay = 0.05,
		enterAnimation = "animate-slide-in-top",
		exitAnimation = "animate-slide-out-top",
	} = props;
	return (
		<div className={`w-full flex items-start overflow-hidden  ${className}`}>
			{text.split("").map((char, index) => (
				<span
					key={`${char}-${
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						index
					}`}
					className={`inline-block  ${isExiting ? exitAnimation : enterAnimation}`}
					style={{
						animationDelay: `${index * delay}s`,
						animationFillMode: "both",
					}}
				>
					{char === " " ? "\u00A0" : char}
				</span>
			))}
		</div>
	);
};
