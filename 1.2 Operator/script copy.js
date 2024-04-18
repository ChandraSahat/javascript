function tambah(angka1, angka2) 
{
    return angka1 + angka2;
}

// Fungsi untuk mengurangkan dua angka
function kurang(angka1, angka2) 
{
    return angka1 - angka2;
}

// Fungsi untuk menampilkan hasil
function tampilkanHasil(angka1, angka2, operasi)
{
    switch (operasi) 
    {
        case '+':
            console.log("Hasil penjumlahan: " +(angka1+angka2));
            break;
        case '-':
            console.log("Hasil pengurangan: " + kurang(angka1, angka2));
            break;
        default:
            console.log("Operasi tidak valid.");
            break;
    }
}

// Input dari pengguna
var angka1 = (prompt("Masukkan angka pertama:"));
var angka2 = (prompt("Masukkan angka kedua:"));
var operasi = prompt("Masukkan operasi (+ untuk penjumlahan, - untuk pengurangan):");

// Menampilkan hasil
tampilkanHasil(angka1, angka2, operasi);