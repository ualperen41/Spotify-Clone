import API from "./api.js";
import UI from "./ui.js";
// API clasının bir örneğini al
const api = new API();

// UI classının bir örneğini al
const ui = new UI();

// ! Sayfa Yüklendiğinde
document.addEventListener("DOMContentLoaded", async () => {
  // Api'a istek at ve popüler müzikleri al
 const songs= await api.getPopularMusics();
 
// Api'dan alınan şarkı verileri için birer card render edecek fonksiyon
ui.renderCard(songs);
});
