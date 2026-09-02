let customer1 = ["emin", ["asus", "monster", "dell", [10,20,30]]];

console.log(`Product: ${customer1[1][0]} Price: $${customer1[1][3][0]}`)


let customer = {
    "Ad": "Arda",
    "Soyad" : "Akar",
    "Yas" : 21,
    "Email" : "arda.akar@example.com",
    "Products" : [
        "Laptop", "Car", "Phone"
    ]
}

let customer2 = {
    "Ad": "Nur",
    "Soyad" : "Su",
    "Yas" : 63,
    "Email" : "nur.su@example.com"
}

let customer3 = {
    "Ad": "Ali",
    "Soyad" : "yavuz",
    "Yas" : 56,
    "Email" : "ali.yavuz@example.com",
    "Products" : {
        "Phone" : "Iphone 11",
        "Price" : "$999",
        "Laptop" : "Dell XPS 13"
    }
}

let musteriler = {
    customer,
    customer2,
    customer3
}

console.log(customer.Ad);
console.log(customer.Soyad);
console.log(customer.Yas);
console.log(customer.Email);

console.log(customer2.Ad);
console.log(customer2.Soyad);
console.log(customer2.Yas);
console.log(customer2.Email);

console.log(customer3.Ad);
console.log(customer3.Soyad);
console.log(customer3.Yas);
console.log(customer3.Email);


console.log(customer.Products);
console.log(customer3.Products.Phone);
console.log(customer3.Products.Price);    

console.log(musteriler)