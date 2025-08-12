// Api Classı

class API { 
      // Kurucu metot
      constructor() {
// baseUrl i class yapısı içinde tekrar kullanbilmek için tanımla
this.baseUrl="https://shazam.p.rapidapi.com"

        // options objesini class yapısı içinde tanımla
        this.options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c2c0ebb657msh4b3d509a89465c4p1bd01fjsnd52e1be18451',
		'x-rapidapi-host': 'shazam.p.rapidapi.com',
	},
};
      }

       // Popüler müzikleri alacak fonksiyon
        async getPopularMusics() {
        // Bu fonksiyondan beklentimiz api'dan popüler müzikleri alması ve return etmesi olacak.
try{
       // Api isteği at
       const response = await fetch(`${this.baseUrl}/search?term=neffex`,this.options);

         // Api'dan gelen response'u Js nesnesine çevir
          const data = await response.json();

           // Elde edilen veriyi proje içerisinde kullanacağımız formata getirmek için dönüştür
           return data.tracks.hits.map((item) => item.track);
    
} catch(error) {
    // Eğer api isteği sırasında bir hata oluşursa bu durumda bir uyarı gönder
      alert("Şarkılar alınırken bir hata oluştu!!");

      // Hata durumunda boş bir dizi return et
      return [];
}
     
       }

        // Aratılan şarkıları alacak fonksiyon
}

export default API; // Dosya dışında kullanmak için