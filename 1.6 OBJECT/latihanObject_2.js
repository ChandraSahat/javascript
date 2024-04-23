const Daftar_barang =
[
    { kode_barang: "002", nama_prodeuk: "Indomie Ayam", hrg: 2500, stock: 25 },
    { kode_barang: "003", nama_prodeuk: "Indomie Goreng", hrg: 3000, stock: 15 },
    { kode_barang: "001", nama_prodeuk: "Chitato BBQ", hrg: 5000, stock: 10 },
    { kode_barang: "004", nama_prodeuk: "Lays Original", hrg: 4500, stock: 20 },
    { kode_barang: "005", nama_prodeuk: "Teh Madu ", hrg: 2000, stock: 50 },
    { kode_barang: "010", nama_prodeuk: "Cola-cola", hrg: 4400, stock: 70 },
    { kode_barang: "015", nama_prodeuk: "marjan", hrg: 4000, stock: 38 },
];

function TampilkanDftrBarang()
{
console.log("=======================================================================================");
console.log("kode barang \t\t nama produk \t\t harga \t\t stock");
console.log("=======================================================================================");
Daftar_barang.forEach(function(barang) 
{
    const { kode_barang, nama_prodeuk, hrg, stock } = barang; // Mendestrukturisasi objek barang
    console.log(`${kode_barang}\t\t\t ${nama_prodeuk}\t\t ${hrg}\t\t ${stock}`);
});
console.log("=======================================================================================");
}       
   
let barang_dipilih;
do {TampilkanDftrBarang();
    let kodeBarang_pilihan=prompt("Masukan Kode Barang !");
    barang_dipilih=Daftar_barang.find(barang => barang.kode_barang === barang_dipilih);
    if (!barang_dipilih){
    console.log("Kode barang yang di masukan tidak Falid. Silahkan Coba lagi !!!");
}    
    }
while (!barang_dipilih);

console.log("--------------------------------------------------");
console.log("Anda memilih: "+ barang_dipilih.nama_prodeuk);
console.log("Harga: " +barang_dipilih.hrg);
console.log("Stok tersedia:" +barang_dipilih.stock);
console.log("--------------------------------------------------");