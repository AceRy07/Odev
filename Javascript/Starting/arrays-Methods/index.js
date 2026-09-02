let products = ["Iphone 5","Samsung", "Huawei"];
let result;

result = products;

result = products.length;
result = products.toString(); // String çevirir
result = products.join("/"); // String çevirir ve araya istediğimiz karakteri ekler


// Diziden eleman silme

result = products.shift(); // Dizinin ilk elemanını siler ve silinen elemanı döndürür
result = products.pop(); // Dizinin son elemanını siler ve silinen elemanı döndürür



// Diziye eleman ekleme
result = products.push("Xiaomi"); // Dizinin sonuna eleman ekler ve dizinin yeni uzunluğunu döndürür
result ? products.unshift("Nokia") : null; // Dizinin başına eleman ekler ve dizinin yeni uzunluğunu döndürür


// Dizileri Birleştirme
let products1 = ["Asus", "Lenovo"];
let products2 = ["Casper", "Monster"];
let products3 = ["MSI", "Acer"];

result = products1.concat(products2, products3); // Dizileri birleştirir ve yeni bir dizi döndürür
result = products1.splice(0,0, products2);  // Dizinin başına products2 dizisini ekler ve silinen elemanları döndürür
result = products1.splice(0, 1); // Dizinin başındaki 1 elemanı siler ve silinen elemanları döndürür

console.log(result);
// console.log(products1); 