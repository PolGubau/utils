import { Api } from "./docs/fns/api";
import { CopySnipped } from "./copy-snipped";
export const Content = () => {
	return (
		<section className="prose prose-invert prose-h2:text-primary prose-code:text-yellow-50">
			<h1>Lightweight Utility Library ✨</h1>
			<h2>What and why</h2>
			<p>
				During the last few years <strong>Typescript</strong> has become almost
				my mother tongue after Spanish.
			</p>
			<p>
				After realizing the <strong>amount of times</strong> I coded again a
				debounce, throttle or "copy to clipboard" function in different
				projects, I decided to create a library that would help me with the most
				common tasks I do in my day to day.
			</p>
			<p>
				<strong>@polgubau/utils</strong> is a utility library designed to
				provide essential functions for everyday JavaScript and TypeScript
				development. It is modular, framework agnostic, tree-shakable and
				optimized for performance.
			</p>

			<h3>This is not ⚠️</h3>
			<ul>
				<li>A complete library that will solve all your problems.</li>
				<li>A replacement for Lodash or Underscore.</li>
				<li>A library that will bloat your bundle size.</li>
			</ul>

			<h3>This is ✅</h3>
			<ul>
				<li>A collection of small, focused utility functions.</li>
				<li>Modular, tree-shakable and lightweight both for CJS and ESM.</li>
				<li>Designed to be simple and easy to use.</li>
				<li>TypeScript friendly with type definitions included.</li>
			</ul>

			<h2>How</h2>
			<p>Install the library using your package manager of choice:</p>
			<CopySnipped />

			<h2>Usage</h2>
			<p>Import the utilities you need from the package:</p>
			<pre>
				<code>{`import { copyToClipboard } from "@polgubau/utils";`}</code>
			</pre>

			<p>
				To reduce bundle size, you can import specific modules or functions as
				needed:
			</p>
			<pre className="flex flex-col gap-2">
				<code>{`import { copyToClipboard } from "@polgubau/utils/functions";`}</code>

				<code>{`import { shuffle } from "@polgubau/utils/arrays";`}</code>
			</pre>

			<h2>Available Modules</h2>
			<ul>
				<li>
					<strong>Storage</strong> - Utilities for working with localStorage and
					sessionStorage.
				</li>
				<li>
					<strong>Accessibility</strong> - Helpers to improve web accessibility.
				</li>
				<li>
					<strong>Arrays</strong> - Functions to manipulate arrays efficiently.
				</li>
				<li>
					<strong>Comparators</strong> - Utility functions for sorting and
					comparing data.
				</li>
				<li>
					<strong>Functions</strong> - Higher-order functions and utility
					methods.
				</li>
				<li>
					<strong>Numbers</strong> - Mathematical and number-related utilities.
				</li>
				<li>
					<strong>Objects</strong> - Object manipulation and transformation
					helpers.
				</li>
				<li>
					<strong>Parsers</strong> - Functions for parsing different types of
					data as JSON.
				</li>
				<li>
					<strong>Texts</strong> - String and text processing utilities.
				</li>
			</ul>

			<h2>Example</h2>
			<p>
				Using the <code>arrays</code> module:
			</p>
			<pre>
				<code>
					{`import {limitArray} from "@polgubau/utils/arrays"; 
const {limitedArray} = limitArray([1, 2, 3, 4, 5]); 
console.log(unique(numbers)); // [1, 2, 3]`}
				</code>
			</pre>

			<h2>TypeScript Support</h2>
			<p>
				As it should always be, this library includes full TypeScript support
				with type definitions included.
			</p>
			<Api />
		</section>
	);
};
