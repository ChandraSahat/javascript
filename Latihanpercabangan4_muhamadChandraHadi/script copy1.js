const nama=prompt("Masukan golongan kerja : ")

const gol=prompt("Gololangan :");

const jam_kerja=("Jam kerja :");

let gaji_perjam;   //penggunaan switch
switch(gol) {
    case "A":
    case "a":
    gaji_perjam=7000;
    break;
    
    case "B":
    case "b":
    gaji_perjam=8000;
    break;
    case "C":
    case "c":
    gaji_perjam=10000;
    break;
    case "D":
    case "d":
    gaji_perjam=7000;
    break;
    default: 
    console.log("Golongan tidak tersedia");
    break
}

let total_gaji_per_minggu = jam_kerja*gaji_perjam

let uang_lembur;
if (jam_kerja>48) 
{
    uang_lembur=(jam_kerja-48)*5000
}

let total_gaji_per_minggu = total_gaji_per_minggu+uang_lembur;

console.log ('Nama :'+nama+"\n Golongan : "+gol+"\n jam kerja :"+jam_kerja);
console.log (nama+"Menerima Gaji sebesar  "+total_gaji_per_minggu+"Per Minggu")