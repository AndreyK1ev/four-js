var products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

function calculateTotalPrice(arr, productName) {
  let obj = arr.filter(function(products) {
    return products.name === productName;
  });

  let TotalPrice = obj[0].price * obj[0].quantity;

  return TotalPrice;
}

console.log(calculateTotalPrice(products, 'Радар')); 

console.log(calculateTotalPrice(products, 'Дроид'));

console.log(calculateTotalPrice(products, 'Захват'));

console.log(calculateTotalPrice(products, 'Сканер'));
