// ==========================================
// 1. DOCUMENT VE SAYFA BİLGİLERİNE ERİŞİM
// ==========================================

// Sayfanın <head> ve <body> HTML elementlerine erişim sağlar
console.log(document.head);
console.log(document.body);

// Sayfanın URL, yol (path) ve domain bilgilerini döndürür
console.log(document.location.pathname); // Örn: /index.html
console.log(document.location.href);     // Tam URL adresi
console.log(document.URL);               // Sayfa URL'i
console.log(document.baseURI);           // Temel URI adresi

// Body'nin arka plan rengini CSS müdahalesiyle değiştirir
document.body.style.backgroundColor = "lightblue";


// ==========================================
// 2. DOM ELEMANLARINI SEÇME VE İÇERİK DEĞİŞTİRME
// ==========================================

// ID ile tek bir eleman seçme
let title = document.getElementById("title");
console.log(title);

let titles = document.getElementById("app");
// innerHTML ile elementin içindeki HTML/metin içeriği güncellenir
titles.innerHTML = "Design Bilgi";
console.log(titles.innerHTML);

// querySelector: CSS seçici kurallarına göre eşleşen İLK elemanı seçer
let link = document.querySelector("#kodluyoruzLink");

// += kullanımı mevcut metnin sonuna ekleme yapar
link.innerHTML += " - Güncellendi";
// Inline CSS stili ekleme
link.style.color = "red";
// Elemana yeni bir CSS sınıfı ekleme
link.classList.add("btn");


// ==========================================
// 3. ÇOKLU ELEMAN SEÇİMİ (COLLECTION & NODE LIST)
// ==========================================

// Sınıf (class) ismine göre tüm elemanları HTMLCollection olarak getirir
const kuslar = document.getElementsByClassName("kusu");
console.log(kuslar);

// querySelectorAll: Eşleşen TÜM elemanları NodeList olarak getirir
const inputs = document.querySelector('#signup').querySelectorAll('input');
console.log(inputs);


// ==========================================
// 4. KULLANICIDAN BİLGİ ALMA (PROMPT) VE HTML'E YAZDIRMA
// ==========================================

// Kullanıcıdan bilgi almak için tarayıcı penceresi açar (İsteğe bağlı aktif edilebilir)
/*
let fullName = prompt("Lütfen adınızı giriniz: "); 
let greetingInput = document.querySelector("#greeting");
// Template Literals (${}) kullanarak dinamik HTML ekleme
greetingInput.innerHTML = `${greetingInput.innerHTML} <small style="color:red">${fullName}</small>`;
*/


// ==========================================
// 5. CSS Pseudo-Class SEÇİCİLERİ VE ELEMAN OLUŞTURMA (CREATE ELEMENT)
// ==========================================

// İlk ve son liste elemanlarını CSS seçicileri ile yakalama
let lastChild = document.querySelector("ul#list > li:last-child");
let firstChild = document.querySelector("ul#list > li:first-child");

if (lastChild) lastChild.innerHTML = "Son Eleman Bilgi";
if (firstChild) firstChild.innerHTML = "İlk Eleman Bilgi";

// Yeni bir <li> elementi oluşturma
let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement('li');

liDOM.innerHTML = "Yeni Oluşturulan Liste Elemanı";

// appendChild / append: Elemanı listenin EN SONUNA ekler
// ulDOM.appendChild(liDOM);

// prepend: Elemanı listenin EN BAŞINA ekler
ulDOM.prepend(liDOM);


// ==========================================
// 6. DÖNGÜ İLE ÇOKLU ELEMANLARA MÜDAHALE
// ==========================================

const alternateItems = document.getElementsByClassName("alternate");

// HTMLCollection üzerinde for döngüsü ile gezinerek renk değiştirme
for (let i = 0; i < alternateItems.length; i++) {
    alternateItems[i].style.color = "red";
}


// ==========================================
// 7. OLAY DİNLEYİCİLERİ (EVENT LISTENERS)
// ==========================================

const liste = document.querySelector("ul#list");
const urunInput = document.querySelector("#veri");
const ekleBtn = document.querySelector("#ekle");

// Butona tıklama olayı (click event) tanımlama
ekleBtn.addEventListener("click", function () {
    // Input boş değilse işlem yap
    if (urunInput.value.trim() !== "") {
        // 1. Yeni li elementi oluştur
        const yeniLi = document.createElement("li");
        
        // 2. Inputtaki değeri li içerisine aktar
        yeniLi.textContent = urunInput.value;
        
        // 3. Oluşturulan li'yi ul listesine ekle
        liste.appendChild(yeniLi);
        
        // 4. Input kutusunu temizle
        urunInput.value = "";
    }
});


// ==========================================
// 8. CLASS LIST YÖNETİMİ (ADD / REMOVE)
// ==========================================

let greeting = document.querySelector("#greeting");

// Elemana birden fazla sınıf ekleme
greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class");

// Elemandan belirtilen sınıfları kaldırma
greeting.classList.remove("second-class", "third-class");

// Güncel sınıf listesini konsola yazdırma
console.log("Greeting Sınıfları:", greeting.classList);