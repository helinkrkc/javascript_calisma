let meyveler = ["elma","armut","muz","çilek"];

console.log(meyveler[0]);
console.log(meyveler[meyveler.length-1]);


meyveler.push("kivi");
console.log(meyveler);

meyveler.pop("kivi");
console.log(meyveler);

for(let meyve of meyveler){
    console.log(meyve);
}