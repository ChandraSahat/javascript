//cara pertama 
const angka1 = new Array(1,2,3,4,5);
console.log(angka1)

//acara kedua
const angka2 = new Array (5)
console.log(angka2)

//cara ketiga
const angka3 = new Array(5);
console.log(angka3)
let angka4 =[]
//cara menampilkan isi array
 console.log(angka1[0]) //1
 console.log (angka1[1]) //3
 console.log (angka1[2]) //5

 //cara menamilkan isi Array part 2

 for (let i=0 ; i < angka1.length; i++)
 {
    console.log("index ke- " + i + " =" + angka1[i]);
 }
 
 //cara menambahkan isi ke dalam array
 angka2[0]=5
 angka2[1]=12
 angka2[2]=17
 angka2[3]=21
 angka2[4]=21

 console.log(angka2);

 console.log(angka4);

console.log("Hellow World".length);

//cara menghapus array
angka3[2]=undefined //menghapus dg pakai undefined dengan index


