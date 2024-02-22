let currentImageIndex = 0;
const imageGap = 10;

const imagesContainer = document.querySelector(".my-work .images-container");
const images = imagesContainer.querySelectorAll("img");

function updateSlider() {
  let totalWidth = 0;
  images.forEach((img) => {
    totalWidth += img.offsetWidth + imageGap;
  });
  imagesContainer.style.width = `${totalWidth}px`;

  const containerWidth = imagesContainer.parentElement.offsetWidth;
  const imageWidth = images[currentImageIndex].offsetWidth;
  const scrollPosition =
    images[currentImageIndex].offsetLeft - containerWidth / 2 + imageWidth / 2;

  imagesContainer.scrollTo({
    left: scrollPosition,
    behavior: "smooth",
  });
}

function slide(direction) {
  if (direction === "left") {
    currentImageIndex = Math.max(currentImageIndex - 1, 0);
  } else {
    currentImageIndex = Math.min(currentImageIndex + 1, images.length - 1);
  }

  updateSlider();
}

document
  .querySelector("#slideLeft")
  .addEventListener("click", () => slide("left"));
document
  .querySelector("#slideRight")
  .addEventListener("click", () => slide("right"));

window.addEventListener("resize", updateSlider);
updateSlider();
