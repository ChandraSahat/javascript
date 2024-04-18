//Lat Percabangan 4 - Tgl 01April2024 

//input nama karyawan
const nama=prompt("Masukan Nama Karyawan: ");
console.log("nama : "+nama);

//penggunaan switch
const golongan =prompt("Masukan Golongan : ");
console.log("golongan : "+golongan);
let gajiPerJam
switch (golongan)
     {
        case 'A':
        case'a':
            gajiPerJam = 6000;
            break;
        case 'B':
        case 'b':
            gajiPerJam = 7000;
            break;
        case 'C':
        case 'c':
            gajiPerJam = 8000;
            break;
        default:
            gajiPerJam = 10000;
            break;
    }

    //penggunaan percabangan IF Else
const jamKerja=prompt("Masukan jumlah jam kerja :");
console.log("Jumlah jam kerja : "+jamKerja)
let uangLembur
//gajiPokok = gajiPerJam * jamKerja;

    if (jamKerja >=48) 
    {
        uangLembur=(jamKerja-48)*5000;
    } 
    else
    {
        uangLembur=0;
    } 
    //perhitungan gaji karyawan
    let gaji=gajiPerJam*jamKerja+uangLembur;
    console.log("")
    console.log (nama+" menerima gaji sebesar : "+gaji+" per Minggu")

