{
  let x = 0;
  for (x++; x <= 20; x++) {
    let y = 5;
    console.log(x * y);
  }
}
console.clear();
{
  let a = true;
  let count = 0;
  while (a) {
    if (count === 5) {
      a = false;
    }
    console.log(count++);
  }
}
console.clear();
//* 1 ile 50 arasında rastgele bir sayı tahmin etme oyunu yazın ve doğru tahmin edilene kadar devam etsin
{
const random = Math.trunc(Math.random() * 50 + 1);
console.log(random);

let logic = false;
let count = 0;

while (!logic) {
  count++;
  let guess = +prompt("1 ile 50 arasında bir sayı giriniz:");
  if (guess < 1 || guess > 50) {
    console.log("Aralık Dışı Tahmin");
  } else if (guess === random) {
    console.log(`Deneme: ${count}, Tebrikler`);
    logic = true;
  }
}
}
