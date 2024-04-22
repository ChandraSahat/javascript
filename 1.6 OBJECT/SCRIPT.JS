const mahasiswa=
{
 // KEY-VALUE PAIR (PASANGAN KUNCI NILAI)
 //key : value
nama: "ChanHad", 
nim: "12548",
umur : 19,
};

console.log(mahasiswa.nama)
console.log(mahasiswa.nim)
console.log(mahasiswa.umur)

mahasiswa["Alamat"]= "RawaLele Pos";
mahasiswa["No_telp"]= "08161616";
mahasiswa["sapa"] = function()
{console.log("Hallow Nama Saya Sapa")

};


console.log(mahasiswa)
console.log(mahasiswa.Alamat)
console.log(mahasiswa.sapa());

delete mahasiswa["nim"];  //menghapus properti 
console.log(mahasiswa)

//array Object
const siswaBLK=[
    {
        nama:"Taopik Nur",
        Alamat: "baduy",
        umur:35,
    },
    {
        nama:"Aduloh",
        Alamat: "LA",
        umur:21,
    },
    {
        nama:"Yuli",
        Alamat: "Kota Baru",
        umur:29,
    },
    
];

//console.log("Hallo, nama saya "+siswaBLK[1].nama +"alamat di "+siswaBLK[1].Alamat", umur saya "+siswaBLK[1].umur);
console.log(this)