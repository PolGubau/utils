export type Category =
	| "texts"
	| "storage"
	| "functions"
	| "arrays"
	| "objects"
	| "accessibility"
	| "comparators"
	| "parsers"
	| "numbers";
export interface Data {
	name: string;
	version: `${number}.${number}.${number}`;
	utils: Util[];
}

interface Util {
	name: string;
	description: string;
	category: Category;
	tags: string[];
	author: string;
	since: string;
	lastUpdated: string;
	type: string;
	compatibility: string;
	example: Example[];
	props: Prop[];
	return: Return;
	error: null | string;
	notes: string;
	related?: string[];
}

interface Prop {
	name: string;
	type: string;
	default: string | null | number | boolean;
	required: boolean;
	description: string;
}

type BaseReturn = {
	description: string;
};

type Return =
	| (BaseReturn & {
			type:
				| "void"
				| "string"
				| "number"
				| "boolean"
				| "object"
				| "array"
				| "function"
				| "any"
				| string;
			options?: never;
	  })
	| (BaseReturn & {
			type: "enum";
			options: string[];
	  });

interface Example {
	code: string;
	output: string;
}
