//! Kullanıcının profilinde bir kullanıcı adı girilmemişse, "Misafir" adını kullanın.

let profile = prompt("Kullanıcı Adınızı Giriniz:");
let message = (profile && "Kayıtlı Kullanıcı") || "Misafir";
console.log(message);

//! Bir ürünün üç farklı fiyatı olabilir: `indirimliFiyat`, `kampanyaFiyati`, veya
//! `normalFiyat`. Eğer tüm bu fiyatlar yoksa "Fiyat yok" döndürün

let indirimliFiyat, kampanyaFiyati, normalFiyat;
let price = indirimliFiyat || kampanyaFiyati || normalFiyat || "Fiyat Yok";
console.log(price);

//! Bir kullanıcının telefon numarası veya e-posta adresi yoksa, varsayılan olarak
//! "İletişim bilgisi eksik" mesajı döndürün.

let tel, e_posta;
console.log(tel || e_posta || "İletişim bilgisi eksik");

//! Bir kullanıcının üç farklı adres bilgisi olabilir: `evAdresi`, `isAdresi`, veya
//! `postaKutusu`. Tüm bilgiler eksikse "Adres yok" döndürün.

let evAdresi = prompt("Ev Adresiniz:");
let isAdresi = prompt("İş Adresiniz:");
let postaKutusu = prompt("Posta Kutusu:");
console.log(evAdresi || isAdresi || postaKutusu || "Adres Yok");

//! Bir uygulamada `kullaniciDili`, `tarayiciDili`, ve `varsayilanDil` gibi dil seçenekleri
//! bulunmaktadır. Eğer tüm seçenekler yoksa, "Dil seçilmedi" döndürün.

let kullaniciDili = prompt("Dil Girişi Yapınız:");
let tarayiciDili = prompt("Tarayıcı Dilini Giriniz:");
let varsayilanDil = prompt("Varsayılan Dili Giriniz:");
console.log(kullaniciDili || tarayiciDili || varsayilanDil || "Dil seçilmedi");

//! Bir kullanıcının `profilFotografi`, `varsayilanAvatar`, ve `defaultImage` gibi profil
//! resmi seçenekleri var. Eğer hepsi eksikse "Resim yok" mesajı döndürün.

let profil = Boolean(
  prompt("Profil Fotosu Var mı?Varsa Giriş Yapınız, Yoksa Boş Bırakınız.")
);
let avatar = Boolean(
  prompt("Avatar Var mı?Varsa Giriş Yapınız, Yoksa Boş Bırakınız.")
);
let defimage = Boolean(
  prompt("Default Image Var mı?Varsa Giriş Yapınız, Yoksa Boş Bırakınız.")
);

//? KISAYOL

console.log(profil || avatar || defimage || "Resim Yok");

//? UZUN YOL

if (profil && avatar && defimage) {
  message = "Tüm Resimler Yüklendi";
} else if (profil && avatar && !defimage) {
  message = "Default Image Eksik";
} else if (profil && defimage && !avatar) {
  message = "Avatar Eksik";
} else if (profil && !avatar && !defimage) {
  message = "Avatar ve Default Image Eksik";
} else if (!profil && avatar && defimage) {
  message = "Profil Fotoğrafı Eksik";
} else if (!profil && avatar && !defimage) {
  message = "Profil Fotoğrafı ve Default Image Eksik";
} else if (!profil && !avatar && defimage) {
  message = "Profil Fotoğrafı ve Avatar Eksik";
} else {
  message = "Resim Yok";
}
console.log(message);

//! Bir kullanıcının adı, soyadı ve takma adı olabilir. Eğer hiçbir bilgi yoksa "Anonim" döndürün.

let ad = prompt("Adınız:");
let soyad = prompt("Soyadınız:");
let nick = prompt("Takma Adınız:");

//? KISA YOL

console.log(ad || soyad || nick || "Anonim");

//? UZUN YOL

if (ad && soyad && nick) {
  message1 = `Adınız: ${ad} Soyadınız: ${soyad} Takma Adınız: ${nick}`;
} else if (ad && soyad && !nick) {
  message1 = `Adınız: ${ad} Soyadınız: ${soyad} Takma Adınız: Giriş Yapılmadı`;
} else if (ad && nick && !soyad) {
  message1 = `Adınız: ${ad} Soyadınız: Giriş Yapılmadı Takma Adınız: ${nick}`;
} else if (ad && !soyad & !nick) {
  message1 = `Adınız: ${ad} Soyadınız: Giriş Yapılmadı Takma Adınız: Giriş Yapılmadı`;
} else if (!ad && soyad && nick) {
  message1 = `Adınız: Giriş Yapılmadı Soyadınız: ${soyad} Takma Adınız: ${nick}`;
} else if (!ad && soyad && !nick) {
  message1 = `Adınız: Giriş Yapılmadı Soyadınız: ${soyad} Takma Adınız:Giriş Yapılmadı`;
} else if (!ad && !soyad && nick) {
  message1 = `Adınız: Giriş Yapılmadı Soyadınız: Giriş Yapılmadı Takma Adınız: ${nick}`;
} else {
  message1 = "Anonim";
}
console.log(message1);

//! Bir kullanıcı "yaş", "doğum yılı" veya "tahmini yaş" bilgisine sahip. Eğer hiç bilgi yoksa "Yaş Bilinmiyor" döndür.

let age = Boolean(prompt("Yaşınızı Giriniz:"));
let birthYear = Boolean(prompt("Doğum Yılınızı Giriniz:"));
let estAge = Boolean(prompt("Tahmini Yaş Bilgisi Giriniz:"));

//? KISA YOL

console.log(
  (age || birthYear || estAge || "Yaş Bilinmiyor") && "Yaş Bilgisi Mevcut"
);

//? UZUN YOL

if (!age && !birthYear && !estAge) {
  message2 = "Yaş Bilinmiyor";
} else {
  message2 = "Yaş Bilgisi Mevcut";
}
console.log(message2);

//! Bir oyunda ana "anaSkor", "yedekSkor" ve "defaultSkor" bilgisi bulunmaktadır. Hepsi "falsy" ise "Skor Yok" döndürün.

let score = Number(prompt("Ana Skoru:"));
let resScore = Number(prompt("Yedek Skoru Giriniz:"));
let defScore = Number(prompt("Varsayılan Skoru Giriniz:"));

console.log(
  score || resScore || defScore
    ? `Toplam Skor: ${score + resScore + defScore}`
    : "Skor Yok"
);

//! Bir kullanıcının "aktifDurum", "sonGiris" veya "beklemeDurumu" gibi çevrimiçi durumları olabilir. Hepsi falsy ise "Çevrimdışı" döndür.

let actStat = Boolean(prompt("Aktif Durum (Evet/Hayır):") === "Evet");
let lastLog = Boolean(
  prompt("Son Giriş Bilgisi Var mı? (Evet/Hayır):") === "Evet"
);
let standBy = Boolean(prompt("Bekleme Durumu (Evet/Hayır):") === "Evet");

console.log(
  actStat && lastLog && standBy
    ? "Çevrimiçi"
    : actStat || lastLog || standBy || "Çevrimdışı"
);
