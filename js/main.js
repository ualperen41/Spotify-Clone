import API from "./api.js";
import UI from "./ui.js";
// API clasının bir örneğini al
const api = new API();

// UI classının bir örneğini al
const ui = new UI();

// ! Sayfa Yüklendiğinde
document.addEventListener("DOMContentLoaded", async () => {

// Loaaderı render et
ui.renderLoader();

  // Api'a istek at ve popüler müzikleri al
 const songs= await api.getPopularMusics();
 
// Api'dan alınan şarkı verileri için birer card render edecek fonksiyon
ui.renderCard(songs);
});

// ! Form gönderildiğinde

ui.form.addEventListener("submit",async (e) => {
  // Sayfa yyenilemeyi engelle
  e.preventDefault();

// ınput değerine eriş


 const query = e.target[0].value.trim();

 // Eğer query değeri yoksa kullanıcı uyarı ver
 if (!query) {
  // Kullanıcıya bildirim gönder
  alert("Lütfen geçerli bir arama işlemi gerçekleştiriniz!!");

  // Fonksiyonu durdur
  return;
 }

 // Formun gönderilmesi sonucunda elde edilen query değeri ile api e istek at
 const songs = await api.getSearchMusic(query);

// api'dan gelen verileri ekrana bas
ui.renderCard(songs);
});

