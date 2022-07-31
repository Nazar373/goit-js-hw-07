import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const images = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', images);

gallery.addEventListener('click', modalWindow);

function createGalleryItems(items) {
  return items
  .map(({preview, original, description}) => {
    return `
      <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>`
  }).join("")
};

function modalWindow(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}">
  `);
  instance.show();
  gallery.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
};

