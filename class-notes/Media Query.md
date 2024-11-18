<@media screen and (koşul: sınır) {CSS}>

- CSS'in en altına yazılır

**Yazım Sırası**

1 - max-width: Maksimum x genişlik ve altı - Önce genel sonra spesifik olan yazılır - Önce max-width: 768px; sonra max-width:360px; vb.
2 - min-width: Minumum x genişlik ve üstü - Max-width tersi olarak uygulanır

** Responsive için önemli**

1 - width yerine max-width
2 - flex-wrap: wrap
3 - daha fazla küçülme istemiyorsak: min-width.
4 - Belirli küçülmeden sonra flex-direction: column haline getirilebilir.

**Content içi yazıların alt alta gelmesini önlemek için**

1 - white-space: nowrap

<Alan Paylaşımı: Eşit Paylaşım Sağlar>

parent {display: flex;}
child1 {flex: 1;}
child2 {flex: 1;}

**Class ismine gerek kalmadan değişiklik**

main .card:nth-child(even) : aynı classtan birden fazla content varsa sadece çiftleri değiştirir
