
// Input jumlah anak ayam
let jumlahAnakAyam = parseInt(prompt("Masukkan jumlah anak ayam turun: "));
//tampilan baris pertama
console.log("Anak ayam ada " +jumlahAnakAyam); 

// Loop untuk menampilkan lagu "Anak Ayam"
for (let i = jumlahAnakAyam; i > 0; i--) 
{
    if (i === 1) {
        console.log("Induk ayam turun " + i + ", mati satu tinggal induknya");
    } else {
        console.log("Anak ayam turun " + i + ", mati satu tinggal " + (i - 1));
    }
}
