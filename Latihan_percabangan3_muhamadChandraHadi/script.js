//Lat Percabangan 3 - Tgl 01April2024 
const totbel=prompt("masukan Total Belanja Anda : ");
//let diskon = 0;
//let total_bayar = 0;

    if (totbel <= 100000) {
        diskon = 0;
    } 
    else if (totbel >= 100000 && totbel <= 500000) {
        diskon = 10;
    } 
    else if (totbel >= 500000 && totbel<=1000000) {
        diskon = 20;
    }
    else if (totbel >=1000000) {
        diskon = 30;
    }


total_bayar = totbel-(totbel * diskon / 100);

//out put 
console.log("Total belanja = " + totbel);
    console.log("Selamat Anda mendapat Diskon " + diskon + "%");
    console.log("Total Bayar = " + total_bayar);