function kubus(a) {
  return a * a * a;
}

function balok(a, b, c) {
  return a * b * c;
}

function tabung(a, b) {
  return 3.14 * a * a * b;
}

function bola(a) {
  return (4 / 3) * 3.14 * a * a * a;
}

function kerucut(a, b) {
  return (3.14 * a * a * b) / 3;
}

let lanjut;

do {
  console.log("--KALKULATOR VOLUME--");
  console.log("=====================");
  console.log("1. Volume Kubus");
  console.log("2. Volume Balok");
  console.log("3. Volume Tabung");
  console.log("4. Volume Bola");
  console.log("5. Volume Kerucut");
  console.log("=====================");

  const menu = prompt("Pilih Menu dari 1 - 5");
  let a, b, c;

  switch (menu) {
    case "1":
      a = prompt("Masukkan Sisi Kubus : ");
      console.log("Sisi = " + a)
      console.log("Rumus s * s * s")
      console.log("Hasil dari Volume Kubus")
      console.log(parseInt(kubus(a)));
      break;

    case "2":
      a = prompt("Masukkan Panjang Balok : ");
      b = prompt("Masukkan Lebar Balok : ");
      c = prompt("Masukkan Tinggi Balok : ");
      console.log("Panjang = " + a)
      console.log("Lebar = " + b)
      console.log("Tinggi = " + c)
      console.log("Rumus P * L * T")
      console.log("Hasil dari Volume Balok")
      console.log(parseInt(balok(a, b, c)));
      break;

    case "3":
      a = prompt("Masukkan Jari-Jari Tabung : ");
      b = prompt("Masukkan Tinggi Tabung : ");
      console.log("Hasil dari Volume Tabung")
      console.log(parseFloat(tabung(a, b)));
      break;

    case "4":
      a = prompt("Masukkan Jari-Jari Bola : ");
      console.log("Jari-jari = " + a)
      
      console.log(parseFloat(bola(a)));
      break;

    case "5":
      a = prompt("Masukkan Jari-Jari Kerucut : ");
      b = prompt("Masukkan Tinggi Kerucut : ");
      
      console.log(parseFloat(kerucut(a, b)));
      break;

    default:
      alert("Mau lanju atau tidak");
      break;
  }
  lanjut = prompt("Mau Lanjut Menu lain Y/T");
} while (lanjut === "Y" || lanjut === "y");

console.log("--PROGRAM SELESAI--");
console.log("Terima kasih telah menggunakan kalkulator ini.");