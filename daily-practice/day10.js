// Day 10: JS Modules & Sets/Maps

// ----------------------------------------------------------------------
// 1. JS Modules (import/export)
// ----------------------------------------------------------------------

// Import the default export (we can name it whatever we want, e.g., 'mathOperation')
import mathOperation from './utils.js'; 

// Import the named exports (must use their exact names, wrapped in {} )
import { SITE_NAME, formatName } from './utils.js';

console.log(`--- 1. Modules Practice ---`);
console.log(`Site: ${SITE_NAME}`);
console.log(`Formatted Name: ${formatName("Diya", "Agarwal")}`); 
console.log(`Default Export Result: ${mathOperation(7, 3)}`); 


// ----------------------------------------------------------------------
// 2. Advanced Array Methods: flat() and flatMap()
// ----------------------------------------------------------------------
console.log(`\n--- 2. Advanced Array Methods ---`);

// The flat() method creates a new array with all sub-array elements 
// recursively concatenated up to the specified depth.
const nestedArray = [1, 2, [3, 4, [5, 6]], 7];
const flattenedOnce = nestedArray.flat(1); // Flattens one level deep
const fullyFlattened = nestedArray.flat(Infinity); // Flattens all levels

console.log("Flattened Once:", flattenedOnce); 
// Expected: [1, 2, 3, 4, [5, 6], 7]

console.log("Fully Flattened:", fullyFlattened); 
// Expected: [1, 2, 3, 4, 5, 6, 7]


// The flatMap() method is a combination of map() followed by flat() with a depth of 1.
const words = ["Hello World", "JS Mastery", "Awesome Code"];
const splitWords = words.flatMap(sentence => sentence.split(" "));

console.log("Flat Mapped Words:", splitWords);
// Expected: ["Hello", "World", "JS", "Mastery", "Awesome", "Code"]


// ----------------------------------------------------------------------
// 3. Sets and Maps (DSA Preparation - O(1) Lookup)
// ----------------------------------------------------------------------
console.log(`\n--- 3. Sets and Maps ---`);

// 🎯 Challenge: Find unique items and count their frequency efficiently.

const data = [1, 5, 2, 1, 8, 5, 1, 9, 2, 2];
const uniqueNames = ["Alice", "Bob", "Alice", "Charlie", "Bob", "Alice"];


// ** SETS: Perfect for storing unique values. O(1) for adding, deleting, and checking if a value exists. **
const uniqueSet = new Set(data);

console.log("Unique Numbers (Set):", uniqueSet);
console.log("Does the set have 8?", uniqueSet.has(8)); 
// Expected: true


// ** MAPS: Perfect for key-value storage where keys can be anything. O(1) for getting/setting keys. **
// Let's use a Map to count the frequency of names (The Counting Pattern from Day 7, but using Map!)

/**
 * Counts the frequency of each item in an array using a Map.
 * @param {string[]} arr 
 * @returns {Map<string, number>}
 */
function countFrequencies(arr) {
    const frequencyMap = new Map();

    for (const item of arr) {
        // Get the current count, or 0 if it's the first time seeing the item
        const count = frequencyMap.get(item) || 0;
        
        // Set the new count
        frequencyMap.set(item, count + 1);
    }
    
    return frequencyMap;
}

const nameCounts = countFrequencies(uniqueNames);

console.log("Name Frequencies (Map):", nameCounts); 
console.log("Alice's Count:", nameCounts.get("Alice")); // Expected: 3