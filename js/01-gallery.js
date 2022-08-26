import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");

const galleryMarckup = makeGalleryMarkup(galleryItems);

divGallery.insertAdjacentHTML("beforeend", galleryMarckup);

function makeGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href=${original}>
         <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
      </a>
      </div>`;
    })
    .join("");
}
console.log(makeGalleryMarkup);

divGallery.addEventListener("click", on);
