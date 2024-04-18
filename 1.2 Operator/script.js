let a=3
let b=2

let c=a+b
console.log(c);
a=5;
b=3;
c=a*b
console.log(c);


//Latihan 
//1.penjumlahan
let e=8;
let r=6;

q=e+r;
console.log(q);

//2.Pengurangan

let x=3
let y=5
console.log(x+=y) //x=x+y =8  fungsi op assegment
console.log(x+=y) //13
console.log((x-=y));

let k=5;
console.log(k++); //fungsinya increnent/ menaikan angka 1
console.log(k++);
console.log(k++);

console.log(k--);
//Operator perbandingan

//Operator unary
let angka1=10
console.log(angka1--);
console.log(angka1--);
console.log(angka1--);

let i=10
i++ //increment(menambahkan 1 kedalam angka sebelumnya )
i++
++i

i--; //decrement (mengurangi 1 kedalam angka sebelumnya)
i--;


//operator string
const kata1="selamat"
const kata2="datang"
console.log(kata1+" "+kata2);
console.log(kata2+" "+kata2);
console.log(kata2+""+kata2);
//Operator typeof 

//Operator Ternary
let angka2=16
const ganjilgenap=(angka2%2===0) ? "ini bilangan genap":"bilangan ganjil";
console.log(ganjilgenap);

//>>contoh OP ternary
const password="luwakwhitecoffe"
const islogin=(password ==="luwakwhitecoffe") ?"Anda mendapat CUAN":"Lo Bayar GUE!";
console.log("INI CONTOH OP TERNARY >>>>>>" +islogin)


//Operator aritmatika "pembahasan"
//+,-,/,*,**,%

let panjang=20;
let lebar=30;

let persegi_panjang=panjang*lebar;
console.log("keliling persegi panjang:"+ persegi_panjang);
let k_persegi=2*panjang+lebar;
console.log("luas persegi panjang" +persegi_panjang)

//operator logika
//&& (AND), || (or), ! NEGASI hasilnya =TRUE / FALSE
console.log(10%2===1 || 10/5===2);
console.log(16%2===1 && 10/5===7);
console.log(10%2===2 && 10/5===2);
console.log(!true)

/* komentar lebih dari 1 baris
 */

//BUILT IN FUNCTION = PROMPT, ALERT, DIALOG <<
// contoh penggunaan OP Prompt >>
let alas=prompt("masukan alas: ")
console.log("Alas Segitiga "+alas)

let tinggi=prompt("Masukan tinggi :")
console.log("Tinggi Segitiga:"+tinggi)

let Segitiga=(alas*tinggi)/2;
console.log("Luas Segitiga :" +Segitiga);

/* tugas latihan kalkulator BMI
pakai prompt() OP3_nama
*/

let tinggibdn=prompt("Masukan Tinggi badan Anda :");
console.log("Tinggi Badan Anda"+tinggibdn);

let beratbdn=prompt("Masukan tinggi badan Anda :");
console.log("berat badan"+beratbdn);

let indexBMI= beratbdn / (tinggibdn * tinggibdn);
console.log("Jadi Index BMI")

