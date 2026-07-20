/*const captionEl = document.getElementById("slider-caption");

const images = [
  "fakeskinimages/fakeskin1.jpeg",
  "sketchimages/sketch1.jpeg",
  "printimages/print1.jpeg",
  "images/test3.png"
];

const captions = [
  "Fake Skin",
  "Sketches",
  "Final Prints",
  "About Me"
];

const links = [
  "fakeskin.html",
  "sketches.html",
  "prints.html",
  "aboutme.html"
];

let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");

const dotNav = document.getElementById("dot-nav");


function showImage(index) {
  const sliderLink = document.getElementById("slider-link");

  sliderImage.classList.remove("loaded");
  sliderImage.src = images[index];

  sliderLink.href = links[index];

  sliderImage.onload = () => {
    sliderImage.classList.add("loaded");
  };


  captionEl.textContent = captions[index];


  updateDots(index);
}


  sliderImage.onload = () => {
    sliderImage.classList.add("loaded");
  };


function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

let autoRotate = setInterval(nextImage, 5000);

function stopAutoRotate() {
  clearInterval(autoRotate);
}

document.getElementById("next-btn").addEventListener("click", () => {
  nextImage();
  stopAutoRotate();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  prevImage();
  stopAutoRotate();
});


showImage(currentIndex);

function createDots() {
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentIndex = i;
      showImage(currentIndex);
      stopAutoRotate();
    });
    dotNav.appendChild(dot);
  });
}


function updateDots(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}


createDots();
showImage(currentIndex);*/

const button = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

button.addEventListener("click", () => {
    nav.classList.toggle("active");
});

button.textContent = nav.classList.contains("active")
    ? "✕ Close"
    : "☰ Menu";
