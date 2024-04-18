for (let i = 0; i <= 100; i++) 
{
    // Periksa apakah angka adalah kelipatan 3 dan 5
    if (i % 3 === 0 && i % 5 === 0) 
    {
        console.log("FizzBuzz");
    }
    // Periksa apakah angka adalah kelipatan 3 (namun bukan kelipatan 5)
    else if (i % 3 === 0)  //jika i dibagi 3 sama dengan 0
    {
        console.log( " Fizz"); //maka cetak dengan "Fizz"
    }
    // Periksa apakah angka adalah kelipatan 5 (namun bukan kelipatan 3)
    else if (i % 5 === 0) 
    {
        console.log("Buzz");
    }
    // Jika bukan kelipatan 3 maupun 5, cetak angka itu sendiri
    else {
        console.log(i);
    }
}
