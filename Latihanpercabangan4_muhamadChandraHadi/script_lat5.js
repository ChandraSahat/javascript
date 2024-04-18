const no_bulan=prompt("MAsukan No bulan : ");

let keterangan_bulan;   //penggunaan switch
switch(bulan) {
    case "1":
    keterangan_bulan="JAnuari";
    break;
    case "2":
    keterangan_bulan="Februari";
    break;
    case "3":
    keterangan_bulan="Maret";
    break;
    case "4":
    keterangan_bulan="April";
    break;
    case "5":
    keterangan_bulan="Mei";
    break;
    case "6":
    keterangan_bulan="JUni";
    break;
    case "7":
    keterangan_bulan="Juli"
    break;
    case "8":
    keterangan_bulan="Agustus"
    break;
    case "9":
    keterangan_bulan="septemb"
    break;
    case "10":
    keterangan_bulan="Oktober"
    break;
    case "11":
    keterangan_bulan="November"
    break;
    case "12":
    keterangan_bulan="Desember"
    break;
    default:
        console.log ("Bulan Nya Gak Muncul, Bro >> 1-12 Doang");
        break;
}
    