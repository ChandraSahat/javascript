// pengulangan FOR Latihan 

/*
for (let i = 1;  //nilai awal
     i <= 50; //kondisi sampai 50
    i++)   //eksekusi +1 sampai 50
{
    if (i % 2 == 0) // EKSEKUSI BILANGAN GENAP 
    {
        console.log(i + ' adalah bilangan genap');
    } 
    else //SELAIN BILANGAN GENAP MAKA GANJIL DI EKSEKUSI NYA PAKAI "ELSE"
    {
        console.log(i + ' adalah bilangan GANJIL');
    }
}
*/


// infinite loop = pengulangan tak terbatas XXX
// buat program untuk menetukan bilangan habis di bagi 3
/*
for (let i = 1;  //nilai awal
     i <= 100; //kondisi sampai 100
    i++)   //eksekusi +1 sampai 100
{
    if (i % 3 == 0) // EKSEKUSI "bilangan yang habis dibagi 3" 
    {
        console.log(i + ' adalah bilangan yang HABIS di bagi 3 ');
    } 
    else // kondisi untuk mengeksekusi statment yang berbeda (selain IF habis di bagi 3)
    {
        console.log(i);
    }
}
*/
// loopng
let i = 50; //nilai awal 
while 
(
     i <= 150 //kondisi sampai 100
)
{
    if (i % 4 == 0) // EKSEKUSI "bilangan yang habis dibagi 3" 
    {
        console.log(i + ' adalah bilangan yang HABIS di bagi 4');
    } 
    else // kondisi untuk mengeksekusi statment yang berbeda (selain IF habis di bagi 3)
    {
        console.log(i);
    }
     i++  //eksekusi +1 sampai 100
}
