// form-pesanan.js
// ganti dengan nomor kedai
const NOMOR_KEDAI = "6281200000000";

const form = document.getElementById("form-pesanan");

form.addEventListener("submit", (event) => {
  // cegah formulir dikirim dengan cara bawaan
  event.preventDefault();
  const nama = document.getElementById("nama").value;
  const pesanan = document.getElementById("pesanan").value;
  const teks = "Halo Kedai Kopi Senja, saya " + nama +
    ". Pesan: " + pesanan;
  const url = "https://wa.me/" + NOMOR_KEDAI +
    "?text=" + encodeURIComponent(teks);
  window.open(url, "_blank");
});
