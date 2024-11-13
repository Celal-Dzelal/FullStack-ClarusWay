// ? Bir dairenin yarıçapını kullanıcıdan alarak dairenin alanını ve çevresini hesaplayan bir program yazın. (Dairenin alanı: πr², çevresi: 2πr)

let yariCap = prompt("Yarı Çap Giriniz:");
let pi = Math.PI;
let alan = pi * Math.pow(yariCap, 2);
console.log(alan);

// ? Kullanıcıdan bir ondalıklı sayı alın. Bu sayıyı önce yukarı, sonra aşağı yuvarlayarak sonucu gösterin.

let num1 = prompt("Bir Ondalık Sayı Giriniz:");
console.log(Math.ceil(num));
console.log(Math.floor(num));

// ? 1 ile 100 arasında rastgele bir sayı üreten bir program yazın ve bu sayıyı ekrana yazdırın.

console.log(Math.random() * 100 + 1);

// ? Kullanıcıdan 5 sayı alarak bu sayılar arasındaki en büyük ve en küçük sayıyı bulan bir program yazın.

let numbers = [];
var num = Number(prompt("Bir sayı giriniz"));
numbers.push(num);
var num = Number(prompt("Bir sayı giriniz"));
numbers.push(num);
var num = Number(prompt("Bir sayı giriniz"));
numbers.push(num);
var num = Number(prompt("Bir sayı giriniz"));
numbers.push(num);
var num = Number(prompt("Bir sayı giriniz"));
numbers.push(num);
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// ? Kullanıcıdan bir metin olarak tam sayı alın ve bunu bir tam sayıya çevirip ekrana yazdırın.

let number = prompt("Bir Sayı Giriniz");
console.log(typeof number);
let newNumber = +number;
console.log(newNumber);
console.log(typeof newNumber);

// ?  Kullanıcıdan iki sayı alarak birinci sayının ikinci sayıya üssünü alan bir program yazın.

let sayi1 = prompt("Bir Sayı Giriniz:");
let sayi2 = prompt("Bir Sayı Daha Giriniz:");

let kuvvet = Math.pow(sayi1, sayi2);
console.log(kuvvet);

// ? Bir sayının karekökünü bulan bir program yazın. Sayıyı kullanıcıdan alın.

let sayi3 = prompt("Bir Sayı Giriniz");
console.log(Math.sqrt(sayi3));

// ? Kullanıcıdan iki cümle alarak bu cümleleri birleştiren ve ekrana yazdıran bir program yazın.

let cumle = prompt("Bir Cümle Giriniz:");
let cumle1 = prompt("Bir Cümle Daha Giriniz:");

let yeniCumle = `${cumle} ${cumle1}`;
console.log(yeniCumle);

// ? Kullanıcıdan bir kelime alarak bu kelimenin uzunluğunu bulan bir program yazın.

let word = prompt("Bir Kelime Giriniz");
var uzunluk = word.length;
console.log("Girdiğiniz kelimenin uzunluğu: " + uzunluk);

// ? Kullanıcıdan bir kelime alın ve kelimenin 3. karakterini 'Z' ile değiştirin, ardından sonucu ekrana yazdırın.

var word1 = prompt("En Az 4 Harfli Bir Kelim Giriniz:");
var newWord = word1.substring(0, 2) + "Z" + word1.substring(3);
console.log(newWord);

// ? Kullanıcıdan iki sayı alın ve bu sayıların eşit olup olmadığını kontrol eden bir program yazın.

let sayi4 = prompt("Bir Sayı Giriniz:");
let sayi5 = prompt("Bir Sayı Daha Giriniz:");

let isEqual = sayi4 == sayi5;
console.log(isEqual);

// ? Kullanıcıdan bir giriş alarak bu değerin bir sayı mı yoksa string mi olduğunu kontrol eden bir program yazın.

let entry = prompt("Giriş Yapınız:");
let isNumber = typeof entry === "number";
let isString = typeof entry === "string";
console.log("Girilen İfade Bir Sayı mı?: " + isNumber);
console.log("Girilen İfade Bir String mi?: " + isString);

// ! Her türlü stringe true veriyor çünkü prompt ile alınan değer string oluyor.
// ! ChatGpt üzerinden farklı yöntemler baktım ama if benzeri yapılar olduğu için bu şekilde bıraktım.

// ? Kullanıcının doğduğu yılı alarak kaç yaşında olduğunu hesaplayan bir program yazın.

let birthYear = prompt("Doğum Yılınızı Giriniz:");
const now = new Date();
let year = now.getFullYear();
let age = year - birthYear;
console.log(age);

// ? Bir değişkeni önce null , sonra undefined olarak tanımlayın ve her iki durumda da değişkenin türünü ekrana yazdırın.

var myVariable = null;
console.log(typeof myVariable);
var myVariable = undefined;
console.log(typeof myVariable);

// ? Kullanıcıdan bir sayı alarak bu sayının karesini ve küpünü hesaplayan bir program yazın.

let sayi6 = prompt("Bir Sayı Giriniz:");
let square = Math.pow(sayi6, 2);
let cube = Math.pow(sayi6, 3);
console.log(square);
console.log(cube);

// ? Kullanıcıdan bir kelime alın ve bu kelimenin her karakterini ayrı satırlarda ekrana yazdıran bir program yazın.
// ! Chatgpt sağolsun(: Öğrendiğimiz yöntemlerle çözebilen varsa yazsın lütfen

let word2 = prompt("Bir Kelim Yazınız:");
word2.split("").forEach(console.log);

// ? Bugünün tarihini alarak "Gün/Ay/Yıl Saat:Dakika" formatında ekrana yazdıran bir program yazın.

const now2 = new Date();
const day = now2.getDate();
const month = now2.getMonth() + 1;
const year1 = now2.getFullYear();
const hour = now2.getHours();
const minute = now2.getMinutes();
const date = `${day}/${month}/${year1} ${hour}:${minute}`;
console.log(date);

// ? Kullanıcıdan bir ondalıklı sayı alarak bu sayının tam kısmını ekrana yazdırın.

let sayi7 = prompt("Ondalıklı Bir Sayı Giriniz:");
console.log(Math.trunc(sayi7));

// ? Kullanıcıdan üç farklı sayı alarak bu sayıların ortalamasını hesaplayıp ekrana yazdıran bir program yazın.

let sayi8 = Number(prompt("Bir Sayı Giriniz:"));
let sayi9 = Number(prompt("Bir Sayı Daha Giriniz:"));
let sayi10 = Number(prompt("Son Bir Sayı Daha Giriniz:"));

let ort = (sayi8 + sayi9 + sayi10) / 3;
console.log(ort);

// ? Bir dizi tanımlayın ve bu dizinin ilk ve son elemanını ekrana yazdırın. Diziyi kullanıcıdan da alabilirsiniz.

let dizi = [2, 4, 6, 8, 10];
console.log(dizi[0]);
console.log(dizi[dizi.length - 1]);