/**
 * Returns a random item from the provided array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array from which to select a random item.
 * @returns {T | undefined} A random item from the array, or `undefined` if the array is empty or not an array.
 */
export function getRandomArrayItem<T>(array: T[]): T | undefined {
	if (!Array.isArray(array) || array.length === 0) {
		return undefined;
	}
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}
