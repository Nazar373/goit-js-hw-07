import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

toCreateGallerySlide();

var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt' });

function toCreateGallerySlide() {
  const gallerySlide = galleryItems
  .map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
  }).join('');
  gallery.insertAdjacentHTML('beforeend', gallerySlide)
}
