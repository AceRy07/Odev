// Fonksiyonlar kendi scope alanlarını oluştururlar.
// Var ile if Block içerisinde yeni bir scope oluşmaz, global scope'u etkiler.
// Let ve const ile block içi scope oluşumu sağlayabiliriz.

// var user = "Global Scope: Emin";
let user = "Global Scope: Emin";
function WriteName (){
    var user = "function scope: Arda";
    console.log(user);
}

if(true){
    // var user = "block scope: Mehmet";
    let user = "block scope: Mehmet";
    console.log(user);
}

console.log(user);
WriteName();