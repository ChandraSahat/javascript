//buat fungsi dari Inlai Index
// Array nilai mahasiswa
const nilaiMahasiswa = [
  36, 66, 82, 53, 76, 17, 50, 38, 93, 29,
  78, 57, 22, 53, 78, 38, 20, 46, 80, 79
];
console.log("===================================");
// Fungsi untuk menentukan kategori index berdasarkan nilai
function IndexCategori(values) {
  const result = [];
  values.forEach(value => {
    let category;
    if (value > 80) {
      category = 'A';
    } else if (value >= 70 && value <= 80) {
      category = 'B';
    } else if (value >= 55 && value < 70) {
      category = 'C';
    } else if (value >= 45 && value < 55) {
      category = 'D';
    } else {
      category = 'E';
    }
    result.push(category);
  });
  return result;
}

// Fungsi untuk menampilkan nilai beserta kategori indexnya
function NilaiIndex(values) {
  const categories = IndexCategori(values);

  // Tampilkan header
  console.log("No\tNilai Ujian\tIndex Nilai");
  console.log("===================================");

  // Tampilkan nilai dan kategori indexnya
  values.forEach((value, index) => {
    console.log((index + 1) + '\t' + value + '\t\t' + categories[index]);
    //console.log([index + 1 ,+ value, "", "", categories[index]+"\t" ].join('\t'));
  });
}

// Panggil fungsi untuk menampilkan nilai beserta kategori indexnya
NilaiIndex(nilaiMahasiswa);
