import { ListPage } from "../../pages/docs/list";
import { dataAccess } from "data/dataAccess";
import type { Route } from "./+types/list";

export function meta(_args: Route.MetaArgs) {
	return [
		{
			title:
				"Docs - Utils, a lightweight Typescript helpers for your Projects 🚀 - Pol Gubau Amores",
		},
		{
			name: "description",
			content:
				"Documentation of @polgubau/utils, a framework agnostic library with builtin helper functions for your typescript project",
		},
		{
			name: "keywords",
			content: "typescript, utils, helpers, library, framework agnostic",
		},
		{
			name: "author",
			content: "Pol Gubau Amores",
		},
	];
}

export async function loader(_a: Route.LoaderArgs) {
	const allUtils = dataAccess.getAllUtils();
	return { data: allUtils };
}

export default function DocsListPAge({ loaderData }: Route.ComponentProps) {
	const data = loaderData.data;

	return <ListPage data={data} />;
}
