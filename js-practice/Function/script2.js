/* Fibonacci Serisi Bulma: Kullanıcının girdiği sayıya kadar olan Fibonacci
serisini hesaplayan bir fonksiyon yazın.*/

{
  function fibonacci() {
    let num = +prompt("Bir Sayı Giriniz:");
    let a = 0;
    let b = 1;
    let fibo;
    let seri = [a];

    if (num === 0) {
      console.log("Sonuç: 0");
    } else if (num === 1) {
      console.log("Sonuç: 0, 1");
    } else {
      seri.push(b);
      for (let i = 2; i <= num; i++) {
        fibo = a + b;
        seri.push(fibo);
        a = b;
        b = fibo;
      }
      console.log(fibo);
      console.log(seri.join(","));
    }
  }
  fibonacci();
}

/* Asal Sayı Kontrolü: Kullanıcıdan alınan sayının asal olup olmadığını kontrol
eden bir fonksiyon yazın. */

{
  let num = +prompt("Bir Sayı Giriniz:");
  function asalSayı() {
    if (num <= 1) {
      console.log("Asal Değil");
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        console.log("Asal Değil");
        return;
      }
    }
    console.log("Asal Sayı");
  }
  asalSayı();
}

/* Sayıların Tersini Bulma: Bir sayının tersini (123 → 321 gibi) bulan bir
fonksiyon yazın. */

{
  let num = +prompt("Bir Sayı Giriniz:");
  function reversing() {
    let reverseNum = num.toString().split("").reverse().join("");
    console.log(reverseNum);
  }
  reversing();
}

/* Mükemmel Sayı Kontrolü: Bir sayının kendisinden başka tüm bölenlerinin
toplamı kendisine eşitse mükemmel sayıdır (örn. 6 = 1 + 2 + 3). Bu tanıma
uyan sayıları bulan bir fonksiyon yazın. */
{
  let num = +prompt("Bir Sayı Giriniz:");
  let sum = 0;
  function mukemmelSayi() {
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }

    if (num === sum) {
      console.log("Mükemmel Sayı");
    } else {
      console.log("Mükemmel Sayı Değil");
    }
  }
  mukemmelSayi();
}

/* Armstrong Sayısı Kontrolü: Girilen bir sayının basamaklarının küplerinin
toplamı kendisine eşitse Armstrong sayısıdır (ör. 153 = 1³ + 5³ + 3³). Bu tür
sayıları bulan bir fonksiyon yazın. */

{
  let num = +prompt("Bir Sayı Giriniz:");
  let sum = 0;

  function armstrong() {
    digit = num.toString().split("").map(Number);
    for (let i = 0; i < digit.length; i++) {
      sum += Math.pow(digit[i], 3);
    }
    if (sum === num) {
      console.log("Armstrong Sayısı");
    } else {
      console.log("Armstrong Sayısı Değil");
    }
  }

  armstrong();
}

/* İki Sayının EBOB'unu Bulma: Kullanıcıdan iki sayı alarak, bu iki sayının en
büyük ortak bölenini (EBOB) bulan bir fonksiyon yazın. */

{
  let num1 = +prompt("Bir Sayı Giriniz:");
  let num2 = +prompt("Bir Sayı Daha Giriniz:");

  function ebob() {
    for (let i = 1; i <= num1; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        ebob = i;
      }
    }
    console.log(`Ebob: ${ebob}`);
  }
  ebob();
}
