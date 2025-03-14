import { Background } from "./components/bg";
import pkg from "@polgubau/utils";
function App() {
	return (
		<div className="h-screen w-screen relative text-white overflow-x-hidden">
			<main className="z-10 grid grid-rows-[1fr_auto] h-screen w-screen">
				<section className="flex items-center justify-center h-full ">
					<div className="flex flex-col gap-6 backdrop-blur-md p-6 rounded-3xl bg-gradient-to-b from-[#00000000] to-[#00000099] animate-pump-slow">
						<header className="flex gap-4">
							<img
								data-component="Avatar"
								className="rounded-full w-[48px] h-[48px] border-2 border-neutral-500/50"
								alt=""
								width="48"
								height="48"
								src="https://avatars.githubusercontent.com/u/63197171?v=4&amp;size=64"
							/>
							<div className="flex flex-col gap-1">
								<a
									href="https://polgubau.com/"
									target="_blank"
									rel="noreferrer"
								>
									<h2>@polgubau/</h2>
								</a>
								<h1>
									{/* <span className="text-4xl font-bold">Typescript</span> */}
									<span className="text-4xl font-bold text-yellow-500">
										{" "}
										Utils
									</span>
								</h1>
							</div>
						</header>

						<pre onClick={() => copyToClipboard("pnpm i @polgubau/utils")}>
							<code className="flex w-fit border border-neutral-500/50 rounded-xl px-4 py-2 bg-neutral-900/50 cursor-copy">
								pnpm i @polgubau/utils
							</code>
						</pre>
					</div>
				</section>
				<footer className="p-4">
					<p className="text-white">:)</p>
				</footer>
			</main>

			<section className="h-screen fixed top-0 w-screen -z-10 bg-black">
				<Background />
			</section>
		</div>
	);
}

export default App;
