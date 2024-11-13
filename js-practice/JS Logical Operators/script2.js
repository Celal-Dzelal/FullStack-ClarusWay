//? -----------------------------------------------------------
//! *******************İkinci 10 Soru**************************
//? -----------------------------------------------------------

//! Bir kullanıcının kullanıcı adı ve şifre bilgileri varsa giriş yapmasını sağlayın, yoksa giriş bilgileri eksik yazdırın.

let userName = prompt("Kullanıcı Adınızı Giriniz:");
let password = prompt("Lütfen Şifrenizi Giriniz:");

console.log(
  userName && password
    ? `Kullanıcı Adı: ${userName} Şifre: ******** \nGİRİŞ BAŞARILI`
    : "Giriş Bilgileri Eksik"
);

//! Bir siparişin tamamlanması için "ödemeYapıldı" ve "ürünHazır" olması gerekir. Eğer iki durum da sağlanıyorsa "Sipariş Tamamlandı" yoksa "Sipariş Beklemede" döndürün.

let payment = Boolean(prompt("Ödeme Yapıldı mı?(Evet/Hayır)") === "Evet");
let productStat = Boolean(prompt("Ürün Hazır mı?(Evet/Hayır)") === "Evet");

console.log(
  payment && productStat ? "Sipariş Tamamlandı" : "Sipariş Beklemede"
);

//! Bir üründe hem "indirimKoduGirildi" hem de "urunSepette" ise indirim uygulandır. Aksi halde uygulanmaz.

let discount = prompt("İndirim Kodu Giriniz:");
let basket = Boolean(prompt("Ürün Sepette mi?(Evet/Hayır)") === "Evet");

console.log(discount && basket ? "İndirim Uygulandı" : "İndirim Uygulanmadı");

//! Bir randevu için hem "tarihOnaylandı" hem de "saatOnaylandı" sağlanıyorsa "Randevu Onaylandı" yoksa "Onay Bekleniyor" mesajını döndürün.

let date = prompt("Randevu Tarihi Giriniz(GG/AA/YYYY):");
let time = prompt("Randevu Saati Giriniz(SS:DD):");

if (date && time) {
  message = `Randevu Tarihi: ${date} Randevu Saati: ${time}`;
} else {
  message = "Onay Bekleniyor";
}
console.log(message);

//! Bir profil hem "profilFoto" hem de "hakkındaBilgisi" içeriyorsa, "Profil Tamamlandı" yoksa "Profil Eksik" döndürün.

let photo = !prompt(
  "Profil Fotoğrafı Yüklendi mi?(Yüklendiyse herhangi bir harf tuşlayınız.)"
);
let about = !prompt("Kendinizi Tanıtınız: ");

console.log((photo && about && "Profil Eksik") || "Profil Tamamlandı");
//? Tam istediğim sonucu vermiyor ama idare eder. Üstteki yöntem daha uygun.

//! Gönderi paylaşmak için hem başlık hem içerik olmalı yoksa "Gönderi Eksik" döndür.

let title = prompt("Başlık Bilgisi Giriniz");
let text = prompt("İçerik Bilgisi Giriniz");

if (title && text) {
  message = `Başlık: \n${title} \nİçerik: \n${text}`;
} else {
  message = "Gönderi Eksik";
}
console.log(message);

//! Kredi başvurusu "krediPuanı" ve "gelirDurumu" uygunsa onaylanır. Aksi halde "Onaylanmadı" döner.

let creditScore = Boolean(
  prompt("Kredi Puanı Yeterli Mi?(Evet/Hayır)") === "Evet"
);
let income = Boolean(prompt("Aylık Gelir Yeterli Mi?(Evet/Hayır)") === "Evet");

console.log(
  (creditScore && income && "Kredi Onaylandı") || "Kredi Onaylanmadı"
);

//! Bir etkinliğe katılmak için hem yaş uygun olmalı hem de bilet alınmış olmalı. Aksi halde "Katılım Sağlanamaz".

let age = Number(prompt("Lütfen Yaşınızı Giriniz"));
let ticket = Boolean(prompt("Bilet Aldınız mı?(Evet/Hayır)") === "Evet");

if (age >= 18 && ticket) {
  message1 = "Etkinlik Saatinde Lütfen Alanda Olunuz";
} else {
  message1 = "Katılım Sağlanamaz";
}
console.log(message1);

//! Dosya yüklenebilmesi için "dosyaSecildi" ve "izinVerildi" olmalı aksi halde "Dosya Yüklenemiyor" mesajı döner.

//? ÇÖZÜM 1

let file = Boolean(prompt("Dosya Seçildi mi?(Evet/Hayır)") === "Evet");
let permission = Boolean(prompt("İzin Verildi mi?(Evet/Hayır)") === "Evet");

console.log((file && permission && "Dosya Yüklendi") || "Dosya Yüklenemiyor");

//? ÇÖZÜM 2

let file1 = prompt(
  "Dosya Seçildi mi?(Evet ise rastgele karakter girişi yapınız.)"
);
let permission1 = prompt(
  "İzin Verildi mi?(Evet ise rastgele karakter girişi yapınız.)"
);

console.log(file1 || permission1 || "Dosya Yüklenemiyor");

//? ÇÖZÜM 3

let file2 = Boolean(prompt("Dosya Seçildi mi?(Evet/Hayır)") === "Evet");
let permission2 = Boolean(prompt("İzin Verildi mi?(Evet/Hayır)") === "Evet");

console.log(file2 && permission2 ? "Dosya Yüklendi" : "Dosya Yüklenemiyor");

//! Otel rezervasyonunun tamamlanması için hem "ödemeOnaylandı" hem de "odaHazir" olmalı aksi halde "Rezervasyon Beklemede" döner.

let payment1 = Boolean(prompt("Ödeme Yapıldı mı?(Evet/Hayır)") === "Evet");
let room = Boolean(prompt("Oda Hazır mı?(Evet/Hayır)") === "Evet");
let message2 =
  (payment1 && room && "Rezervasyon Tamamlandı") || "Rezervasyon Beklemede";
console.log(message2);
