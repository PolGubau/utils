import { copyToClipboard } from "@polgubau/utils/functions";
import { useState } from "react";
export const CopySnipped = () => {
	const [isCopied, setIsCopied] = useState(false);

	const conditionalClassName = isCopied
		? "outline-green-300/50 bg-green-500/10 text-white outline-2"
		: "outline-neutral-500/50 text-white/80";

	const handleCopy = () => {
		copyToClipboard("pnpm i @polgubau/utils");
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<button
			type="button"
			onClick={handleCopy}
			className={`flex w-fit border-0 outline transition-all rounded-xl px-4 py-2 ${conditionalClassName} cursor-pointer`}
		>
			<code className="not-prose">pnpm i @polgubau/utils</code>
		</button>
	);
};
