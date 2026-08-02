async function kullanicilariGetir() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) throw new Error("Hata!");
        let data = await response.json();
        data.forEach(k => console.log(k.name));
        }catch(hata){
            console.log(hata);
        }
}


kullanicilariGetir();