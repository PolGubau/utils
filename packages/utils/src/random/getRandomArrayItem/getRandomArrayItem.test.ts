import { describe, it, expect } from "vitest";
import { getRandomArrayItem } from "./getRandomArrayItem";

describe("getRandomArrayItem", () => {
	it("should return undefined for an empty array", () => {
		const result = getRandomArrayItem([]);
		expect(result).toBeUndefined();
	});

	it("should return undefined for a non-array input", () => {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const result = getRandomArrayItem(null as any);
		expect(result).toBeUndefined();
	});

	it("should return an item from the array", () => {
		const array = [1, 2, 3, 4, 5];
		const result = getRandomArrayItem(array);
		expect(array).toContain(result);
	});

	it("should return the only item in a single-element array", () => {
		const array = [42];
		const result = getRandomArrayItem(array);
		expect(result).toBe(42);
	});

	it("should return one of the items in a multi-element array", () => {
		const array = ["a", "b", "c", "d"];
		const result = getRandomArrayItem(array);
		expect(array).toContain(result);
	});
});
