const photos = document.querySelectorAll(".photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector(".close");

// Ouvrir l'image
photos.forEach(photo => {
    photo.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = photo.src;
    });
});

// Fermer avec le X
close.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Fermer si on clique sur le fond noir
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});