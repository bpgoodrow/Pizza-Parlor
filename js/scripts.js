function Orders() {
  this.pizzas = {};
}

Orders.prototype.addPizza = function(pizza) {
  this.pizzas[Pizza] = pizza;
}

toppings = [];

function Pizza (toppings, size) {
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

let orders = new Orders();
let myPizza = new Pizza(["Extra Cheese", "Pepperoni", "Onions"], "Large");
myPizza.Cost();
orders.addPizza(myPizza);
orders.pizzas;