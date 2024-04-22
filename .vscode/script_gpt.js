const barang = [
  { kode_barang: '001', nama_produk: 'Indomie', harga: 2000, stock: 90 },
  { kode_barang: '002', nama_produk: 'Indomie', harga: 2000, stock: 90 },
  { kode_barang: '003', nama_produk: 'Indomie', harga: 2000, stock: 90 }
];
// Fungsi untuk mencetak tabel barang dengan menggunakan gabungan string manual
function cetakTabelBarang(data) {
  // Mencetak header tabel
  console.log('=============================================');
  console.log('kode barang   nama produk    harga   stock');
  console.log('=============================================');

  // Menggunakan penggabungan string manual untuk mencetak setiap baris data
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const row = item.kode_barang + '\t' + item.nama_produk + '\t\t' + item.harga + '\t' + item.stock;
    console.log(row);
  }

  // Mencetak garis penutup tabel
  console.log('=============================================');
}

// Memanggil fungsi untuk mencetak tabel barang dengan gabungan string manual
cetakTabelBarang(barang);
