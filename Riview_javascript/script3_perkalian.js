const angka = prompt("Masukan angka yang ingin di kalikan :!");
console.log(" Berikut tabel perkalian Nya >> " + angka);

let hasil = " ";

for (let i = 1; i <= 10; i++) 
{
    hasil = angka * i;
    console.log(angka +" X "+ i + "=" + " "+ hasil)
}
