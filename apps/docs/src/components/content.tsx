import { CopySnipped } from "./copy-snipped";

export const Content = () => {
	return (
		<section className="prose prose-invert prose-h2:text-primary">
			<h1>Lightweight Utility Library ✨</h1>
			<h2>What and why</h2>
			<p>
				During the last few years <strong>Typescript</strong> has become almost
				my mother tongue after Spanish.
			</p>
			<p>
				After realizing the amount of times I coded again a debounce, throttle
				or "copy to clipboard" function in different projects, I decided to
				create a library that would help me with the most common tasks I do in
				my day to day.
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
				<li>Modular, tree-shakable and lightweight.</li>
				<li>Designed to be simple and easy to use.</li>
				<li>TypeScript friendly with type definitions included.</li>
			</ul>

			<h2>Installation</h2>
			<CopySnipped />

			<h2>Usage</h2>
			<p>Import the utilities you need from the package:</p>
			<pre>
				<code>
					{`
import { copyToClipboard } from "@polgubau/utils";
        `}
				</code>
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
					data.
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
					{`
        import {unique} from "@polgubau/utils/arrays"; const numbers = [1, 2,
					2, 3, 4, 4, 5]; console.log(unique(numbers)); // [1, 2, 3, 4, 5]
        `}
				</code>
			</pre>

			<h2>TypeScript Support</h2>
			<p>
				The library includes full TypeScript support with type definitions
				included.
			</p>

			<h2>Contributing</h2>
			<p>
				Contributions are welcome! Please open an issue or submit a pull request
				on GitHub.
			</p>

			<h2>License</h2>
			<p>MIT License</p>
		</section>
	);
};
