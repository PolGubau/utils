import { Card } from "components/card";
import { Link } from "react-router";
import type { Util } from "~/assets/data.types";

import { formatString } from "@polgubau/utils/texts";

type DetailsPageProps = {
	data: Util;
};
export const DetailsPage = ({ data }: DetailsPageProps) => {
	return (
		<section className="flex flex-col pt-20 h-full ">
			<article className="max-w-2xl w-full mx-auto ">
				<Card>
					<nav>
						<Link
							to="/docs"
							className="hover:underline text-xs gap-4 opacity-60 font-thin"
						>
							&lt; Back to List
						</Link>
					</nav>
					<header className="mb-4 space-y-2">
						<h1 className="text-3xl font-bold">{formatString(data.name)}</h1>
						<h2 className="text-neutral-500">{data.description}</h2>
					</header>

					<div className="prose prose-invert max-md:max-w-none mb-4">
						<pre className="">
							{`import { ${data.name} } from "@polgubau/utils/${data.category}";`}
						</pre>
						<h2>Notes</h2>
						<p>{data.notes}</p>

						<h2>Example</h2>
						<ul className="not-prose">
							{data.example.map((example) => (
								<li key={example.code}>
									<pre className="rounded-lg p-2 bg-neutral-500/20 text-sm font-mono whitespace-pre-wrap">
										<code>{example.code}</code>
									</pre>
									<span className="text-xs pl-4">Output: {example.output}</span>
								</li>
							))}
						</ul>

						<h2>Props</h2>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
									<th>Default</th>
									<th>Required</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								{data.props.map((param) => (
									<tr key={param.name}>
										<td>{param.name}</td>
										<td>{param.type}</td>
										<td>{param.default}</td>
										<td>
											{param.required ? (
												<span className="bg-green-500/20 py-1 px-2 rounded-lg">
													Yes
												</span>
											) : (
												<span className="bg-red-500/20 py-1 px-2 rounded-lg">
													No
												</span>
											)}
										</td>
										<td>{param.description}</td>
									</tr>
								))}
							</tbody>
						</table>

						<div className="flex flex-col gap-2">
							<h2>Tags</h2>
							<ul>
								{data.tags.map((tag) => (
									<li key={tag}>
										<span className="bg-neutral-500/20 text-sm px-2 py-1 rounded-full">
											{tag}
										</span>
									</li>
								))}
							</ul>
						</div>
						<pre className="text-left text-xs">
							{JSON.stringify(data, null, 2)}
						</pre>
					</div>
					<nav>
						<Link
							to="/docs"
							className="hover:underline text-xs gap-4 opacity-60 font-thin"
						>
							&lt; Back to List
						</Link>
					</nav>
				</Card>
			</article>
		</section>
	);
};
