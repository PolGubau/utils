import { rawData } from "~/assets/data";
import type { Category, Data } from "~/assets/data.types";
import createFuzzySearch from "./ff";
class DataAccess {
	private data: Data;

	constructor() {
		this.data = rawData;
	}

	public getAllUtils() {
		return this.data;
	}

	protected getUtilBy(key: keyof Data["utils"][0], value: string) {
		return this.data.utils.find((util) => util[key] === value);
	}
	public getUtilByName(uName: string) {
		return this.getUtilBy("name", uName);
	}
	public getUtilByCategory(category: Category) {
		return this.getUtilBy("category", category);
	}
	public filterUtils({
		q = "",
		category = "all",
	}: {
		q?: string;
		category?: Category | "all";
	}) {
		// return this.data.utils.filter((util) => {

		// 	const nameMatch = q ? util.name.toLowerCase().includes(q) : true;

		// 	const categoryMatch =
		// 		category && category !== "all" ? util.category === category : true;
		// 	return nameMatch && categoryMatch;
		// });
		const fuzzySearch = createFuzzySearch(this.data.utils, {
			// search by `name` property
			// key: "name",

			// search by multiple properties:
			getText: (item) => [item.name, item.description],
		});
		// return this.data.utils.filter((util) => {
		// 	const nameMatch = q ? fuzzySearch(util.name).length > 0 : true;
		// 	const categoryMatch =
		// 		category && category !== "all" ? util.category === category : true;
		// 	return nameMatch && categoryMatch;
		// });
		const filtered = fuzzySearch(q);

		if (category && category !== "all") {
			return filtered.filter((util) => util.item.category === category);
		}

		// lower is better score
		// const sortedByScore = filtered.sort((a, b) => a.score - b.score);

		return filtered;
	}
}

export const dataAccess = new DataAccess();
