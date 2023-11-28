const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2); // 1
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)]; // 1,4,2,3

// Removing
const removed = numbers.filter((n) => n !== 2);

// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
