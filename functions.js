function sayiUret(UstLimit = 500){
    return Math.ceil(Math.random() * UstLimit);
}

sayiUret()




var sayi1 = sayiUret(85)
var sayi2 = sayiUret()
var sayi3 = sayiUret()
var sayi4 = sayiUret()
var sayi5 = sayiUret()

console.log('Kolon : ' + sayi1 + ' ' + sayi2 + ' ' + sayi3 + ' ' 
+ sayi4 + ' ' + sayi5)