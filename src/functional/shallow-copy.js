const person = { name: 'John' };
const _updated = Object.assign({}, person, { name: 'Bob', age: 30 }); // copy the content of an object to another object
const updated = { ...person, name: 'Bob', age: 30 }; // another easy way to copy an object to another object
// both of these are shallow copy
console.log(updated);

// shallow copy example:
const person2 = {
  name: 'John',
  address: {
    country: 'USA',
    city: 'San Francisco',
  },
};
const updated2 = { ...person2, name: 'Bob' };
updated2.address.city = 'New York';
console.log(person2); // person2's city also change to 'New York', because it's shallow copy

// deep copy example:
const updated3 = {
  ...person2,
  name: 'Bob',
  address: {
    ...person2.address,
    city: 'New York',
  },
};
