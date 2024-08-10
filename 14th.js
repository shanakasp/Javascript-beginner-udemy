function food() {
  let food = "pizza";
  console.log(`food: ${food}`);
}

function order(quantity, price) {
  let totalPrice = quantity * price;

  console.log(
    `Quantity is ${quantity} and Prince is ${price} Total Price is ${totalPrice}`
  );
}

food();
order(10, 20);
