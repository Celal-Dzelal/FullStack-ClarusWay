//? Bir dizi içinde tek sayıların toplamını ve çift sayıların
//? toplamını ayrı ayrı hesaplayan bir for döngüsü yaz.

{
  let numbers = [3, 8, 15, 6, 12, 7, 21, 14];
  let oddsum = 0;
  let evensum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evensum += numbers[i];
    }
    if (numbers[i] % 2 !== 0) {
      oddsum += numbers[i];
    }
  }
  console.log(`Çift Sayılar Toplamı: ${evensum}`);
  console.log(`Tek Sayılar Toplamı: ${oddsum}`);
}

//? Bir dizide en yüksek ve en düşük değeri bulan bir while döngüsü yaz.

{
  let numbers = [3, 8, 15, 6, 12, 7, 21, 14];
  let biggest = numbers[0];
  let smallest = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
    i++;
  }
  console.log(`En Büyük: ${biggest}`);
  console.log(`En Küçük: ${smallest}`);
}

//? Bir dizi içindeki tüm sayıları sırayla kontrol et ve sadece
//? art arda gelen sayılar azalan sıradaysa (önceki sayı bir sonrakinden
//? büyükse) bu sayı çiftini ekrana yazdır.

{
  let numbers = [10, 8, 12, 7, 5, 15, 13, 20];
  let decrease = false;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1] && !decrease) {
      console.log(numbers[i], numbers[i + 1]);
      decrease = true;
    } else if (numbers[i] < numbers[i + 1]) {
      decrease = false;
    }
  }
}

//? Bir do...while döngüsü kullanarak, kullanıcının girdiği sayıya
//? kadar olan(Girilen Sayı Dahil Değil) tüm sayıların toplamını
//? hesaplayın. (Kullanıcıdan sayıyı alın.)

{
  let num = 4;
  let i = 0;
  let toplam = 0;

  do {
    toplam += i;
    i++;
  } while (i < num);
  console.log(toplam);
}

//? Soru: Bir dizide (array) belirli bir sayının (örneğin, 7)
//? bulunup bulunmadığını kontrol eden bir kod yaz.
//? Eğer sayı dizide bulunursa bulundu çıktısını ver,
//? bulunmazsa bulunamadı çıktısını ver.

const numbers = [3, 5, 8, 12, 7, 15, 22];
let x = 18;
let i = 0;
let flag = false;

while (!flag && i < numbers.length) {
  if (x === numbers[i]) flag = true;
  i++;
}
console.log(flag ? "Mevcut" : "Mevcut Değil");
