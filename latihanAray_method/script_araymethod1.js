// 1. buat dan tampilkan Nama mahasiswa 
let nama=["Andrew", "Bob", "Clark", "David", "Ethan", "Fernando", "Gabriel"];
console.log(nama.join("-"));

//2. Tambahkan nama
nama.push("Harold","Iglesias","Jackson");
console.log(nama);

//3. Tampilkan nama David, Bob dan Fernando pada Console
const nama2= 
    [
    nama.slice(1,2),
    nama.slice(3,4),
    nama.slice(5,6),
    ];
console.log(nama2.join(", "));

//4. Hapus nama "Jackson" Dari array lalu tampilkan ke console
nama.pop();
console.log(nama);

//5. Hapus nama "Andrew" (element pertama) dari array lalu tampikan ke console
nama.shift();
console.log(nama);

//6. Tambahkan nama "Andy" sebelum Bob, lalu tampilkan di console
nama.unshift("Andy");
console.log(nama);

//7. Ubah nama fernando menjadi Francisco, lalu tampilkan di console (5)
nama.splice(5,1, "Francesco"); //method splice untuk menyisipkan 
console.log(nama);

//8. Hapus nama "Ethan" dari aRRAY, lalu tampilkan di console
nama.splice(4, 1); //perintah menghapus element "Ethan"
console.log(nama);

//Foreach = sama kayak perulangan "For"
const nilai8=[80,90.76,78];
nilai8.forEach (function (e,i) 
{
    console.log("index ke- "+i+ " = " +e);
}); 

//sort = mengurutkan array
console.log (nilai8.sort())

//map =Method map() digunakan untuk membuat array baru dengan hasil pemanggilan fungsi pada setiap elemen dalam array yang ada
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

//Method filter() digunakan untuk membuat array baru dengan elemen-elemen yang lolos uji kondisi tertentu
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//find = Method find() digunakan untuk mengembalikan nilai 
//dari elemen pertama dalam array yang memenuhi kondisi yang diberikan
const found = numbers2.find(num => num > 2);
console.log(found); // Output: 30 (elemen pertama yang lebih besar dari 25)
