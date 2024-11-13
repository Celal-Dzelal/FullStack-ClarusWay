//! Sayıyı Sınıflandırma: Bir sayının pozitif, negatif veya sıfır olup olmadığını
//! belirleyin ve "Pozitif", "Negatif" veya "Sıfır" olarak döndürün.

let number = 6;
let classification =
  number == 0 ? "Sayı Sıfır" : number > 0 ? "Sayı Pozitif" : "Sayı Negatif";
console.log(classification);

//! Kredi Başvuru Durumu: Bir kişinin kredi puanı 700 veya daha yüksekse
//! "Kredi onaylandı", 500 ile 699 arasındaysa "Ek belgeler gerekli", 500'ün
//! altındaysa "Kredi reddedildi" döndürün.

let score = 550;
let credit =
  score >= 700
    ? "Kredi Onaylandı"
    : score < 500
    ? "Kredi Reddedildi"
    : "Ek Belge Gerekli";
console.log(credit);

//! Sıcaklık Durumu: Bir sıcaklık değerine göre "Donma noktası altında", "Oda
//! sıcaklığında" veya "Kaynama noktasında" olup olmadığını belirleyin.

let celcius = 50;
let degree =
  celcius <= 5
    ? "Donma Noktası Altında"
    : celcius >= 90
    ? "Kaynama Noktasında"
    : "Oda Sıcaklığında";
console.log(degree);

//! Öğrenci Başarı Durumu: Bir öğrencinin notuna göre "Harika", "İyi", "Orta",
//! "Kötü" gibi başarı düzeylerini belirleyin (90-100: Harika, 80-89: İyi, 70-79:
//! Orta, 0-69: Kötü).

let grade = 89;
let success =
  grade < 0
    ? "Geçersiz Not Girişi"
    : grade > 100
    ? "Geçersiz Not Girişi"
    : grade <= 69
    ? "Kötü"
    : grade <= 79
    ? "Orta"
    : grade <= 89
    ? "İyi"
    : "Harika";
console.log(success);

//! Yaş Grubu: Bir kişinin yaşına göre "Çocuk", "Genç", "Yetişkin", "Yaşlı"
//! olarak kategorize edin (0-12: Çocuk, 13-24: Genç, 25-64: Yetişkin, 65 ve
//! üstü: Yaşlı).

let age = 36;
let category =
  age < 0
    ? "Tohum"
    : age <= 12
    ? "Çocuk"
    : age <= 24
    ? "Genç"
    : age <= 64
    ? "Yetişkin"
    : "Yaşlı";
console.log(category);

//! Bir Ürünün İndirim Durumu: Bir ürün fiyatı 100 TL veya üzerindeyse %20
//! indirim, 50-99 TL arasında ise %10 indirim, altındaysa indirim yok olarak
//! yeni fiyatı hesaplayın.

let cost = 90;
let damping = cost <= 0 ? 0 : cost < 50 ? 0 : cost <= 99 ? 10 : 20;
if (damping == 0) {
  console.log("İndirim Yok");
} else {
  console.log(
    `% ${damping} indirim kazandınız. Ödeyeceğiniz tutar: ${
      cost - (cost / 100) * damping
    } TL`
  );
}

//! Bir Kullanıcının Üyelik Durumu: Bir kullanıcı üye ise "Üye girişi yapıldı",
//! değilse "Misafir girişi" mesajı verin. Ek olarak, kullanıcı üye ise aktif veya
//! pasif durumunu kontrol edin.

let user = true;
let stat = true;
let member = user == true ? "Üye Girişi Yapıldı" : "Misafir Girişi";
console.log(member);
if (user === true) {
  if (stat === false) {
    console.log("Kullanıcı Durumu Pasif");
  } else {
    console.log("Kullanıcı Durumu Aktif");
  }
}

//! İki Değer Karşılaştırması: İki sayıyı karşılaştırarak "İkisi de eşit", "Birinci
//! daha büyük", "İkinci daha büyük" olarak sonuç döndürün.

let no1 = 8;
let no2 = -5;

let compare =
  no1 == no2
    ? "İki Sayı Eşit"
    : no1 > no2
    ? "Birinci Sayı Daha Büyük"
    : "İkinci Sayı Daha Büyük";
console.log(compare);

//! Ders Seçimi: Bir öğrencinin ders seçimine göre "Temel", "Orta", "İleri"
//! seviyesinde olduğunu belirleyin (Başlangıç: 1-3, Orta: 4-6, İleri: 7-10).

let course = 5;
let level =
  course <= 0
    ? "Yanlış Giriş"
    : course <= 3
    ? "Başlangıç"
    : course <= 6
    ? "Orta"
    : course <= 10
    ? "İleri"
    : "Yanlış Giriş";
console.log(level);

//! Bölüm Seçimi: Bir öğrencinin notuna göre hangi bölümde okuyabileceğini
//! belirleyin: "Mühendislik" (80 ve üstü), "İktisat" (60-79), "Sosyal Bilimler" (0-59).

let grade1 = 84;
if (grade1 < 0) {
  console.log("Puan Hesaplanmamıştır");
} else {
  console.log(
    grade1 <= 59 ? "Sosyal Bilimler" : grade1 <= 79 ? "İktisat" : "Mühendislik"
  );
}
