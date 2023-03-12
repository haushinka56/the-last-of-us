const carouselButton = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");

carouselButton.forEach((button, i) => {
  button.addEventListener("click", () => {
    deselectButton();
    selectButton(button);
    hideActiveImage();
    selectActiveImage(i);
  });
});

function deselectButton() {
  const selectedButton = document.querySelector(".selected");
  selectedButton.classList.remove("selected");
}

function selectButton(button) {
  button.classList.add("selected");
}

function hideActiveImage() {
  const selectedImage = document.querySelector(".active");
  selectedImage.classList.remove("active");
}

function selectActiveImage(i) {
  images[i].classList.add("active");
}
