let customer = ["emin", "nur", "emir"];

let customer1 = ["emin", ["asus", "monster", "dell", [10,20,30]]];

customer.push("bedirhan");

console.log(`Product : ${customer1[1][0]} Price: ${customer1[1][3][0]}`);

// Dizi son elemanı
console.log(customer[customer.length - 1]);
