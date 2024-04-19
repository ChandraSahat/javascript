let arr = [3,5,7,9,11,18];

// length = menampilkan jumlah isi dari array
console.log(arr.length) //5

//join -Menggabungkan isi array menjadi sebuah string
const word = ["Dokter","itu","Orang","Hebat"];
console.log(word.join(" "));

//push = menambahkan element array di bagian terakhir
//arr di atas
arr.push(6)
console.log(arr);
//console.log(word1.join(" ") + " \n " + word2.join(" "));

//pop
arr.pop()
console.log(arr)

//slice = mengambil data sebagian (membuat array baru)
let arr2=["Salma","Riko","Rudi","Tria"];

//slice (indexAwal.indexAkhir)
let arr3=arr2.slice(1,3);
console.log(arr3);
//splice untuk menyisipkan index tertentu
//splice(idxAwal, mauDihapusBerapa, elemen1, elemen2)
arr2.splice=[1,0, "agus", "Haris"];
console.log(arr2.join("-"))


