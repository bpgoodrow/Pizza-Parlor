// function Orders() {
//   this.pizzas = {};
// }

// Orders.prototype.addPizza = function(pizza) {
//   this.pizzas[Pizza] = pizza;
// }

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
// orders.pizzas;

// let pizza1 = new Pizza();

// function displayPizzaOrders(ordersToDisplay) {
//   let pizzaOrders = $("ul#orders");
//   let htmlForPizzaInfo = "";
//   Object.keys(ordersToDisplay.contacts).forEach(function(key) {
//     const pizza = ordersToDisplay.findPizza(key);
//     htmlForPizzaInfo += "<li>" + this.Pizza + "</li>";
//   });
//   pizzaOrders.html(htmlForPizzaInfo);
// }

$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();
    const inputtedExtraCheese = $("#extra-cheese").val();
    const inputtedPepperoni = $("#pepperoni").val();
    const inputtedOnions = $("#onions").val();
    const inputtedSize = $("#pizza-size").val();
    let newPizza = new Pizza($("#extra-cheese", "#pepperoni", "#onions", "#pizza-size").val());
    $("#order-summary").html("<p>" + newPizza + "</p>");
  });
});