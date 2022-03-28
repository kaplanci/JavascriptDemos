function sayiUret(UstLimit = 40) {
    return Math.ceil(Math.random() * UstLimit);
}

for (var j = 1; j<=6; j++){
    console.log( j + ". " + "ANKARAGÜCÜ");
    for (var i = 1; i<=6;i++) {
        console.log(sayiUret())
    }

}