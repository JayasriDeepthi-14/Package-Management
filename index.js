// Import the boxen module
const boxen = require("boxen");

// Define message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic (default style)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1
  })
);

// SingleDouble style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "singleDouble"
  })
);

// Round style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round"
  })
);
