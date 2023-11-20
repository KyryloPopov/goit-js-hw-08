import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const imageList = document.querySelector('ul.gallery');

const imageElements = imageListMarkup(galleryItems);

imageList.insertAdjacentHTML('afterbegin', imageElements);

function imageListMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}" />
                </a>
            </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
