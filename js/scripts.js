toppings = [];

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.Cost = function (cost) {
  if (this.size === "Small") {
    return this.toppings + ", " + this.size + ", " + "$10.00";
  };
  return cost;
}

myPizza = new Pizza(["Extra Cheese", "Pepperoni", "Onions"], "Small");