console.log("jumlah deret Angka >>>")
// 
const N =prompt("MAsukan Nilai deret : "); // Nilai deret, bisa diganti sesuai kebutuhan

//inisialisasi nilai awal jumlah
let total = 0;


for (let i = 1; 
    i <= N; 
    i++) 
{
  total += i ;  // total=total+i  operator augmented Assignment
}

console.log(">> Antara 1 sampai " +N+ " adalah " +total);

