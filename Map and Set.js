let kullanici = new Map();
kullanici.set("isim","Helin");
kullanici.set("yas",21);
kullanici.set("sehir","Van");

console.log(kullanici.get("isim"));
console.log(kullanici.size);


for(let[anahtar , deger] of kullanici){
    console.log(`${anahtar}:${deger}`);
}

let sayilar = [1,2,3,2,1,4,3,5];
let tekrarsiz = [...new Set(sayilar)];
console.log(tekrarsiz);