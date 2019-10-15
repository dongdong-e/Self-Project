// Function_01
function sayHello(){
    console.log('Hello');
}

sayHello(); // result: Hello

function sayHello(your_name){
    console.log('Hello', your_name);
}

sayHello("KYD") // result: Hello KYD

function sayHello(your_name, age){
    console.log('Hello', your_name, " You are", age);
}

sayHello("KYD", 30) // result: Hello KYD, You are 30


// Function_02
function sayHello(name, age){
    console.log("Hello" + name + " you are " + age + " years old!")
}

sayHello("KYD", 30) // result: Hello KYD you are 30 years old!

function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years old!`)
}

sayHello("KYD", 30) // result: Hello KYD you are 30 years old!

//

const calculator = {
    plus: function(a, b){
      return a + b;
    },
    minus: function(a, b){
      return a - b;
    },
    mul: function(a, b){
      return a * b;
    },
    div: function(a, b){
      return a / b;
    },
    square: function(a, b){
      return a ** b;
    },
  }
  
  const plus =calculator.plus(5, 5);
  const minus = calculator.minus(10, 5);
  const mul = calculator.mul(100, 100);
  const div = calculator.div(50, 10);
  const square = calculator.square(2, 3);
  
  console.log(plus, minus, mul, div, square);