//! Bir dizideki pozitif sayıların karesini alıp, sonucu 50'den büyük olanları döndüren bir fonksiyon yazın.

{
  const numbers = [-5, -4, -3, -2, 4, 5, 6, 7, 8, 9, 10, 11];
  const positiveNumbers = numbers.filter((number) => number > 0);
  const square = positiveNumbers.map((number) => Math.pow(number, 2));
  const bigger = square.filter((number) => number > 50);
  console.log(bigger);
}
{
  //? ChatGpt'nin önerdiği kısa çözüm
  const numbers = [-5, -4, -3, -2, 4, 5, 6, 7, 8, 9, 10, 11];
  const result = numbers
    .filter((num) => num > 0)
    .map((num) => Math.pow(num, 2))
    .filter((num) => num > 50);
  console.log(result);
}

//! Bir dizideki tüm sayıların çarpımını hesaplayan bir fonksiyon yazın.

{
  const numbers = [1, 2, 3, 4, 5];
  let multiplication = 1;
  for (let i = 0; i < numbers.length; i++) {
    multiplication *= numbers[i];
  }
  console.log(multiplication);
}

//! Bir dizideki ilk negatif sayının indeksini döndüren bir fonksiyon yazın.

{
  const numbers = [1, 2, 3, 4, -5, 6, 7, 8, -9, 10, -11];
  for (let i in numbers) {
    if (numbers[i] < 0) {
      console.log(`Index: ${i}`);
      break;
    }
  }
}

{
  //? ChatGpt'nin önerdiği kısa çözüm
  const numbers = [1, 2, 3, 4, -5, 6, 7, 8, -9, 10, -11];
  const index = numbers.findIndex((num) => num < 0);
  console.log(`Index: ${index}`);
}

//! Bir dizideki kelimelerin hepsini büyük harfe çeviren bir fonksiyon yazın.

{
  const text = ["bir", "gün", "herkes", "fenerbahçeli", "olacak"];
  const upper = text.map((word) => word.toUpperCase());
  console.log(upper);
}

//! Bir dizide ilk 50'den büyük sayıyı bulan bir fonksiyon yazın.

{
  const numbers = [25, 30, 40, 45, 50, 55, 60, 70, 90];
  const bigger = numbers.filter((number) => number > 50);
  console.log(bigger[0]);
}

//! Bir dizideki sayıların karesini alıp, sonucu 100'den küçük olanları döndüren bir fonksiyon yazın.

{
  const numbers = [6, 7, 8, 9, 10, 11, 12, 13];
  const square = numbers
    .map((number) => Math.pow(number, 2))
    .filter((number) => number < 100);
  console.log(square);
}

//! Bir dizide tüm elemanların çift sayı olup olmadığını kontrol eden bir fonksiyon yazın.

{
  const numbers = [6, 7, 8, 9, 10, 11, 12, 13];
  let even = true;
  for (number of numbers) {
    if (number % 2 !== 0) {
      even = false;
      console.log("Hepsi Çift Değil");
      break;
    }
  }
  if (even) {
    console.log("Hepsi Çift");
  }
}

//! Bir diziyi tersten oluşturmak için bir fonksiyon yazın.

{
  const numbers = [6, 7, 8, 9, 10, 11, 12, 13];
  const reverseArray = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    reverseArray.push(numbers[i]);
  }
  console.log(reverseArray);
}

//! Bir dizide en az bir elemanın 10'un katı olup olmadığını kontrol eden bir fonksiyon yazın.

{
  const numbers = [15, 30, 45, 60, 75, 90, 105, 120];
  let control = true;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 10 === 0) {
      console.log("10'un Katı Mevcut");
      control = false;
      break;
    }
  }
  if (control) {
    console.log("10'un Katı Mevcut Değil");
  }
}

{
  //? Chatgpt'ye göre kısa çözüm
  const numbers = [15, 30, 45, 60, 75, 90, 105, 120];
  const hasMultipleOfTen = numbers.some((number) => number % 10 === 0);

  if (hasMultipleOfTen) {
    console.log("10'un Katı Mevcut");
  } else {
    console.log("10'un Katı Mevcut Değil");
  }
}

//! Bir dizideki tüm kelimeleri ters çeviren bir fonksiyon yazın.

{
  const text = ["Dünya", "Tersine", "Dönse", "Affetmem"];
  const reverseWords = text.map((word) => word.split("").reverse().join(""));
  console.log(reverseWords);
}

//! Bir diziden sadece tek sayıları döndüren bir fonksiyon yazın.

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const odds = numbers.filter((number) => number % 2 !== 0);
  console.log(odds);
}

//! Bir dizideki her elemana indeksini ekleyip yeni bir dizi döndüren bir fonksiyon yazın.

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numbersList = numbers.map(
    (number, index) => `Number: ${number} Index: ${index}`
  );
  console.log(numbersList);
}

//! Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın.

{
  //? Loop Kullanacaksak Çözüm
  const numbers = [15, 30, 45, 60, 75, 90, 105, 120];
  let biggest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  console.log(biggest);
}

{
  //? Yoksa Mantıklı Çözüm
  const numbers = [15, 30, 45, 60, 75, 90, 105, 120];
  const biggest = Math.max(...numbers);
  console.log(biggest);
}

//! Bir dizideki her elemanı 3 artıran bir fonksiyon yazın (diziyi yerinde değiştirerek).

{
  const numbers = [15, 30, 45, 60, 75, 90, 105, 120];
  numbers.forEach((number) => console.log(number + 3));
}

