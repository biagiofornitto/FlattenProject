/**
 * @author Biagio Fornitto
 * @version 0.0.1
 */


/**
 * @example
 * // returns [1, 2, 3, 4, 5]
 * flatten([1, 2, [3, 4, 5]]);
 * Flattens an array of varying depth;
 * @param {array} arr - The array to flatten
 */
function flattenArray(arr){
	return arr.flat(Infinity)
}
