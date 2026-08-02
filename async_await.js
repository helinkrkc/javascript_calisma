function bekle(ms){
    return new Promise(resolve => setTimeout(resolve,ms));

}

async function main() {
    console.log("Başladı"),
    await bekle(2000);
    console.log("2 saniye bekledi");
    await bekle(1000);
    console.log("1 saniye daha bekledi");
    console.log("Bitti");
}

main();