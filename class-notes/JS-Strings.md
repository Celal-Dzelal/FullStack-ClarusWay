**TANIMLAMA**

1. const str = "string"
2. const str = 'string'
3. const str = `string`
4. String Constructor
   - const str = new String("string") --> Bunun tipi object

<String Yapısı ve Indeksleme>

let kelime = "Clarusway"

console.log(kelime[0]) --> 0. indeks

Indeks değiştirme yok çünkü immutable, parça olarak değişiklik yapılamaz.

<String Property>

length: Boşluklar dahil string içinde kaç karakter var?

console.log(str.length)

<Döngü İşlemi> Yaparken <DİKKAT>

for (let i = 0; i < str[last-index]; i++) --> YERİNE --> for (let i = 0; i < str.length; i++)

str.length daha dinamik olur. Str'nin karakter sayısı artarsa buna hemen cevap verir.

<> toLowerCase(): str.toLowerCase() tüm metin küçük harfe dönüşür.
<> toUpperCase(): str.toUpperCase() tüm metin büyük harfe dönüşür.

_STRING BİRLEŞTİRME YÖNTEMLERİ_

1. "+"

   console.log(str1 + " " + str2)

   str1 += str2 : Bu daha yaygın kullanım üsttekine göre, str2'nin başlangıcında boşluk olmalı

2. concat

   str1.concat(str2)

3. Template Literal

   ES6 ile tanımlanan yöntem

   console.log(`xxxx ${str1} xxx ${str2}`)

_STRING PARCALAMA_

1. split:
   - Belirtilen şekilde parçalama işlemi yapar.
   - Stringi parçalar ve dizi haline getirir.
   - str.split("ayraç")
   - Eğer iki tırnak arasına boşluk bırakılmazsa harfleri ayırır.
2. slice:
   - Negatif değer ile geriye gitmek mümkün
   - str.slice(start,end) --> end dahil değil
3. substring:
   - Slice'dan farkı negatif değer almaması
   - str.substring(start,end)
   - Çok kullanılmıyor
4. substr:

   - str.substr(start, characters)
   - Yakında patates

5. Join Metodu (Array Metodu):
   - Array'i birleştirerek string haline getirir. - array.join("ayraç")
6. Reverse Metodu (Array Metodu):
   - Ters çevirme
   - str.split("ayraç").reverse().join("ayraç")

_STRING İÇİNDE ARAMA İŞLEMLERİ_

1. includes:

   - true/false döndürür
   - case sensitive
   - str.includes("x")

2. indexOf:

   - case sensitive
   - karakter mevcutsa karşılaştığı ilk indeks numarasını döner
   - karakter yoksa -1 döner
   - str.indexOf("x")

3. search:

   - case sensitive
   - karakter mevcutsa karşılaştığı ilk indeks numarasını döner
   - karakter yoksa -1 döner
   - str.search("x")

<search - indexOf Farkı>

- REGEX: regular expression
- yazım stili / işareti
- Flags ile arama yöntemi değiştirilebilir

  - g: global arama
  - i: not case sensitive

  -str.search(/x/) --> case sensitive
  -str.search(/x/i) --> not case sensitive

4. match:

   - REGEX uyan kısımları bulur ve dizi olarak döndürür
   - str.match(/x/g)

<startswith() ve endswith()>

    - Case sensitive
    - true/false döner
    - str.startswith("değer")
    - str.endswith("değer")

_STRING'de DEĞİŞİKLİK_

1. replace:
   - Aynı kelimeden birden fazla varsa sadece ilk gördüğünü değiştirir.
   - str.replace("x","y")
   - Aynı kelimelerin hepsini değiştir
   - str.replaceAll("x","y")
2. trim:
   - Başta ve sonda bulunan boşlukları kaldırır
   - str.trim()
