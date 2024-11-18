_For Loop_

- İç içe arraylerde iç içe for loop kullanılır (Çok Tavsiye Edilmiyor)

const array = [5, 10, 15, 20, 25];
sum = 0;
for(let i = 0; i < array.length; i ++) {
sum += array[i]
}
console.log(sum)

_for in metodu_

- Indeks döner

for (key in object) {
// code block
}

<Örnek 1>
const notes = [50, 60, 70, 80, 90]
for (let i in notlar) {
console.log(notlar[i])
}

<Örnek 2>
let toplam = 0;
const salaries = [10000, 15000, 20000];
for (let i in salaries) {
toplam += salaries[i];
}
console.log(`Toplam: ${toplam}`);

_for of metodu_

- Direk olarak dizi elemanına ulaşım sağlar
- i yerine liste adının tekil hali kullanılabilir

for (let element of array) {
//Code Block
}

const cars = ["BMW", "Volvo", "Mercedes"];
let text = "";
for (let car of cars) {
text += car + " ";
}
console.log(text);

_for each metodu_

- Void bir metot
- Diziyi değiştirmez
- Callback fonksiyon alır
- Üç parametre alır (Biri zorunlu diğerleri ihtiyaç halinde)
- Return yapmaz (_Önemli Bilgi_)

1. Yol

array.forEach ((element, index, array) => code block)

2. Yol

array.forEach(functionName)
function functionName(element, index, array) {
Code Block
}

3. Yol

array.forEach(function(element, index, array){Code Block})

_map_

- Yapılan değişikliği diziye atıp dönüş yapar
- Orjinal dizi değişmez

let newArray = oldArray.map(element) => operates;

_filter_

- Koşul sağlayan elemanları seçmek için kullanılır
- Koşulu sağlayan elemanları içeren diziyi döndürür
- Orjinal dizi değişmez

const newArray = array.filter((element) => Code Block)

_Chaining(Pipeline)_

- Peşpeşe metot ekleme

const newArray = array.filter((element) => condition).map((element) => Code Block)
