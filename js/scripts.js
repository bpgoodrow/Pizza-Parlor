function Orders() {
  this.pizzas = {}; // List of Pizza objects
  this.currentId = 0;
}

Orders.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[Pizza] = pizza;
}

Orders.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Orders.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};

Orders.prototype.toString = function() {
  return "pizza" + this.currentId;
}

// @param toppings - comma separated list of toppings
// @param size - size of pizze (small,medium, large)

Pizza.prototype.toString = function () {
  return "toppings: " + this.toppings + ", " + "size: " + this.size;
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.Cost = function (cost) {
  if (this.size === "Small") {
    return this.toppings + ", " + this.size + ", " + "$10.00";
  } else if (this.size === "Medium") {
    return this.toppings + ", " + this.size + ", " + "$15.00";
  } else if (this.size === "Large") {
    return this.toppings + ", " + this.size + ", " + "$20.00"};
  return cost;
}

// let orders = new Orders();
// let myPizza = new Pizza(["Extra Cheese", "Pepperoni", "Onions"], "Large");
// myPizza.Cost();
// orders.addPizza(myPizza);

let orders = new Orders();

function displayPizzaOrders(ordersToDisplay) {
  let pizzaOrders = $("#order-summary");
  let htmlForPizzaInfo = "";
  // console.log(Object.keys(ordersToDisplay))
  Object.keys(ordersToDisplay.pizzas).forEach(function(key) {
    const pizza = ordersToDisplay.findPizza(key);
    htmlForPizzaInfo += "<p" + pizza.id + ">" + pizza + "</p>";
  });
  pizzaOrders.html(htmlForPizzaInfo);
  // console.log(orders)
}

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    const inputtedExtraCheese = $("#extra-cheese").val();
    const inputtedPepperoni = $("#pepperoni").val();
    const inputtedOnions = $("#onions").val();
    const inputtedSize = $("#pizza-size").val();
    const toppings = inputtedExtraCheese + ", " + inputtedPepperoni + ", " + inputtedOnions;
    let newPizza = new Pizza(toppings, inputtedSize);
    orders.addPizza(newPizza);
    displayPizzaOrders(orders);
    // let newPizza = new Pizza($("#extra-cheese", "#pepperoni", "#onions", "#pizza-size").val());
    // $("#order-summary").html("<p>" + newPizza + "</p>");
    
  });
});