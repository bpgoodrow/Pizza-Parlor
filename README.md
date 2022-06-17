# Pizza Parlor
By Ben Goodrow

This is a html/css/javascript web application that takes a users topping options along with size option and returns the input through an object in javascript to print the order with total cost on the html page.

## Link to GitHubPages


## Technololgies Used
* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

## Description
This is a html/css/javascript web application that takes a users topping options along with size option and returns the input through an object in javascript to print the order with total cost on the html page.

## Setup/Installation Requirements
* Clone this repository to your desktop.
* Navigate to the top level of the portfolio-landing-page-directory.
* Open index.html in your browser.
* Additionally open [ in your web browser.

## Known Bugs
* N/A

## License
MIT

Copyright <2022> <Benjamin Goodrow>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Tests

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["Extra Cheese", "Pepperoni", "Onions",] "Large");
Expected Output: Pizza { toppings: ["Extra Cheese", "Pepperoni", "Onions"] size: "Large" }

Describe: myPizza.Cost()
Test: "It should return a Pizza object with a string of "$10.00"
Expected Output: { toppings: ["Extra Cheese", "Pepperoni", "Onions"] , size: "Large" , "$10.00"}

Describe: myPizza.Cost()
Test: "It should return the cost based on the size of pizza inputted this.size"
Code: myPizza = new Pizza(["Extra Cheese", "Pepperoni", "Onions"], "Large");
Expected Output: myPizza.Cost(); 'Extra Cheese,Pepperoni,Onions, Large, $20.00'

Describe: Orders()
Orders.prototype.addPizza = function(pizza) {
  this.pizzas[Pizza] = pizza;
}

Test: "It should return a pizza object after new pizza is created"
Code: orders.pizzas;
Expected Output: myPizza()

describe: Orders.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
Test: "It should assign and increment an id for each Pizza object passed into Orders"
code: Orders.pizzas;
Expected Output: "return myPizza with an id of 1"
