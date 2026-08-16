const product1 = "samsung";
const product2 = "iphone";
const product3 = "nokia";

const products = ["samsung", "iphone", "nokia"];
const price = [1000, 2000, 3000];

console.log(products[0]); // samsung
console.log(products[1]); // iphone
console.log(products[2]); // nokia

const newProducts = ["Samsung", 150, ["Apple", 20]];

console.log(newProducts[2][0]); // Apple

console.log(products[2] + price[2]); // nokia3000

console.log(`Ürünümüz: ${products[1]} ve fiyatı: ${price[1]}`); // Ürünümüz: iphone ve fiyatı: 2000