// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");


const markup = galleryItems.map((item) => 
`<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt="${item.description}" />
</a>`).join("");

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});
