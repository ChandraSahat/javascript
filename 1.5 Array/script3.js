function Penjumlahan(a,b)
{
    return a+b;

}

//fungsi deklarasi
function perkalian (a,b)  
{
    return a*b;
}

function pengurangan (a,b) 
{
    return a-b;
}
function pembagian (a,b) 
{
    return a/b;
}

let lanjut;

do {

console.log ("--aplikasi KALKULATOR SEDERHANA --");
console.log ("--SILAHKAN PILIH MENU DI BAWAH INI : --");
console.log ("--1. PENJUMLAHAN --");
console.log ("--2. PENGURANGAN --");
console.log ("--3. PERKALIAN --");
console.log ("--4. PEMBAGIAN --");
console.log ("------------------------------------- --");
const menu=prompt("Pilih menu :");

let a,b;
//function yang bisa mengembalikan "return"
switch (menu) 
{
    case "1":
        a = parseInt (prompt ("Masukan nilai a :  "));
        b = prompt ("Masukan nilai b :  ");
        console.log(parseInt(Penjumlahan(a,b)));

        break;

    case "2":
        a = prompt ("Masukan nilai a :  ");
        b = prompt ("Masukan nilai b :  ");
        console.log(parseInt(pengurangan(a,b)));
        break;

        


    case "3":
        a = prompt ("Masukan nilai a :  ");
        b = prompt ("Masukan nilai b :  ");
        console.log(parseInt(perkalian(a,b)));
        break;

    
           

    case "4":
        a = prompt ("Masukan nilai a :  ");
        b = prompt ("Masukan nilai b :  ");
        pembagian(a,b);
        console.log(parseFloat(pembagian(a,b)));
        break;

        default:
            alert ("Menu yang anda pilih tidak tersedia !");
            break;

}

lanjut=prompt("Mau pilih menu yang lain ? (Y/T)");  
}

while(lanjut === "Y" || lanjut === "y");

console.log ("--Program Selesai deh...--");
console.log ("--TERIMAKASIH...--");

//fungsi ekpresi

//arrow--------------------------------------------------------------
