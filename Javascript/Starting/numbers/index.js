const username = "ardaakar";
const age = 25;

let result;

result =25;
result=Number("25");
result=parseInt("25");
result=parseFloat("25.5");
result = parseInt("a27");  // NaN -> Not a Number (Bir sayı değeri değil)
result=isNaN(result);  // true -> result is not a number


let myNumber = 10.3485561;
result = myNumber.toPrecision(3);  // 10.3
result = myNumber.toFixed(2);  // 10.35


result = Math.round(3.5);  // 4
result = Math.ceil(3.1);
result = Math.floor(3.9);
result = Math.sqrt(16);  // 4
result = Math.abs(-10);  // 10
result = Math.pow(2, 3);  // 8
result = Math.min(1, 2, 3, 4, 5);  // 1
result = Math.max(1, 2, 3, 4, 5);  // 5




console.log(result);