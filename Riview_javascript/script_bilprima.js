// bilangan prima (looping dari 1 sampai 100)
for (let no = 1; no <= 100; no++) 
{
    let Bil_prima = true;

    // Bilangan prima harus lebih besar dari 1
    if (no > 1) 
    {
        // Loop untuk memeriksa apakah num bisa dibagi oleh bilangan lain selain 1 dan num itu sendiri
        for (let i = 2; i < no; i++) 
        {
            if (no % i === 0) 
            {
                Bil_prima = false; 
                break; // Keluar dari loop karena sudah pasti bukan bilangan prima
            }
        }
    } 
       else 
        {
        Bil_prima = false; // Bilangan kurang dari atau sama dengan 1 bukan bilangan prima
        }

    // cetak
    if (Bil_prima) {
        console.log(no + " >> Adalah bilangan prima");
    } 
    
    else {
        console.log(no);
    }
}
