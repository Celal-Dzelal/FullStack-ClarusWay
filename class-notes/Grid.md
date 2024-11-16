Grid yapısının maksiumu sütun sayısı 12, satırlarda ise böyle bir sınırlandırma yok.

**Önemli Kavramlar:**

- Grid Line: Hücreler Arası Çizgiler(1'den başlar)
- Grid Area: Hücrelerin birleşerek oluşturduğu alan

Grid yapısı container seviyesinde verilir.

**grid-template-column: 1fr 1fr 1fr; (Sütun tanımlama yapısı, 12'ye kadar yükseltebiliriz)**

- grid-template-colum: repeat(3, 1fr) "Çoklu tanımlamada kullanım"
- grid-template-row: 1fr 1fr 1fr; (Satır tanımlama yapısı)
- grid-template-row: repeat(3, 1fr) "Çoklu tanımlamada kullanım"

**Eğer sütun genişliğini içeriğe göre ayarlamak istersek bunun 1fr yerine için max-content veya min-content kullanabiliriz.**

- max-content verilirse içeriğin genişliği kadar sütun da genişler
- min-content verilirse içerikteki en uzun kelime kadar sütun genişliği gelir

* gap ile hücre arası alanların genişliği ayarlanır

**Bir hücre birden fazla cümlenin alanına genişlesin istersek;**

1. Yöntem:

(Sütunlar İçin)
grid-column-start: başlangıç cizgisi
grid-column-end: bitiş çizgisi

(Satırlar İçin)
grid-row-start: başlangıç çizgisi
grid-row-end: bitiş çizgisi

2. Yöntem:

grid-column: başlangıç çizgisi/bitiş çizgisi
gird-row: başlangıç çizgisi/bitiş çizgisi

3. Yöntem: <Popüler Yöntem>

grid-area: satır başlangıç/sütun başlangıç/satır bitiş/sütun bitiş

Container'a grid auto flow verilirse artan satırların nereye koyulacağı belirlenebilir. Genel uygulama artan kısımların yoruma alınmasıdır.

**Ortalama Yöntemi**

1. Body alanına:

   - display: flex;
   - justify-content: center;
   - align-items: center;
   - height: 100vh;

2. Container alanına:

   - justify-content: center;
   - align-content: center;
   - height: 100vh;

3. İlgili hücre alanına: <Hücre içindeki içeriği ortalamak için>

   - display: grid;
   - place-items: center;
