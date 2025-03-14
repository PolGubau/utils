export const Header = () => {
	return (
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
				<a href="https://polgubau.com/" target="_blank" rel="noreferrer">
					<h2>@polgubau/</h2>
				</a>
				<h1>
					{/* <span className="text-4xl font-bold">Typescript</span> */}
					<span className="text-4xl font-bold text-yellow-500"> Utils</span>
				</h1>
			</div>
		</header>
	);
};
