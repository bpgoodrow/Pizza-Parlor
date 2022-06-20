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

Pizza.prototype.Cost = function () {
  if (this.size === "Small") {
    return "$10.00";
  } else if (this.size === "Medium") {
    return "$15.00";
  } else if (this.size === "Large") {
    return "$20.00"};
  return "No size selected";
}

// let orders = new Orders();
// let myPizza = new Pizza(["Extra Cheese", "Pepperoni", "Onions"], "Large");
// myPizza.Cost();
// orders.addPizza(myPizza);

let orders = new Orders();

function displayPizzaOrders(ordersToDisplay) {
  let pizzaOrders = $("#order-summary");
  let htmlForPizzaInfo = "";
  Object.keys(ordersToDisplay.pizzas).forEach(function(key) {
    const pizza = ordersToDisplay.findPizza(key);
    htmlForPizzaInfo += "<p" + pizza.id + ">" + pizza + pizza.Cost() + "</p>";
  });
  pizzaOrders.html(htmlForPizzaInfo);
}

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    let inputtedExtraCheese = "";
    let inputtedPepperoni = "";
    let inputtedOnions = "";
    if ($("#extra-cheese").is(":checked")) {
      inputtedExtraCheese = $("#extra-cheese").attr('name');
    }
    if ($("#pepperoni").is(":checked")) {
      inputtedPepperoni = $("#pepperoni").attr('name');
    }
    if ($("#onions").is(":checked")) {
      inputtedOnions = $("#onions").attr('name');
    }
    const inputtedSize = $("#pizza-size").val();
    const toppings = inputtedExtraCheese + ", " + inputtedPepperoni + ", " + inputtedOnions;
    let newPizza = new Pizza(toppings, inputtedSize);
    orders.addPizza(newPizza);
    displayPizzaOrders(orders);
    // let newPizza = new Pizza($("#extra-cheese", "#pepperoni", "#onions", "#pizza-size").val());
    // $("#order-summary").html("<p>" + newPizza + "</p>");
    
  });
});