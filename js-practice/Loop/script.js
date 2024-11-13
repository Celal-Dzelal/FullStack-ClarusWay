/* Kullanıcının girdiği bir sayının asal olup olmadığını kontrol eden bir program
yazın. */

let number = Number(prompt("Bir Sayı Giriniz:"));
let asal = true;

if (number <= 1) {
  asal = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      asal = false;
      break;
    }
  }
}
asal === true ? console.log("Asal Sayı") : console.log("Asal Değil");

/* Bir dizideki en büyük ve en küçük sayıları bulan bir fonksiyon yazın.
 */

let numbers = [];
for (let i = 0; i < 5; i++) {
  let randomNo = Math.trunc(Math.random() * 100) + 1;
  numbers.push(randomNo);
}
console.log(numbers);

let max = numbers[0];
let min = numbers[0];

for (let x = 1; x < numbers.length; x++) {
  if (numbers[x] > max) {
    max = numbers[x];
  }
  if (numbers[x] < min) {
    min = numbers[x];
  }
}
console.log(`En Büyük Sayı: ${max}`);
console.log(`En Küçük Sayı: ${min}`);

// Palindrom Kelime Kontrol

let word = prompt("Bir Kelime Giriniz");
let palindrom = true;

for (let i = 0; i < word.length / 2; i++) {
  if (word[i] !== word[word.length - 1 - i]) {
    palindrom = false;
    break;
  }
}
if (palindrom) {
  console.log("Palindrom");
} else {
  console.log("Değil");
}

// Sayı Tahmin Etme

let randomNumber = Math.trunc(Math.random() * 50 + 1);
console.log(randomNumber);
sonuc = false;
sayac = 0;
while (sonuc === false && sayac <= 5) {
  sayac += 1;
  let tahmin = prompt("1-50 Arasında Bir Sayı Giriniz");
  if (sayac == 5) {
    console.log(`Deneme Hakkınız Bitti. Doğru Sayı: ${randomNumber}`);
    break;
  } else if (tahmin < 0 || tahmin > 50) {
    console.log("Hatalı Giriş, Lütfen 1-50 Arasında Giriş Yapınız.");
  } else if (tahmin < randomNumber) {
    console.log("Daha Yüksek Bir Tahminde Bulununuz");
  } else if (tahmin > randomNumber) {
    console.log("Daha Düşük Bir Tahminde Bulununuz");
  } else if (tahmin == randomNumber) {
    sonuc = true;
    console.log(`Tebrikler Doğru Tahmin. Sayı: ${randomNumber}`);
    break;
  }
}

// Faktöriyel Hesaplama

let no = Number(prompt("Bir Sayı Giriniz"));
let faktoriyel = 1;

if (no === 0 || no === 1) {
  console.log(`${no}! = 1`);
} else if (no > 1) {
  for (let i = 1; i <= no; i++) {
    faktoriyel *= i;
  }
  console.log(`Sonuç: ${faktoriyel}`);
}
