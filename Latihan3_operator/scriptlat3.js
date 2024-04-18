/* tugas latihan kalkulator BMI
pakai prompt() OP3_Muhamad Chandra Hadi
*/

let tinggibdn=prompt("Masukan Tinggi badan Anda : (dalam satuan CM)");
console.log("Tinggi Badan Anda "+tinggibdn+"CM");

let beratbdn=prompt("Masukan Berat badan Anda :(dalam satuan KG)");
console.log("berat badan "+beratbdn+"KG");

let hitungBMI= beratbdn/(tinggibdn*tinggibdn)*10000;
console.log(">>Jadi Index BMI Anda :" +hitungBMI);

//konversi SUHU
