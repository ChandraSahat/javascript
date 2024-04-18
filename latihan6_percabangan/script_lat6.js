




console.log(" Menu kalkulator")
console.log("1. Penjumlahan")
console.log("2. Pengurangan")
console.log("3. perkalian")
console.log("4. pembagian")
console.log("5. keluar program")
console.log("")

const menu_calculator=prompt(" Masukan Menu 1-5 !");
if (menu_calculator <=4)
{
angka1= parseInt (prompt("MAsukaan Angka pertama : "));
 angka2 =parseInt (prompt("MAsukaan Angka kedua : "));   
 console.log("Angka Pertama : "+angka1);
 console.log("Angka kedua : "+angka2);
}


let operasi ;   //penggunaan switch
switch (menu_calculator)
{
    case "1":
        operasi= angka1 + angka2 ;
        console.log("Hasil dari : "+angka1+"+"+angka2+"="+operasi)
    break;
    case "2":
        operasi=angka1-angka2;
        console.log("Hasil dari : "+angka1+"-"+angka2+"="+operasi)
    break;
    case "3":
        operasi=angka1*angka2;
        console.log("Hasil dari : "+angka1+"X"+angka2+"="+operasi)
    break;
    case "4":
        operasi=angka1/angka2;
        console.log("Hasil dari : "+angka1+"/"+angka2+"="+operasi)
    break;
    //case "5":
        default:
    console.log ("Keluar program...Terimakasih ")
    break;

}
console.log(operasi);
 