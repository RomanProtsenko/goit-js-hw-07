import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

const galleryList = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`).join('');

gallery.insertAdjacentHTML('afterbegin', galleryList);


gallery.onclick = (evt) => {
 if (evt.target.tagName !== 'IMG') {
        return;
    }
    evt.preventDefault();
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`, {
        onShow: () => {
            document.addEventListener('keydown', closeModal);
        },
        onClose: () => {
            document.removeEventListener('keydown', closeModal);
        },
    });
    instance.show();
    
        function closeModal(evt) {
       if (evt.code !== 'Escape') {
           return;
       } 
            instance.close();
    }

}