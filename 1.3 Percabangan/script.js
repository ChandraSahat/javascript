//If statment =satu blok /satu pilihan

const total_belanja=prompt("Masukan Total Belanja : ");
/*if (total_belanja>80000)
{
console.log("Selamat Anda Mendapat Hadiah!") ;
}
*/

console.log("Terimakasih, Telah Berbelanja!")

/*/IF Else statement
if (total_belanja >10000) {
    console.log("Selamat Anda mendapatkan Piring Cantik !")
}
else {console.log("Mohon maaf anda belum dapat hadiah!")}
console.log("Terimakasih Sudah berbelanja...!");
*/

//2.Log in
/*
const password="instingsaka";

if (password="LegendoffAang")
{}
{console.log("Masukan Password, Ang !")
}
{console/log()}
*/

//3. If ELse / IF else
const nilai=prompt("masukan nilai Anda : ");

if (nilai >=80){console.log("Nilai Anda Berpredikat BAIK");}
else if (nilai>=65){console.log("Nilai anda berpredikat CUKUP");}
else {console.log("nilai anda berpredikat SANGAT BURUK");}

//4. switch statement
const warna="merah";
let pesan="";
switch(warna){
case "merah":
pesan= "Anda memilih warna Merah"
break

case "biru":
pesan="Anda memilih warna Biru";
break


default:
    pesan="Warna yg Anda pilih tidak Ada!";
    break
}
console.log(pesan);