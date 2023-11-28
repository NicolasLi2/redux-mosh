// import { produce } from 'immer';
// let book = { title: 'Harry Potter' };

// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.isPublished = true;
//   });
// }

// let updated = publish(book);
// console.log(book);
// console.log(updated);
import { compose, pipe } from 'lodash/fp';

let input = '    JavaScript     ';
let output = '<div>' + input.trim() + '</div>';

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`; // currying function
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap('span')); // read from left to right

console.log(transform(input));
