// Değişken tanımlamaları
const a = "Emin";
const b = 25;

// typeof operatörü ile tip kontrolü yapılması
console.log(typeof a); // Çıktı: string
console.log(typeof b); // Çıktı: number

// Kişisel bilgi değişkenlerinin tanımlanması
// const ad = "Emin";
// const soyad = "Başbayan";
// const yas = 25;
// const sehir = "İstanbul";
// const meslek = "Fullstack Developer";

// '+' operatörü kullanarak metin ve değişkenleri birleştirme
// Not: Boşlukları ve noktalama işaretlerini tırnak içinde elle eklemek gerekir
// let biografi = "Benim adım " + ad + " soyadım " + soyad + ". " + sehir + "'da yaşıyorum. " + yas + " yaşındayım ve " + meslek + " olarak çalışıyorum.";

// console.log(biografi);


// Değişken tanımları
const ad = "Emin";
const soyad = "Başbayan";
const yas = 25;
const sehir = "İstanbul";
const meslek = "Fullstack Developer";

// Backtick (``) ve ${değişken} yapısı ile dinamik metin oluşturma
// Bu yöntem artı (+) işaretlerine ve karmaşık tırnak dizilimlerine ihtiyacı ortadan kaldırır
let newBio = `Benim adım ${ad} soyadım ${soyad}. ${sehir}'da yaşıyorum. ${yas} yaşındayım ve ${meslek} olarak çalışıyorum.`;

console.log(newBio);




// String Methods (String Metotları)

let youtube = " Bilgisayar Genetiği";

// Tüm harfleri küçük harfe dönüştürme
let lowerResult = youtube.toLowerCase();
console.log(lowerResult); // Çıktı: " bilgisayar genetiği"

// Tüm harfleri büyük harfe dönüştürme
let upperResult = youtube.toUpperCase();
console.log(upperResult); // Çıktı: " BİLGİSAYAR GENETİĞİ"


let youtube = " Bilgisayar Genetiği";

// Karakter uzunluğunu alma (boşluklar dahildir)
console.log(youtube.length); // Çıktı: 20
console.log(typeof youtube.length); // Çıktı: number

// Baştaki ve sondaki boşlukları silme
let result = youtube.trim();
console.log(result); // Çıktı: "Bilgisayar Genetiği"



let youtube = "Bilgisayar Genetiği";

// 0. indeksten 6. indekse kadar olan kısmı kesip alma (6 dahil değil)
let slicedResult = youtube.slice(0, 6);
console.log(slicedResult); // Çıktı: "Bilgis"

// Metni boşluk karakterinden ayırarak diziye (Array) çevirme
let splittedResult = youtube.split(" ");
console.log(splittedResult); // Çıktı: ['Bilgisayar', 'Genetiği']




let youtube = "Bilgisayar Genetiği";

// İndeksler 0'dan başlar
console.log(youtube[0]); // Çıktı: "B"
console.log(youtube[1]); // Çıktı: "i"






// String Methods Apply

let url = "www.bilgisayargenetigi.com";
let youtube = "bilgisayar genetiği";
let result;


// URL'in karakter sayısı
result = url.length;
console.log(result); // Çıktı: 26

// Boşluklar temizlenerek karakter sayısı alma
result = youtube.replace(" ", "").length;
console.log(result); // Çıktı: 18



// Boşluklardan bölerek kaç kelimeden oluştuğunu bulma
result = youtube.split(" ").length;
console.log(result); // Çıktı: 2

// Noktalardan bölerek parça sayısını alma
result = url.split(".").length;
console.log(result); // Çıktı: 3



// Kanal adı "bilgisayar" ile başlıyor mu?
result = youtube.startsWith("bilgisayar");

if (result) {
    console.log("Evet, bilgisayar ile başlııyor.");
} else {
    console.log("Hayır, başlamıyor.");
}




// Metin içerisinde "genetiği" kelimesi var mı?
if (youtube.indexOf("genetiği") > -1) {
    console.log("Aranan kelime metin içinde bulundu.");
} else {
    console.log("Kelime bulunamadı.");
}






// Metni küçük harfe çevirme ve boşluk yerine tire koyma
let slug = youtube.toLowerCase().replace(" ", "-");

// Backtick (Template Literals) ile dinamik URL birleştirme
let newUrl = `https://${url}/${slug}`;

console.log(newUrl); 
// Çıktı: https://www.bilgisayargenetigi.com/bilgisayar-genetiği