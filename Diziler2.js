

let users = [
  { id: 1, name: "Ahmet", age: 22, isActive: true },
  { id: 2, name: "Zeynep", age: 19, isActive: false },
  { id: 3, name: "Mehmet", age: 25, isActive: true },
  { id: 4, name: "Elif", age: 17, isActive: true },
  { id: 5, name: "Can", age: 30, isActive: false },
];


users.filter(u => u.isActive);

users.map(item => item.name);

users.filter(u => u.age > 18).map(item => item.name).join(',');


users.reduce((toplam,kullanici) => {
    return kullanici.isActive ? toplam + 1 : toplam;
},0);

users.reduce((sonuc , kullanici) => {
    sonuc[kullanici.name] = kullanici.age;
    return sonuc;
},{});


let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sayilar.filter(s => s>5).map(s => s*s);