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

let input = '    JavaScript     ';
let output = '<div>' + input.trim() + '</div>';

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));
