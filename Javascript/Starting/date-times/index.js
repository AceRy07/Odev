let tarih = new Date();

let result;

result = tarih.getDay();    // Gün (0-6)
result = tarih.getDate();   // Gün
result = tarih.getMonth();  // Ay (0-11)
result = tarih.getFullYear();
result = tarih.getHours();
result = tarih.getMinutes();


// Tarihi Güncelleme MEthods

tarih.setFullYear(2025);
tarih.setMonth(11);
tarih.setDate(25);
tarih.setHours(10);
tarih.setMinutes(30);


// Doğum Tarihi
let dogumTarihi = new Date(1990, 5, 15); // 15 Haziran 1990

console.log(dogumTarihi);

result = tarih.getFullYear() - dogumTarihi.getFullYear();

// result = tarih;
console.log(result);