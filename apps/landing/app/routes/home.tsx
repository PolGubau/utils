import type { Route } from "./+types/home";
import { Homepage } from "../pages/home/home";

export function meta(_args: Route.MetaArgs) {
	return [
		{
			title:
				"Utils - Lightweight Typescript helpers for your Projects 🚀 - Pol Gubau Amores",
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

export default function Home() {
	return <Homepage />;
}
