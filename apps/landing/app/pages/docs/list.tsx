import { Card } from "components/card";
import { List } from "components/util-list/list";
import { dataAccess } from "data/dataAccess";
import type { FuzzyResult, HighlightRanges } from "data/ff";
import { useState } from "react";
import { Link } from "react-router";
import type { Data, Util } from "~/assets/data.types";
type ListPageProps = {
	data: Data;
};
export const ListPage = (props: ListPageProps) => {
	const [search, setSearch] = useState("");

	const initList: FuzzyResult<Util>[] = props.data.utils.map((util) => {
		return { item: util, score: 0, matches: [] };
	});
	const [data, setData] = useState<FuzzyResult<Util>[]>(initList);

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			setData(initList);
			setSearch("");
			return;
		}
		const value = e.target.value.toLowerCase();
		const fuzzyResult = dataAccess.filterUtils({
			q: value,
		});
		setData(fuzzyResult);
		setSearch(value);
	};

	return (
		<section className="flex gap-[10vh] flex-col items-center pt-20 h-full">
			<Card>
				<div className="text-xs gap-4 opacity-60 font-thin">
					<Link to="/" className="hover:underline">
						&lt; Back to Home
					</Link>
				</div>
				<h1 className="text-3xl font-bold text-center mb-4">Util List</h1>
				<input
					type="search"
					value={search}
					className="w-full py-2 px-3 border rounded-lg md:min-w-sm"
					onChange={onSearch}
					placeholder="Search..."
				/>
			</Card>

			<Card>
				<List data={data} />
			</Card>
		</section>
	);
};
