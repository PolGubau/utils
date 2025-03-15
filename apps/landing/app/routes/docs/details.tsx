import { dataAccess } from "data/dataAccess";
import { ListPage } from "../../pages/docs/list";
import type { Route } from "./+types/details";
import { DetailsPage } from "~/pages/docs/details";

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

export async function loader({ params }: Route.LoaderArgs) {
	const utilName = params.util;
	const util = dataAccess.getUtilByName(utilName);

	return { data: util ?? null };
}

export default function ListMetaPage({ loaderData }: Route.ComponentProps) {
	return (
		<>
			{loaderData?.data !== null ? (
				<DetailsPage data={loaderData.data} />
			) : (
				<div>No data available</div>
			)}
		</>
	);
}
