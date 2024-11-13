/* Sayının Tek mi Çift mi Olduğunu Bulma: Kullanıcıdan alınan sayının tek mi
çift mi olduğunu kontrol eden bir fonksiyon yazın.*/
{
  //! Function Declaration
  let number = +prompt("Bir Sayı Giriniz:");
  function tekCift() {
    if (number % 2 === 0) {
      console.log("Çift Sayı");
    } else {
      console.log("Tek Sayı");
    }
  }
  tekCift();
}
{
  //! Function Expression
  const tekCift = function (x) {
    let result = x % 2 === 0 ? "Çift Sayı" : "Tek Sayı";
    return result;
  };
  let number = +prompt("Bir Sayı Giriniz:");
  console.log(tekCift(number));
}
{
  //! Arrow Function
  let number = +prompt("Bir Sayı Giriniz:");
  const tekCift = (number) => (number % 2 === 0 ? "Çift Sayı" : "Tek Sayı");
  console.log(tekCift(number));
}
{
  //! Recursive Function

  let number = +prompt("Bir Sayı Giriniz:");
  const tekCift = (number) => {
    if (number % 2 === 0) {
      console.log("Çift Sayı");
    } else {
      console.log("Tek Sayı");
    }
  };
  tekCift(number);
}

/* Sayı 5'in Katı mı?: Kullanıcının girdiği bir sayının 5'in katı olup olmadığını
kontrol eden bir fonksiyon yazın.*/

{
  const multipleFive = function (x) {
    let result =
      x % 5 === 0 ? "Girilen Sayı 5'in Katı" : "Girilen Sayı 5'in Katı Değil";
    return result;
  };
  let number = +prompt("Bir Sayı Giriniz:");
  console.log(multipleFive(number));
}

/* Pozitif mi Negatif mi?: Kullanıcının girdiği sayının pozitif, negatif veya sıfır
olup olmadığını belirleyen bir fonksiyon yazın. */

{
  let number = +prompt("Bir Sayı Giriniz:");
  const posNeg = (number) => {
    if (number > 0) {
      console.log("Pozitif");
    } else if (number < 0) {
      console.log("Negatif");
    } else {
      console.log("Sayı 0'a Eşit");
    }
  };
  posNeg(number);
}

/* Sayıyı Mutlak Değere Çevirme: Kullanıcının girdiği negatif bir sayıyı pozitif
hale getiren bir fonksiyon yazın (örn. -8 → 8).*/

{
  let number = +prompt("Bir Sayı Giriniz:");
  const absolute = (number) =>
    number < 0
      ? `${number} sayısının mutlak değeri: ${number * -1}`
      : "Girilen Değer Pozitif";
  console.log(absolute(number));
}

/* Bir Sayının Karesini Bulma: Kullanıcının girdiği sayının karesini hesaplayan
bir fonksiyon yazın.*/

(function (x) {
  console.log(`Girdiğiniz Sayının Karesi: ${Math.pow(x, 2)}`);
})(+prompt("Sayı Giriniz:"));

/* Girilen Sayının Kaç Basamaklı Olduğunu Bulma: Kullanıcıdan alınan sayının
kaç basamaklı olduğunu bulan bir fonksiyon yazın (örn. 234 → 3 basamak). */
{
  let number = +prompt("Bir Sayı Giriniz:");
  function digit() {
    if (number / 10 < 1) {
      console.log("Tek Basamaklı");
    } else if (number / 10 < 10) {
      console.log("İki Basamaklı");
    } else if (number / 10 < 100) {
      console.log("Üç Basamaklı");
    } else if (number / 10 < 1000) {
      console.log("Dört Basamaklı");
    } else {
      console.log("Beş Basamaklı veya Daha Büyük");
    }
  }
  digit();
}

/* Girilen İki Sayının Toplamını Bulma: Kullanıcıdan iki sayı alarak bu sayıların
toplamını hesaplayan bir fonksiyon yazın.*/

{
  (function (num1, num2) {
    console.log(`Girdiğiniz İki Sayının Toplamı: ${num1 + num2}`);
  })(+prompt("Bir Sayı Giriniz"), +prompt("Bir Sayı Daha Giriniz"));
}

/* 10 ve 20 Arasında mı?: Kullanıcının girdiği bir sayının 10 ile 20 arasında olup
olmadığını kontrol eden bir fonksiyon yazın. */

{
  let number = +prompt("Bir Sayı Giriniz:");
  const between = (number) =>
    number > 10 && number < 20 ? "10 - 20 Arasında" : "Aralıkta Değil";
  console.log(between(number));
}

/* Dikdörtgen Alanı Hesaplama: Kullanıcıdan dikdörtgenin uzun ve kısa
kenarlarını alarak alanını hesaplayan bir fonksiyon yazın. */

{
  (function (a, b) {
    console.log(`Dikdörtgenin Alanı: ${a * b}`);
  })(
    +prompt("a Kenar Uzunluğunu Giriniz:"),
    +prompt("b Kenar Uzunluğunu Giriniz:")
  );
}

/* Sayı Pozitifse 1 Ekle, Negatifse 1 Çıkar: Kullanıcının girdiği sayının pozitifse
1 ekleyen, negatifse 1 çıkaran bir fonksiyon yazın.*/

{
  let number = +prompt("Bir Sayı Giriniz:");
  function subAdd() {
    if (number < 0) {
      console.log(`${number - 1}`);
    } else if (number > 0) {
      console.log(`${number + 1}`);
    } else {
      console.log("Sayı Sıfır");
    }
  }
  subAdd();
}
