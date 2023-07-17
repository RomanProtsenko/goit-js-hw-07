import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery');

const galleryElements = [];

galleryItems.forEach(galleryItem => {
    const item = document.createElement('li');
    item.classList.add('gallery__item');
    
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = galleryItem.original;
    
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = galleryItem.preview;
    img.alt = galleryItem.description;
    
    item.appendChild(link);
    link.appendChild(img);

    galleryElements.push(item); 
});

list.append(...galleryElements);
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionPosition: "bottom",
    captionsData: "alt",
    captionDelay: 250,
});