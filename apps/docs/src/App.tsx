import { Background } from "./components/bg";
import { Card } from "./components/card";
import { Content } from "./components/content";
import { CopySnipped } from "./components/copy-snipped";
import { Header } from "./components/header";
function App() {
	return (
		<div className="min-h-screen w-screen relative overflow-x-hidden">
			<section className="h-screen fixed top-0 w-screen select-none pointer-events-none">
				<Background />
			</section>
			<main className="z-20 h-full w-screen mb-20">
				<section className="flex gap-[40vh] flex-col items-center pt-[30vh] h-full">
					<Card>
						<Header />
						<CopySnipped />
					</Card>

					<Card>
						<Content />
					</Card>
				</section>
			</main>
		</div>
	);
}

export default App;
