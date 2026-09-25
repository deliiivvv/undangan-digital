const button = document.querySelector("button");
const cover = document.querySelector(".cover");
const invitation = document.querySelector(".invitation");

button.addEventListener("click", function () {

    cover.style.display = "none";

    invitation.style.display = "block";

});
const weddingDate = new Date("2027-07-12T09:00:00+07:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});

lightboxClose.addEventListener("click", function () {

    lightbox.style.display = "none";

});
const music = document.getElementById("wedding-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicButton.textContent = "❚❚";

    } else {

        music.pause();

        musicButton.textContent = "♫";

    }

});
const rsvpForm = document.querySelector(".rsvp-form");

rsvpForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nama = rsvpForm.querySelector("input").value;
    const kehadiran = rsvpForm.querySelectorAll("select")[0].value;
    const jumlah = rsvpForm.querySelectorAll("select")[1].value;

    fetch("https://script.google.com/macros/s/AKfycbz5qH0qvwL5SzSg4iX-atFx5IIXn_s5QrDsg1WLJ57MeA8x8A0bTgvwWW_VpOj8Gf8q4w/exec", {
        method: "POST",

        body: JSON.stringify({
            nama: nama,
            kehadiran: kehadiran,
            jumlah: jumlah
        })
    })
    .then(function () {

        alert("Terima kasih! Konfirmasi kehadiran berhasil dikirim.");

        rsvpForm.reset();

    })
    .catch(function () {

        alert("Maaf, terjadi kesalahan. Silakan coba lagi.");

    });

});