let promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("2 saniye sonra geldi");
    },2000);
});


promise
   .then(sonuc => console.log(sonuc))
   .catch(hata => console.log(hata))
   .finally(() => console.log("İşlem tamamlandı"));
   
