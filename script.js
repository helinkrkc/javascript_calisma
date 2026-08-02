const API_KEY = "YOUR_API_KEY";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

let buton = document.querySelector("#aramaButon");
let input = document.querySelector("#sehirInput");
let sonucDiv = document.querySelector("#sonuc");
let hataDiv = document.querySelector("#hata");

async function havaDurumuGetir(sehir) {
    try{
        let response = await fetch(
            `${API_URL}?q=${sehir}&appid=${API_KEY}&units=metric&lang=tr`
        );

        if(!response.ok){
            throw new Error("Şehir bulunamadı!");
        }

        let data = await response.json();

        document.querySelector("#sehirAdi").textContent = data.name;
        document.querySelector("#sicaklik").textContent = `🌡️ ${Math.round(data.main.temp)}°C`;
        document.querySelector("#durum").textContent = `☁️ ${data.weather[0].description}`;
        document.querySelector("#nem").textContent = `💧 Nem: ${data.main.humidity}%`;

        sonucDiv.style.display = "block";
        hataDiv.textContent = "";

    }catch(hata){
        hataDiv.textContent = hata.message;
        sonucDiv.style.display = "none";
    }
    
}

buton.addEventListener("click", () =>{
    let sehir = input.value.trim();
    if(sehir){
        havaDurumuGetir(sehir);
    }else{
        hataDiv.textContent = "Lütfen şehir gir!";
    }
});


input.addEventListener("keypress",(e) => {
    if(e.key === "Enter"){
        buton.click();
    }
});
