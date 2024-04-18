// membuat perhitungan jumlah dan rata2 di dalam array
// Fungsi untuk membuat array dari input pengguna
// conts arr_conunt
function buatArray() 
    {
    let jumlahElemen = parseInt(prompt("Masukkan jumlah elemen yang ingin dimasukkan ke dalam array:"));
    let array = [];

    for (let i = 0 ; i < jumlahElemen; i++) {
        let angka = parseFloat(prompt("Masukkan angka ke- " + (i+1)));
        array.push(angka);
    }

    return array;
    }

// Fungsi untuk menghitung jumlah elemen dalam array
function hitungJumlah(array) {
    let jumlah = 0;

    for (let angka of array) {
        jumlah += angka;
    }

    return jumlah;
    }

// Fungsi untuk menghitung rata-rata elemen dalam array
function hitungRataRata(array) {
    if (array.length === 0) {
        return 0; // Menghindari pembagian dengan nol jika array kosong
    }

    let jumlah = hitungJumlah(array);
    let rataRata = jumlah / array.length;

    return rataRata;
}

// Fungsi untuk mencetak hasil ke konsol
function cetakHasil(jumlah, rataRata) {
    console.log("Jumlah semua elemen dalam array:", jumlah);
    console.log("Rata-rata elemen dalam array:", rataRata);
}

// Main program
function main() {
    let arr = buatArray();

    console.log("Array yang telah dibuat:", arr);

    let jumlah = hitungJumlah(arr);
    let rataRata = hitungRataRata(arr);

    cetakHasil(jumlah, rataRata);
}

// Panggil main function untuk menjalankan program
main();
