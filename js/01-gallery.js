import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');
const galleryCards = createCards(galleryItems);

function createCards(galleryItems) {
	return galleryItems.map(({ original, preview, description }) => {
		return `<div class="gallery__item">
  		 	<a class="gallery__link" href="${original}">
      		 <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
         </a>
      </div>`;
	})
	 .join('');
}
	
galleryBox.insertAdjacentHTML('beforeend', galleryCards);