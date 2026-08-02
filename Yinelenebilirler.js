let kullanici = {
    isim: "Helin",
    yas: 22,
    sehir: "Bitlis",
    bolum: "Bilgisayar Mühendisliği"
};

let {isim, yas, sehir, bolum} = kullanici;

console.log(isim);
console.log(yas);
console.log(`${isim}-${sehir}-${bolum}`);

let kullanicilar = [
    {isim: "Helin", yas: 21},
    {isim: "Ayşe", yas: 22},
    {isim: "Fatma", yas: 20}
];

// isim ve yas zaten tanımlı, farklı isim kullan
for(let {isim: kIsim, yas: kYas} of kullanicilar){
    console.log(`${kIsim}-${kYas}`);
}

let arr = Array.from("Helin");
console.log(arr);

let sayilar = Array.from({length: 5}, (_, i) => i + 1);
console.log(sayilar);