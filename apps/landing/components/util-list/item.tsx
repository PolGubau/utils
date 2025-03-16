import type { FuzzyResult, HighlightRanges } from "data/ff";
import { Link } from "react-router";
import type { Util } from "~/assets/data.types";
type ItemProps = {
	data: FuzzyResult<Util>;
};
export const Item = ({ data }: ItemProps) => {
	const { item: util, score, matches } = data;

	type Letter = {
		char: string;
		isHighlighted: boolean;
	};

	const areLettersHighlighted = (
		str: string,
		matches: HighlightRanges | null,
	): Letter[] => {
		if (!matches) {
			return str.split("").map((char) => {
				return { char, isHighlighted: false };
			});
		}

		const letters: Letter[] = str.split("").map((char) => {
			return { char, isHighlighted: false };
		});
		for (const match of matches) {
			const [start, end] = match;
			for (let i = start; i <= end; i++) {
				if (letters[i]) {
					letters[i].isHighlighted = true;
				}
			}
		}
		return letters;
	};
	const parsedName = areLettersHighlighted(util.name, matches[0]);
	const parsedDescription = areLettersHighlighted(util.description, matches[1]);
	return (
		<Link
			to={`/docs/${util.name}`}
			className={"hover:underline p-4 capitalize"}
		>
			<h3>
				{parsedName.map((letter, idx) => (
					<span
						key={`${letter.char + util.name + idx}-name`}
						className={
							letter.isHighlighted
								? "bg-primary text-black first:rounded-l-md last:rounded-r-md"
								: ""
						}
					>
						{letter.char}
					</span>
				))}
			</h3>
			<p>
				{parsedDescription.map((letter, descIndex) => (
					<span
						key={`${letter.char + util.name + descIndex}-desc`}
						className={
							letter.isHighlighted
								? "bg-primary text-black first:rounded-l-md last:rounded-r-md"
								: ""
						}
					>
						{letter.char}
					</span>
				))}
			</p>
		</Link>
	);
};
