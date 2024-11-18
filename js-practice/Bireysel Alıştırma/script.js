//! Function Declaration
//?   let number = +prompt("Bir Sayı Giriniz:");
//?   function tekCift() {
//?     if (number % 2 === 0) {
//?       console.log("Çift Sayı");
//?     } else {
//?       console.log("Tek Sayı");
//?     }
//?   }
//?   tekCift();
//! Function Expression
//?   const tekCift = function (x) {
//?     let result = x % 2 === 0 ? "Çift Sayı" : "Tek Sayı";
//?     return result;
//?   };
//?   let number = +prompt("Bir Sayı Giriniz:");
//?   console.log(tekCift(number));
//! Arrow Function
//?   let number = +prompt("Bir Sayı Giriniz:");
//?   const tekCift = (number) => (number % 2 === 0 ? "Çift Sayı" : "Tek Sayı");
//?   console.log(tekCift(number));
//! Recursive Function
//?   let number = +prompt("Bir Sayı Giriniz:");
//?   const tekCift = (number) => {
//?     if (number % 2 === 0) {
//?       console.log("Çift Sayı");
//?     } else {
//?       console.log("Tek Sayı");
//?     }
//?   };
//?   tekCift(number);

//! Bir sayının pozitif, negatif veya sıfır olup olmadığını kontrol eden bir fonksiyon yazın. Fonksiyon, sayının pozitif, negatif ya da sıfır olduğunu belirten bir mesaj döndürsün.

{
  let num = -5;
  const posNeg = (num) => (num < 0 ? "Negatif" : num > 0 ? "Pozitif" : "Sıfır");
  console.log(posNeg(num));
}

//! Bir fonksiyon yazın, bu fonksiyon verilen bir sayının tek mi yoksa çift mi olduğunu kontrol etsin. Sonuç olarak, sayının "Tek" veya "Çift" olduğunu belirten bir mesaj döndürsün.

{
  let num = 7;
  const oddEven = (num) => (num % 2 === 0 ? "Çift Sayı" : "Tek Sayı");
  console.log(oddEven(num));
}

//! Bir fonksiyon yazın, bu fonksiyon bir sayının pozitif bir tam sayı olup olmadığını kontrol etsin. Eğer sayı pozitif bir tam sayıysa "Pozitif Tam Sayı" mesajı döndürsün, aksi takdirde "Geçersiz" mesajı döndürsün.

{
  let num = 45;
  function posInt() {
    if (num > 0 && Number.isInteger(num)) {
      console.log("Pozitif Tam Sayı");
    } else {
      console.log("Geçersiz");
    }
  }
  posInt();
}

{
  let num = 33;
  function posInt() {
    num > 0 && Number.isInteger(num)
      ? console.log("Pozitif Tam Sayı")
      : console.log("Geçersiz");
  }
  posInt();
}

{
  let num = 7;
  const posInt = (num) =>
    num > 0 && Number.isInteger(num) ? "Pozitif Tam Sayı" : "Geçersiz";
  console.log(posInt(num));
}

//! Bir fonksiyon yazın, bu fonksiyon verilen bir sayının hem 3'e hem de 5'e bölünüp bölünemediğini kontrol etsin. Eğer sayı her iki sayıya da bölünebiliyorsa "3 ve 5'in katı", aksi takdirde "Geçersiz" mesajını döndürsün.

{
  let num = 11;
  function multiple() {
    num % 3 === 0 && num % 5 === 0
      ? console.log("3 ve 5'in Katı")
      : console.log("Geçersiz");
  }
  multiple();
}

//! Bir fonksiyon yazın, bu fonksiyon verilen bir sayının negatif, pozitif veya sıfır olup olmadığını kontrol etsin. Sonucu "Negatif", "Pozitif" veya "Sıfır" olarak döndürsün.

{
  let num = -5;
  const stat = (num) => (num < 0 ? "Negatif" : num > 0 ? "Pozitif" : "Sıfır");
  console.log(stat(num));
}

//  let num = 7;
//  const oddEven = (num) => (num % 2 === 0 ? "Çift Sayı" : "Tek Sayı");
//  console.log(oddEven(num));

//! Bir fonksiyon yazın, bu fonksiyon verilen bir sayının pozitif çift sayılar olup olmadığını kontrol etsin. Eğer sayı pozitif ve çiftse "Pozitif Çift Sayı", aksi takdirde "Geçersiz" mesajını döndürsün.

{
  let num = 12;
  const control = (num) =>
    num % 2 === 0 && num > 0 ? "Pozitif Çift Sayı" : "Geçersiz";
  console.log(control(num));
}

//! Bir fonksiyon yazın, bu fonksiyon verilen bir sayının asal sayı olup olmadığını kontrol etsin. Eğer sayı asal sayıysa "Asal Sayı", değilse "Asal Değil" mesajını döndürsün.

{
  let num = 7;
  function prime() {
    if (num === 1 || num === 0) {
      console.log("Asal Değil");
    } else if (num === 2) {
      console.log("Asal Sayı");
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          console.log("Asal Değil");
          break;
        } else {
          console.log("Asal Sayı");
          break;
        }
      }
    }
  }
  prime();
}

//! Bir fonksiyon yazın, bu fonksiyon verilen bir dizi içerisindeki en küçük ve en büyük sayıları bulun. Bu sayıları bir obje olarak döndürsün. Örneğin, [1, 5, 2, 10, -1] dizisi için döndürülen obje şu şekilde olmalı: { min: -1, max: 10 }

{
  let liste = [1, 5, 2, 10, -1];
  function maxmin() {
    let minimum = Math.min(...liste);
    let maximum = Math.max(...liste);
    console.log({ min: minimum, max: maximum });
  }
  maxmin();
}

//! Bir fonksiyon yazın, bu fonksiyon verilen bir diziyi tersten sıralasın ve sıralanmış diziyi döndürsün. Örneğin, [1, 5, 2, 10, -1] dizisi için döndürülen sonuç şu şekilde olmalı: [-1, 10, 2, 5, 1].

{
  let liste = [1, 5, 2, 10, -1];
  function reverse() {
    let tersListe = liste.reverse();
    console.log(tersListe);
  }
  reverse();
}

//! Bir fonksiyon yazın, bu fonksiyon verilen bir dizi içinde sadece pozitif tam sayıları filtrelesin ve geri döndürsün. Örneğin, [1, -5, 3, 0, -2, 8] dizisi için döndürülecek sonuç şu şekilde olmalı: [1, 3, 8].

{
  let liste = [1, -5, 3, 0, -2, 8];
  let sayı;
  let yeniliste = [];
  function newList() {
    for (let i = 0; i < liste.length; i++) {
      if (liste[i] > 0 && Number.isInteger(liste[i])) {
        sayı = liste[i];
        yeniliste.push(sayı);
      }
    }
    console.log(yeniliste);
  }
  newList();
}

const notes = [50, 60, 70, 80, 90];
for (let i in notes) {
  console.log(notes[i]);
}

let toplam = 0;
const salaries = [10000, 15000, 20000];
for (let i in salaries) {
  toplam += salaries[i];
}
console.log(`Toplam: ${toplam}`);

const cars = ["BMW", "Volvo", "Mercedes"];
let text = "";
for (let car of cars) {
  text += car + " ";
}
console.log(text);
