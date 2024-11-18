1. Birden çok çeşit veri tipi tutabilir
2. Sıralıdır
3. Index 0'dan başlar
4. Birden çok veri tutabilir
5. Değiştirilebilir
6. Referans temellidir

_Array Oluşturma_

1. const array = []

2. const newArray = new Array() | Çok kullanılmıyor

3. const array = Array.of() | Çok kullanılmıyor

_DİZİ DEĞİŞTİREN METOTLAR (MUTATOR METHODS)_

1. push(); array.push(item)
   Dizinin sonuna eleman ekler
   Eklemeden sonra listenin güncel halini döndürür

2. pop(); array.pop()
   Dizinin son elemanını siler
   Elemanı sildikten sonra döndürür

3. unshift(); array.unshift()
   Dizinin sıfırıncı indeksine eleman ekler
   Ardından dizinin eleman sayısını döndürür

4. shift(); array.shift()
   Sıfırıncı indeksteki elemanı siler
   Silinen elemanı döndürür

5. splice(x,y,z); array.splice(x,y,z)
   x => eklenecek indeks numarası
   y => 0 ise araya ekleme, 1 ise üzerine yazma
   z => eklenecek veri

   array(x,y); silme işlemi yapar

   array.splice(0, array.length); listeyi siler
   (length = 0 ile de liste silinir)

6. reverse(); array.reverse()
   listeyi tam tersine çevirir

7. sort(); array.sort()
   listeyi alfabetik/numerik olarak hizalar

   Çok basamaklı sayıları sıralarken ilk basamağı kullandığı için hatalı sıralama yapar. Çözüm;

   array.sort((a, b) => a - b)

_DİZİ ERİŞİM METOTLARI_

1. length = array.length
   Dizinin eleman sayısını döner

2. includes(); array.includes(x)
   Eleman listede mevcut mu?
   true/false döndürür

3. indexOf(); array.indexOf(x)
   Aranan elemanı gördüğü ilk indeksi döndürür
   Eleman mevcut değilse -1 döner

4. lastIndexOf(); array.lastIndexOf(x)
   Aramayı sondan başlatır ve bulduğu ilk indeksi döndürür
   Eleman mevcut değilse -1 döner

5. join(); array.join("ayraç")
   Parantez içi boş bırakılırsa virgülle birleştirir
   (" ") Kelime aralarını boşlukla doldurur

6. slice(); array.slice(start, end)
   end verilmezse sona kadar gider
