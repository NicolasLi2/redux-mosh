// function with only one parameter
function add(a) {
  return function (b) {
    return a + b;
  };
}

// change to arrow function
const add2 = (a) => (b) => a + b;

add(1)(5);
