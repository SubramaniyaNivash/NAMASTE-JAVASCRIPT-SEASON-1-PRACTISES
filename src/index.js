//EVENT LOOP
console.log("Start");
function eventLoop(message) {
  console.log(message);
}
setTimeout(() => {
  eventLoop("Connection Time-out");
}, 3000);
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-Host": "alpha-vantage.p.rapidapi.com"
  }
};

fetch(
  "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response.message))
  .catch((err) => console.error(err));
console.log("end");

//CLOSURE
function a() {
  let a = 10;
  return function b() {
    let b = 7;
    return function c() {
      console.log(a, b);
    };
  };
}
a()()();

//CONSTRUCTOR FUNCTION
function Counter() {
  let count = 0;
  this.incrementCounter = () => {
    count++;
    console.log(count);
  };
  this.decrementCounter = () => {
    count--;
    console.log(count);
  };
}
const myCounter = new Counter();
myCounter.decrementCounter();
myCounter.incrementCounter();

//FUNCTION STATEMENT // FUNCTION DECLERATION
function functionStatement() {
  console.log("This is Function Statement as well as  Function Decleration");
}

//FUNCTION EXPRESSION
const functionExpression = function expression() {
  console.log("This is Function Expression");
};

//ANONYMOUS FUNCTION
const anonymous = function () {
  console.log("This is anonymous function");
};
