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
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const transform1 = compose(wrapInDiv, toLowerCase, trim); // read from right to left
const transform2 = pipe(trim, toLowerCase, wrapInDiv); // read from left to right

transform1(input);
transform2(input);

// const result = wrapInDiv(toLowerCase(trim(input))); // no need this ugly code