//! Bir dizide ilk defa 10 olan elemanın indeksini döndüren bir fonksiyon yazın.

{
  const numbers = [2, 4, 6, 8, 10, 12, 10, 10];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
      console.log(`Indeks: ${i}`);
      break;
    }
  }
}

//! Bir dizide tüm sayıların pozitif olup olmadığını kontrol eden bir fonksiyon yazın.

{
  const numbers = [-4, -2, 0, 2, 4, 6, 8, 10];
  let control = true;
  for (number of numbers) {
    if (number <= 0) {
      control = false;
      console.log("Dizide Negatif Sayılar ve Sıfır Mevcut");
      break;
    }
  }
  if (control) {
    console.log("Tüm Sayılar Pozitif");
  }
}

//! Bir dizideki 4 karakterden uzun kelimeleri döndüren bir fonksiyon yazın.

{
  const words = ["bir", "gün", "herkes", "fenerbahçeli", "olacak"];
  const upperFour = words.filter((word) => word.length > 4);
  console.log(upperFour);
}

//! Bir dizideki kelimeleri harflere ayırıp düz bir liste haline getiren bir fonksiyon yazın.

{
  const words = ["bir", "gün", "herkes", "fenerbahçeli", "olacak"];
  const letter = words.map((word) => word.split("")).flat();
  console.log(letter);
}

//! Bir dizide çift sayıların toplamını hesaplayan bir fonksiyon yazın.

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = 0;
  const even = numbers.filter((number) => number % 2 === 0);
  for (number of even) {
    sum += number;
  }
  console.log(sum);
}

console.clear();

//! Bir dizideki elemanların sırasını tersine çeviren bir algoritma yazın, ancak dizi elemanlarını doğrudan değiştirmeden yeni bir dizi oluşturun.

{
  const words = ["bir", "gün", "herkes", "fenerbahçeli", "olacak"];
  let reverseWords = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reverseWords.push(words[i]);
  }
  console.log(reverseWords);
}

//! Bir dizideki tüm sayıları çift mi yoksa tek mi olduğuna göre iki ayrı alt diziye ayıran bir fonksiyon yazın.

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function oddEven() {
    const odd = numbers.filter((number) => number % 2 !== 0);
    let sumOdd = 0;
    for (number of odd) {
      sumOdd += number;
    }
    console.log(sumOdd);

    const even = numbers.filter((number) => number % 2 === 0);
    let sumEven = 0;
    for (number of even) {
      sumEven += number;
    }
    console.log(sumEven);
  }
  oddEven();
}

//? Chat gpt reduce ile çözüm öneriyor daha kısa ve kolay

//! Bir dizide her bir elemandan, kendisinden sonra gelen sayıların toplamını hesaplayıp yeni bir dizi oluşturan bir algoritma yazın.

{
  const numbers = [1, 2, 3, 4, 5];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      sum += numbers[j];
    }
    result.push(sum);
  }
  console.log(result);
}

//! Bir dizide, en sık tekrar eden elemanı ve tekrar sayısını bulan bir algoritma yazın.

{
  const text = [
    "bir",
    "berber",
    "bir",
    "berbere",
    "gel",
    "beraber",
    "bir",
    "berber",
    "dükkanı",
    "açalım",
    "demiş",
  ];
  let repeatedWord = "";
  let maxCount = 0;
  for (let i = 0; i < text.length; i++) {
    let count = 0;
    for (let j = 0; j < text.length; j++) {
      if (text[i] === text[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      repeatedWord = text[i];
    }
  }
  console.log(repeatedWord);
  console.log(maxCount);
}

//! Bir dizideki tüm elemanların modunu (en çok tekrar eden eleman) hesaplayan bir algoritma yazın.

//? SORUYU ANLAMADIM ((:

//! Bir diziyi alt dizilere bölerek (örneğin her 3 elemanda bir) alt dizilerden oluşan bir dizi döndüren bir fonksiyon yazın.

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let limit = 3;
  let tripleNumbers = [];
  for (let i = 0; i < numbers.length; i += limit) {
    const triple = numbers.slice(i, i + limit);
    tripleNumbers.push(triple);
  }
  console.log(tripleNumbers);
}

//! Bir dizideki tüm elemanların birbirine olan farklarını hesaplayıp yeni bir dizi döndüren bir fonksiyon yazın.

{
  const numbers = [8, 6, 4, 2];
  let extract = 0;
  let diff = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    extract = numbers[i] - numbers[i + 1];
    diff.push(extract);
  }
  console.log(diff);
}

{
  const numbers = [8, 6, 4, 2];
  const diff = numbers
    .map((number, numberi) => {
      if (numberi < numbers.length - 1) {
        return number - numbers[numberi + 1];
      }
    })
    .filter((value) => value !== undefined);
  console.log(diff);
}

//! Bir dizide, her bir elemanı kendisinin karesiyle ve indeksinin çarpımıyla değiştiren bir algoritma yazın.

{
  const numbers = [1, 2, 3, 4, 5];
  const calculate = numbers.map((number, index) => Math.pow(number, 2) * index);
  console.log(calculate);
}

//! Bir dizideki sayıları büyükten küçüğe sıralayın, ancak dizinin orijinal sırasını bozmadan sadece yeni diziyi döndürün.

{
  const numbers = [8, 6, 4, 2];
  console.log(numbers.slice(0, numbers.length).sort());
  console.log(numbers);
}

