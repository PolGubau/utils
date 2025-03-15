import { Card } from "components/card";
import { dataAccess } from "data/dataAccess";
import { useState } from "react";
import { Link } from "react-router";
import type { Data } from "~/assets/data.types";
type ListPageProps = {
	data: Data;
};
export const ListPage = (props: ListPageProps) => {
	const [search, setSearch] = useState("");

	const [utils, setUtils] = useState(props.data.utils);
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase();
		const fuzzyResult = dataAccess.filterUtils({
			q: value,
		});
		const values = fuzzyResult.map((util) => util.item);
		setUtils(values);
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
				<ul className="flex flex-col gap-2 w-full md:min-w-md">
					{utils.map((util) => (
						<li key={util.name}>
							<Link
								to={`/docs/${util.name}`}
								className="hover:underline capitalize"
							>
								{util.name}
							</Link>
						</li>
					))}
				</ul>{" "}
			</Card>
		</section>
	);
};
