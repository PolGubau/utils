import { Background } from "components/bg";
import { Card } from "components/card";
import { Content } from "components/content";
import { CopySnipped } from "components/copy-snipped";
import { Header } from "components/header";
import { Link } from "react-router";

export function Homepage() {
	return (
		<section className="flex gap-[40vh] flex-col items-center pt-[30vh] h-full">
			<Card>
				<Header />
				<CopySnipped />
				<div className="flex justify-center text-sm gap-4 opacity-80">
					<Link to="/docs" className="hover:underline">
						Go to Docs &#8599;
					</Link>
				</div>
			</Card>

			<Card>
				<Content />
				<footer className=" py-4 flex justify-center text-sm gap-4 opacity-80">
					<Link
						to="/docs"
						className="hover:underline text-center bg-neutral-500/20 w-fit py-2 px-4 rounded-xl"
					>
						Go to Docs &#8599;
					</Link>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						to="https://github.com/PolGubau/utils"
						className="hover:underline text-center w-fit py-2 px-4 rounded-xl"
					>
						Github
					</Link>
				</footer>
			</Card>
		</section>
	);
}
