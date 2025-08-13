// UI işlemleri için oluşturulan UI classı
class UI {
  // Kurucu metot
  constructor() {
    // Html'den Js'e elemanları çekme
    this.musicList = document.querySelector(".music-list");
    this.form=document.querySelector("form");
  }
  // Şarkı kartlarını renderlayacak fonksiyon
  renderCard(songs) {

    // Bir tane card elemanı oluştur
    // Bu fonksiyondan beklentimiz api'dan alınan her şarkı elemanı için arayüze bir şarkı kartı render etmesi

// musicList'in html içeriği sıfırla
this.musicList.innerHTML ="";

    songs.forEach((song) => {
      // Bir tane card elemanı oluştur
      const card = document.createElement("div");
      // Oluşturulan card elemanına "card" classı ekle
    //   card.classList.add("card");
    card.className = "card";

 // Oluşturulan,classı belirlenen card elemanın Html içeriğini belirle
 card.innerHTML =`
              <figure>
                <img
                  src="${song.images.coverarthq}"
                  alt="music-image"
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

              <div class="music-info">
                <h4>${song.title}</h4>
                <h4>${song.subtitle}</h4>
              </div>
            `;
// Oluşturulan,class eklemesi yapılan ve Html içeriği belirlenen card'ları arayüze ekle
this.musicList.appendChild(card);
     
    });
  }

  // Loader render edicek fonksiyon
  renderLoader () {
     // Bu fonksiyondan beklentimiz music list kısmında bir loader render etmesi


      // musicList kısmında bir loader render et
      this.musicList.innerHTML =` 
     
      <div class="loader-wrapper">
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>

  
</div>
</div>`;
  }
}

export default UI;
