//! reduce() fonksiyonu, bir diziyi tek bir değere indirmek için kullanılır. Dizinin her elemanı üzerinde işlem yapar ve birikimli bir sonuç elde eder.

//**Basic Syntax*/

//? array.reduce((accumulator, item, index, array) => {code block}, initial value);

// accumulator: Birikimli değer, önceki işlemlerden elde edilen sonuç
// item: Dizinin her bir ögesi (Mevcut eleman)
// index: Mevcut elemanın indeksi
// array: Dizinin kendisi
// initialValue: Başlangıç değeri(isteğe bağlı). Verilmezse, acc ilk işlemde dizinin ilk elemanı olur.

const numbers = [1, 2, 3, 4];

const result = numbers.reduce((acc, item, index, array) => {
  console.log(`Index: ${index}, Item: ${item}, Accumulator: ${acc}`);
  return acc + item;
}, 0);
console.log(result);

//? Özellikler

// 1. Birikimli işlem yapar. Diziyi tek bir elemana indirmek için her eleman üzerinde belirli bir fonksiyon çalıştırır.
// 2. callback fonksiyonu alır. Fonksiyon dizinin her elemanı için çağırılır ve iki ana parametre alır; acc ve currentValue.
// 3. Tek bir değer döndürür.

//! ÖRNEK 1: Dizi Elemanlarının Toplamını Hesaplama
{
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
  console.log(sum);
}

//! ÖRNEK 2: En Büyük Sayıyı Bulma

{
  const numbers = [10, 5, 20, 15, 20, 35, 40, 25];
  const biggest = numbers.reduce(
    (acc, currentValue) => (currentValue > acc ? currentValue : acc), //** Mevcut değer acc'den büyükse mevcut değeri döndür. Eğer küçükse acc olduğu gibi kalır. */
    numbers[0] //**Başlangıç değeri 0. indeks*/
  );
  console.log(biggest);
}

//! ÖRNEK 3: Dizideki Elemanların Frekansını Hesaplama

{
  const words = ["apple", "banana", "apple", "orange", "banana", "banana"];
  const frequency = words.reduce((acc, currentValue) => {
    acc[currentValue] = (acc[currentValue] || 0) + 1;
    //** Örn; acc["apple"] = (acc["apple"] || 0) */
    //** apple daha önce tanımlanmışsa yani değeri varsa acc["apple"] kullanılır yoksa 0 alır ve sonra 1 eklenir. Sonra acc[currentValue] güncllenir ve 1 olur. */

    return acc;
  }, {}); //** acc başlangıçta boş bir nesne. Nesne ile kelimlerin kaç kez tekrar ettiği tutulacak */
  console.log(frequency);
}
