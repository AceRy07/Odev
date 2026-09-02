let fruits = ["apple", "banana", "cherry"];

for( let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// Adding Numbers

let numbers = [10,20,5,50,10,200];
let result = 0;
for(let i = 0; i<numbers.length; i++) {
    result += numbers[i];
}
console.log(result);    

// Get Numbers
for (let index of numbers){
    console.log(index);
}


// Object Iteration

const user = {
    "Ad" : "John",
    "Soyad" : "Doe",
    "Email" : "john.doe@example.com",
    "Yas" : 30
};

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}


// Plural Users

let users = [
    {
        "Id" : 1,
        "Ad" : "John",
        "Soyad" : "Doe",
        "Email" : "john.doe@example.com",
        "Yas" : 30
    },

    {
    "Id" : 2,
    "Ad" : "Zoe",
    "Soyad" : "as",
    "Email" : "zoe.as@example.com",
    "Yas" : 30
    }
];

for(let i=0; i<users.length; i++) {
    console.log(users[i]);
}