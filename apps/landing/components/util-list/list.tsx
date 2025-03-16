import type { FuzzyResult } from "data/ff";
import type { Util } from "~/assets/data.types";
import { Item } from "./item";
type ListProps = {
	data: FuzzyResult<Util>[];
};
export const List = (props: ListProps) => {
	const { data } = props;
	return (
		<ul className="flex flex-col gap-2 w-full md:min-w-md">
			{data.map((d) => {
				return (
					<li key={d.item.name} className="flex">
						<Item data={d} />
					</li>
				);
			})}
		</ul>
	);
};
