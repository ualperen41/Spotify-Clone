// Api Classı

class API {
  // Kurucu metot
  constructor() {
    // baseUrl i class yapısı içinde tekrar kullanbilmek için tanımla
    this.baseUrl = "https://shazam.p.rapidapi.com";

    // options objesini class yapısı içinde tanımla
    this.options = {
      method: "GET",
      headers: {
       'x-rapidapi-key': 'fc3ff5bfe6msh6f9311aad68e7b2p157cd3jsn9c5007e153fe',
		'x-rapidapi-host': 'shazam.p.rapidapi.com',
      },
    };
    // müzik verisi
    this.musics = [];
  }

  // Popüler müzikleri alacak fonksiyon
  async getPopularMusics() {
    // Bu fonksiyondan beklentimiz api'dan popüler müzikleri alması ve return etmesi olacak.
    try {
      // Api isteği at
      const response = await fetch(
        `${this.baseUrl}/search?term=Bruno Mars
        }`,
        this.options
      );

      // Api'dan gelen response'u Js nesnesine çevir
      const data = await response.json();
      // Müzik verisi formatla
      const formatted = data.tracks.hits.map((item) => item.track);

      // class'ın içerisine api'den gelen müzikleri kaydet
      this.musics = formatted;
     
      // Elde edilen veriyi proje içerisinde kullanacağımız formata getirmek için dönüştür
      return formatted;
    } catch (error) {
      // Eğer api isteği sırasında bir hata oluşursa bu durumda bir uyarı gönder
      alert("Şarkılar alınırken bir hata oluştu!!");

      // Hata durumunda boş bir dizi return et
      return [];
    }
  }

  // Aratılan şarkıları alacak fonksiyon
  async getSearchMusic(query) {
    // Bu fonksiyondan beklentimiz aratılan kelimeye göre api'dan şarkı verileri almasıdır.Bunun için fonksiyona dışarıdan "query" parametresi gönderiyor akabinde ise bu parametreyi api'isteği içerisinde "term" parametresinin karşılığı olarak kullanıyoruz.
    try {
      // Api isteği at
      const response = await fetch(
        `${this.baseUrl}/search?term=${query}`,
        this.options
      );

      // Api den gelen veriyi JSON dan Js nesnesine çevir
      const data = await response.json();

       // müzik verisini formatla
      const formatted = data.tracks.hits.map((item) => item.track);
      // class'ın içerisine api den gelen müzikleri kaydet
       this.musics = formatted;
      // Api'dan gelen ve Js içerisinde kullanılabilecek şekilde formatlanan değeri fonksiyon çağırıldığında return et
    
     return formatted;
    } catch (error) {
      // Kullanıcıya bildirimde bulun
      alert(
        "Arama işlemi sırasında bir hata oluştu.Lüften daha sonra tekrar deneyiniz."
      );

      // Hata durumunda boş bir dizi return et

      return [];
    }
  }
}

export default API; // Dosya dışında kullanmak için
